import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, User, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/types/blog"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return ""
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          {post.featured_image ? (
            <Image
              src={post.featured_image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">No image</span>
            </div>
          )}

          {post.is_featured && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-amber-500 text-white">
                <Star className="h-3 w-3 mr-1" /> Featured
              </Badge>
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        {post.categories && post.categories.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1">
            {post.categories.slice(0, 2).map((category) => (
              <Link key={category.slug} href={`/blog?category=${category.slug}`}>
                <Badge variant="outline" className="text-xs hover:bg-gray-100">
                  {category.name}
                </Badge>
              </Link>
            ))}
            {post.categories.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{post.categories.length - 2}
              </Badge>
            )}
          </div>
        )}

        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>

        {post.excerpt && <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>}

        <div className="flex flex-wrap items-center text-xs text-gray-500 gap-x-4 gap-y-1">
          {post.published_at && (
            <div className="flex items-center">
              <CalendarDays className="h-3 w-3 mr-1" />
              {formatDate(post.published_at)}
            </div>
          )}

          {post.reading_time && (
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {post.reading_time} min read
            </div>
          )}

          {post.author && (
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              {post.author.full_name || post.author.username}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
