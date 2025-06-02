import Link from "next/link"
import { getBlogPosts, getCategories } from "@/lib/blog-api"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CategorySidebar } from "@/components/blog/category-sidebar"
import { BlogPostCard } from "@/components/blog/blog-post-card"
import { Search, AlertTriangle } from "lucide-react"
import type { BlogFilters } from "@/types/blog"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogListPage({
  searchParams,
}: {
  searchParams?: {
    page?: string
    search?: string
    category?: string
    author?: string
    featured?: string
    ordering?: string
  }
}) {
  // Parse search params into filters
  const filters: BlogFilters = {
    page: searchParams?.page ? Number.parseInt(searchParams.page) : 1,
    page_size: 9,
    search: searchParams?.search || "",
    category: searchParams?.category || "",
    author_username: searchParams?.author || "",
    is_featured: searchParams?.featured === "true" ? true : undefined,
    ordering: searchParams?.ordering || "-published_at", // Default to newest first
  }

  let postsData
  let categoriesData
  let errorFetching = null

  try {
    ;[postsData, categoriesData] = await Promise.all([getBlogPosts(filters), getCategories()])
  } catch (error: any) {
    console.error("Failed to fetch blog data:", error)
    errorFetching = error.message || "Could not load blog posts or categories."
  }

  const posts = postsData?.results || []
  const count = postsData?.count || 0
  const categories = categoriesData?.results || []
  const totalPages = Math.ceil(count / filters.page_size!)

  // Helper to generate pagination URLs
  const getPaginationUrl = (page: number) => {
    const params = new URLSearchParams()
    params.set("page", page.toString())
    if (filters.search) params.set("search", filters.search)
    if (filters.category) params.set("category", filters.category)
    if (filters.author_username) params.set("author", filters.author_username)
    if (filters.is_featured) params.set("featured", "true")
    if (filters.ordering) params.set("ordering", filters.ordering)
    return `/blog?${params.toString()}`
  }

  return (
    <>
      <Header />
      <div className="bg-amber-50/30">
        <main className="container mx-auto px-4 py-8 lg:py-12">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-3">Spiritual Insights</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore articles on Vedic wisdom, bhakti-yoga, temple activities, and spiritual living.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <CategorySidebar
              categories={categories}
              currentCategorySlug={filters.category}
              showFeaturedFilter={true}
              isFeatured={filters.is_featured}
            />

            <div className="flex-1">
              <form className="mb-8">
                <div className="relative">
                  <Input
                    type="search"
                    name="search"
                    defaultValue={filters.search}
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-3 text-base border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <button type="submit" className="hidden">
                  Search
                </button>
              </form>

              {errorFetching && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md flex items-center mb-6">
                  <AlertTriangle size={24} className="mr-3" />
                  <p>
                    <strong>Error:</strong> {errorFetching}
                  </p>
                </div>
              )}

              {posts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                  {posts.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                !errorFetching && (
                  <p className="text-center text-gray-600 text-xl py-10">
                    {filters.search
                      ? `No posts found for "${filters.search}".`
                      : "No blog posts available at the moment."}
                  </p>
                )
              )}

              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center space-x-2 sm:space-x-4">
                  {filters.page! > 1 && (
                    <Link href={getPaginationUrl(filters.page! - 1)}>
                      <Button variant="outline">Previous</Button>
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(
                      (page) =>
                        page === 1 ||
                        page === totalPages ||
                        Math.abs(page - filters.page!) < 2 ||
                        (filters.page! < 4 && page < 5) ||
                        (filters.page! > totalPages - 3 && page > totalPages - 4),
                    )
                    .map((page, index, arr) => (
                      <div key={page} className="flex items-center">
                        {index > 0 && page - arr[index - 1] > 1 && <span className="px-2">...</span>}
                        <Link href={getPaginationUrl(page)}>
                          <Button variant={filters.page === page ? "default" : "outline"} size="icon">
                            {page}
                          </Button>
                        </Link>
                      </div>
                    ))}
                  {filters.page! < totalPages && (
                    <Link href={getPaginationUrl(filters.page! + 1)}>
                      <Button variant="outline">Next</Button>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
