import Link from "next/link"
import { getBlogPosts, getCategories, getCategoryBySlug } from "@/lib/blog-api"
import type { Category } from "@/types/blog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CategorySidebar } from "@/components/blog/category-sidebar"
import { BlogPostCard } from "@/components/blog/blog-post-card"
import { notFound } from "next/navigation"
import { Search, AlertTriangle, Tag } from "lucide-react"

export const revalidate = 60

// Optional: Generate static paths for categories
// export async function generateStaticParams() {
//   try {
//     const categoriesData = await getCategories();
//     return categoriesData.results.map((category) => ({
//       categorySlug: category.slug,
//     }));
//   } catch (error) {
//     console.error("Failed to generate static params for blog categories:", error);
//     return [];
//   }
// }

interface BlogCategoryPageProps {
  params: { categorySlug: string }
  searchParams?: { page?: string; search?: string }
}

export default async function BlogCategoryPage({ params, searchParams }: BlogCategoryPageProps) {
  const { categorySlug } = params
  const currentPage = Number(searchParams?.page) || 1
  const searchTerm = searchParams?.search || ""
  const pageSize = 9

  let currentCategory: Category | null = null
  let postsData
  let categoriesData
  let errorFetching: string | null = null

  try {
    ;[currentCategory, postsData, categoriesData] = await Promise.all([
      getCategoryBySlug(categorySlug).catch((err) => {
        console.error(err)
        return null
      }), // Gracefully handle if category not found
      getBlogPosts(currentPage, pageSize, searchTerm, categorySlug),
      getCategories(),
    ])
  } catch (error: any) {
    console.error(`Failed to fetch data for category ${categorySlug}:`, error)
    errorFetching = error.message || "Could not load data for this category."
  }

  if (!currentCategory && !errorFetching) {
    // If getCategoryBySlug returned null and no other error
    notFound() // Category doesn't exist
  }

  const posts = postsData?.results || []
  const count = postsData?.count || 0
  const categories = categoriesData?.results || []
  const totalPages = Math.ceil(count / pageSize)

  return (
    <>
      <Header />
      <div className="bg-amber-50/30">
        <main className="container mx-auto px-4 py-8 lg:py-12">
          <div className="text-center mb-8 lg:mb-12">
            <Tag size={36} className="mx-auto text-primary mb-2" />
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              Category: {currentCategory?.name || categorySlug}
            </h1>
            {currentCategory?.description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{currentCategory.description}</p>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <CategorySidebar categories={categories} currentCategorySlug={categorySlug} />
            <div className="flex-1">
              <form className="mb-8">
                <div className="relative">
                  <Input
                    type="search"
                    name="search"
                    defaultValue={searchTerm}
                    placeholder={`Search in ${currentCategory?.name || "category"}...`}
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
                    {searchTerm
                      ? `No posts found for "${searchTerm}" in this category.`
                      : `No posts in ${currentCategory?.name || "this category"} yet.`}
                  </p>
                )
              )}

              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center space-x-2 sm:space-x-4">
                  {currentPage > 1 && (
                    <Link
                      href={`/blog/category/${categorySlug}?page=${currentPage - 1}${searchTerm ? `&search=${searchTerm}` : ""}`}
                    >
                      <Button variant="outline">Previous</Button>
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(
                      (page) =>
                        page === 1 ||
                        page === totalPages ||
                        Math.abs(page - currentPage) < 2 ||
                        (currentPage < 4 && page < 5) ||
                        (currentPage > totalPages - 3 && page > totalPages - 4),
                    )
                    .map((page, index, arr) => (
                      <div key={page} className="flex items-center">
                        {index > 0 && page - arr[index - 1] > 1 && <span className="px-2">...</span>}
                        <Link
                          href={`/blog/category/${categorySlug}?page=${page}${searchTerm ? `&search=${searchTerm}` : ""}`}
                        >
                          <Button variant={currentPage === page ? "default" : "outline"} size="icon">
                            {page}
                          </Button>
                        </Link>
                      </div>
                    ))}
                  {currentPage < totalPages && (
                    <Link
                      href={`/blog/category/${categorySlug}?page=${currentPage + 1}${searchTerm ? `&search=${searchTerm}` : ""}`}
                    >
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
