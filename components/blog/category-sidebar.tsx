"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tag, Star } from "lucide-react"
import type { Category } from "@/types/blog"

interface CategorySidebarProps {
  categories: Category[]
  currentCategorySlug?: string
  showFeaturedFilter?: boolean
  isFeatured?: boolean
}

export function CategorySidebar({
  categories,
  currentCategorySlug,
  showFeaturedFilter = false,
  isFeatured = false,
}: CategorySidebarProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Helper to generate URLs that preserve other query params
  const getCategoryUrl = (categorySlug?: string) => {
    const params = new URLSearchParams(searchParams.toString())

    // Reset to page 1 when changing category
    params.set("page", "1")

    if (categorySlug) {
      params.set("category", categorySlug)
    } else {
      params.delete("category")
    }

    return `${pathname}?${params.toString()}`
  }

  // Helper to toggle featured filter
  const getToggledFeaturedUrl = () => {
    const params = new URLSearchParams(searchParams.toString())

    // Reset to page 1 when changing filter
    params.set("page", "1")

    if (isFeatured) {
      params.delete("featured")
    } else {
      params.set("featured", "true")
    }

    return `${pathname}?${params.toString()}`
  }

  return (
    <aside className="w-full md:w-64 mb-8 md:mb-0">
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Tag className="mr-2 h-5 w-5" />
          Categories
        </h2>

        <nav className="space-y-1">
          <Link
            href={getCategoryUrl()}
            className={`block px-3 py-2 rounded-md text-sm transition-colors ${
              !currentCategorySlug ? "bg-primary/10 text-primary font-medium" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Posts
          </Link>

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={getCategoryUrl(category.slug)}
              className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                currentCategorySlug === category.slug
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {showFeaturedFilter && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h3 className="text-md font-semibold text-gray-800 mb-3 flex items-center">
              <Star className="mr-2 h-4 w-4" />
              Filters
            </h3>

            <div className="flex items-center space-x-2 px-3 py-2">
              <Link href={getToggledFeaturedUrl()} className="flex items-center space-x-2">
                <Checkbox id="featured-filter" checked={isFeatured} />
                <Label htmlFor="featured-filter" className="text-sm cursor-pointer select-none">
                  Featured Posts Only
                </Label>
              </Link>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
