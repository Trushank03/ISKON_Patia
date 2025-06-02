import Image from "next/image"
import Link from "next/link"
import { getBlogPostBySlug } from "@/lib/blog-api"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { notFound } from "next/navigation"
import { CalendarDays, Clock, User, ArrowLeft, Star } from "lucide-react"
import { AnimateOnView } from "@/components/animate-on-view"

export const revalidate = 60

interface BlogPageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  let post
  try {
    post = await getBlogPostBySlug(params.slug)
  } catch (error) {
    console.error(`Failed to fetch blog post with slug ${params.slug}:`, error)
    notFound()
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return ""
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      <Header />
      <div className="bg-amber-50/30 py-8 lg:py-12">
        <main className="container mx-auto px-4">
          <AnimateOnView animation="fade-in">
            <article className="max-w-3xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-xl">
              <div className="mb-6">
                <Link href="/blog" className="text-primary hover:underline flex items-center text-sm">
                  <ArrowLeft size={16} className="mr-1" />
                  Back to Blog
                </Link>
              </div>

              {post.categories && post.categories.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Link key={category.slug} href={`/blog?category=${category.slug}`}>
                      <Badge variant="outline" className="hover:bg-gray-100">
                        {category.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 leading-tight">
                {post.title}
                {post.is_featured && (
                  <Badge className="ml-2 bg-amber-500 text-white align-middle text-xs">
                    <Star className="h-3 w-3 mr-1" /> Featured
                  </Badge>
                )}
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 sm:mb-8 gap-x-4 gap-y-2">
                {post.published_at && (
                  <div className="flex items-center">
                    <CalendarDays size={16} className="mr-1.5" />
                    {formatDate(post.published_at)}
                  </div>
                )}

                {post.reading_time && (
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1.5" />
                    {post.reading_time} min read
                  </div>
                )}

                {post.author && (
                  <div className="flex items-center">
                    <User size={16} className="mr-1.5" />
                    {post.author.full_name || post.author.username}
                  </div>
                )}
              </div>

              {post.featured_image && (
                <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={post.featured_image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 768px, 1000px"
                    className="object-cover"
                  />
                </div>
              )}

              <div
                className="prose prose-lg max-w-none prose-p:text-gray-700 prose-headings:text-gray-800 prose-a:text-primary hover:prose-a:underline prose-strong:text-gray-700 prose-img:rounded-md prose-img:shadow-sm"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </AnimateOnView>
        </main>
      </div>
      <Footer />
    </>
  )
}
