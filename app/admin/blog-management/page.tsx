"use client"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { PlusCircle, List, Tag, ChevronDown, ChevronUp, AlertCircle, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimateOnView } from "@/components/animate-on-view"
import { useToast } from "@/hooks/use-toast"

import type { BlogPost, Category } from "@/types/blog"
import { getBlogPostsAdmin, getCategoriesAdmin } from "@/lib/blog-api"
import { BlogPostForm } from "@/components/admin/blog/blog-post-form"
import { BlogPostsTable } from "@/components/admin/blog/blog-posts-table"
import { CategoryForm } from "@/components/admin/blog/category-form"
import { CategoriesTable } from "@/components/admin/blog/categories-table"

// Remove these imports
// import { handleDeleteBlogPost } from "@/app/admin/blog-actions"
// import { handleDeleteCategory } from "@/app/admin/category-actions"

// Add these imports instead
import { deleteBlogPost, deleteCategory } from "@/lib/blog-api"
import { revalidateBlogPaths } from "@/app/admin/blog-actions"
import { revalidateCategoryPaths } from "@/app/admin/category-actions"

type AdminSection = "viewPosts" | "addPost" | "editPost" | "viewCategories" | "addCategory" | "editCategory"

export default function BlogManagementPage() {
  const router = useRouter()
  const { toast } = useToast()

  const [activeSection, setActiveSection] = useState<AdminSection>("viewPosts")
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoadingPosts, setIsLoadingPosts] = useState(true)
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [isPostsAccordionOpen, setIsPostsAccordionOpen] = useState(true)
  const [isCategoriesAccordionOpen, setIsCategoriesAccordionOpen] = useState(true)

  const fetchBlogData = useCallback(async () => {
    setIsLoadingPosts(true)
    setIsLoadingCategories(true)
    setError(null)

    try {
      // Get auth token from client-side storage using the correct variable name
      const authToken = typeof window !== "undefined" ? localStorage.getItem("sanatana_access_token") : null

      if (!authToken) {
        throw new Error("Authentication required. Please log in to access admin features.")
      }

      const [postsData, categoriesData] = await Promise.all([
        getBlogPostsAdmin(1, 100, "", "", authToken),
        getCategoriesAdmin(1, 100, authToken),
      ])

      setBlogPosts(postsData.results || [])
      setCategories(categoriesData.results || [])
    } catch (err: any) {
      console.error("Error fetching blog management data:", err)

      // Handle specific authentication errors
      if (err.message.includes("401") || err.message.includes("Authentication")) {
        setError("Authentication failed. Please log in again.")
        // Redirect to login page after a short delay
        setTimeout(() => {
          router.push("/loginadmin")
        }, 2000)
      } else if (err.message.includes("403")) {
        setError("Access denied. You don't have permission to access this resource.")
      } else if (err.message.includes("404")) {
        setError("API endpoint not found. Please check if the backend server is running.")
      } else if (err.message.includes("500")) {
        setError("Server error. Please try again later or contact support.")
      } else {
        setError(err.message || "Failed to load blog data. Please check your connection and try again.")
      }

      toast({
        variant: "destructive",
        title: "Error Fetching Data",
        description: err.message || "Could not load blog posts or categories.",
      })
    } finally {
      setIsLoadingPosts(false)
      setIsLoadingCategories(false)
    }
  }, [toast, router])

  useEffect(() => {
    fetchBlogData()
  }, [fetchBlogData])

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post)
    setActiveSection("editPost")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDeletePostConfirmed = async (slug: string) => {
    try {
      const authToken = localStorage.getItem("sanatana_access_token")
      if (!authToken) {
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description: "You must be logged in to delete posts.",
        })
        return
      }

      await deleteBlogPost(slug, authToken)
      await revalidateBlogPaths(slug)

      toast({ title: "Success", description: "Blog post deleted successfully." })
      fetchBlogData() // Refresh data
      setActiveSection("viewPosts")
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An unexpected error occurred while deleting the post.",
      })
    }
  }

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category)
    setActiveSection("editCategory")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDeleteCategoryConfirmed = async (slug: string) => {
    try {
      const authToken = localStorage.getItem("sanatana_access_token")
      if (!authToken) {
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description: "You must be logged in to delete categories.",
        })
        return
      }

      await deleteCategory(slug, authToken)
      await revalidateCategoryPaths(slug)

      toast({ title: "Success", description: "Category deleted successfully." })
      fetchBlogData() // Refresh data
      setActiveSection("viewCategories")
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An unexpected error occurred while deleting the category.",
      })
    }
  }

  const onFormSuccess = () => {
    fetchBlogData()
    if (activeSection === "addPost" || activeSection === "editPost") {
      setActiveSection("viewPosts")
    } else if (activeSection === "addCategory" || activeSection === "editCategory") {
      setActiveSection("viewCategories")
    }
    setEditingPost(null)
    setEditingCategory(null)
  }

  const onFormCancel = () => {
    if (activeSection === "addPost" || activeSection === "editPost") {
      setActiveSection("viewPosts")
    } else if (activeSection === "addCategory" || activeSection === "editCategory") {
      setActiveSection("viewCategories")
    }
    setEditingPost(null)
    setEditingCategory(null)
  }

  const renderSection = () => {
    switch (activeSection) {
      case "addPost":
        return (
          <BlogPostForm
            allCategories={categories}
            onSuccess={onFormSuccess}
            onCancel={onFormCancel}
            key="add-post-form"
          />
        )
      case "editPost":
        return editingPost ? (
          <BlogPostForm
            allCategories={categories}
            initialData={editingPost}
            onSuccess={onFormSuccess}
            onCancel={onFormCancel}
            key={`edit-post-form-${editingPost.slug}`}
          />
        ) : null
      case "addCategory":
        return <CategoryForm onSuccess={onFormSuccess} onCancel={onFormCancel} key="add-category-form" />
      case "editCategory":
        return editingCategory ? (
          <CategoryForm
            initialData={editingCategory}
            onSuccess={onFormSuccess}
            onCancel={onFormCancel}
            key={`edit-category-form-${editingCategory.slug}`}
          />
        ) : null
      default:
        return null // Tables are rendered outside this switch
    }
  }

  // Function to handle logout
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("sanatana_access_token")
      localStorage.removeItem("sanatana_refresh_token")

      // Clear cookies
      document.cookie = "sanatana_access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
      document.cookie = "sanatana_refresh_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"

      // Redirect to login page
      router.push("/loginadmin")
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Admin Header - Assuming this is standard across admin pages */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/images/iskcon-logo.png" alt="ISKCON Logo" width={80} height={60} className="h-12 w-auto" />
              <span className="ml-3 text-xl font-medium">Admin Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Welcome, Admin</span>
              <button
                onClick={handleLogout}
                className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-md text-sm transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-12">
            {/* <Link href="/admin/dashboard" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
              Dashboard
            </Link> */}
            <Link
              href="/admin/event-creation"
              className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              Events
            </Link>
            <Link
              href="/admin/blog-management"
              className="text-primary border-b-2 border-primary px-3 py-2 text-sm font-medium"
            >
              Blog
            </Link>
            {/* <Link href="/admin/donations" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
              Donations
            </Link>
            <Link href="/admin/users" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
              Users
            </Link>
            <Link href="/admin/settings" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
              Settings
            </Link> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6">
        <AnimateOnView animation="fade-up">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Blog Management</h1>
            <Button
              onClick={fetchBlogData}
              variant="outline"
              size="sm"
              disabled={isLoadingPosts || isLoadingCategories}
            >
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoadingPosts || isLoadingCategories ? "animate-spin" : ""}`} />
              Refresh Data
            </Button>
          </div>

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-6 flex items-center">
              <AlertCircle size={20} className="mr-3" />
              <div>
                <p className="font-semibold">Error Loading Data</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Dynamic Section for Forms */}
          {activeSection === "addPost" ||
          activeSection === "editPost" ||
          activeSection === "addCategory" ||
          activeSection === "editCategory" ? (
            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {activeSection === "addPost" && "Create New Blog Post"}
                  {activeSection === "editPost" && `Edit Blog Post: ${editingPost?.title}`}
                  {activeSection === "addCategory" && "Create New Category"}
                  {activeSection === "editCategory" && `Edit Category: ${editingCategory?.name}`}
                </CardTitle>
              </CardHeader>
              <CardContent>{renderSection()}</CardContent>
            </Card>
          ) : null}

          {/* Blog Posts Section */}
          <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader
              className="cursor-pointer flex flex-row items-center justify-between py-4"
              onClick={() => setIsPostsAccordionOpen(!isPostsAccordionOpen)}
            >
              <div className="flex items-center">
                <List size={24} className="mr-3 text-primary" />
                <CardTitle className="text-2xl">Blog Posts</CardTitle>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveSection("addPost")
                    setEditingPost(null)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  disabled={activeSection === "addPost"}
                >
                  <PlusCircle size={18} className="mr-2" /> Add New Post
                </Button>
                {isPostsAccordionOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
            </CardHeader>
            {isPostsAccordionOpen && (
              <CardContent className="pt-0">
                {isLoadingPosts ? (
                  <div className="flex justify-center items-center py-10">
                    <RefreshCw className="h-8 w-8 animate-spin text-primary" />
                    <span className="ml-2 text-gray-600">Loading posts...</span>
                  </div>
                ) : blogPosts.length > 0 ? (
                  <BlogPostsTable posts={blogPosts} onEdit={handleEditPost} onDelete={handleDeletePostConfirmed} />
                ) : (
                  <p className="text-center text-gray-500 py-6">No blog posts found.</p>
                )}
              </CardContent>
            )}
          </Card>

          {/* Categories Section */}
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader
              className="cursor-pointer flex flex-row items-center justify-between py-4"
              onClick={() => setIsCategoriesAccordionOpen(!isCategoriesAccordionOpen)}
            >
              <div className="flex items-center">
                <Tag size={24} className="mr-3 text-primary" />
                <CardTitle className="text-2xl">Categories</CardTitle>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveSection("addCategory")
                    setEditingCategory(null)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  disabled={activeSection === "addCategory"}
                >
                  <PlusCircle size={18} className="mr-2" /> Add New Category
                </Button>
                {isCategoriesAccordionOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
            </CardHeader>
            {isCategoriesAccordionOpen && (
              <CardContent className="pt-0">
                {isLoadingCategories ? (
                  <div className="flex justify-center items-center py-10">
                    <RefreshCw className="h-8 w-8 animate-spin text-primary" />
                    <span className="ml-2 text-gray-600">Loading categories...</span>
                  </div>
                ) : categories.length > 0 ? (
                  <CategoriesTable
                    categories={categories}
                    onEdit={handleEditCategory}
                    onDelete={handleDeleteCategoryConfirmed}
                  />
                ) : (
                  <p className="text-center text-gray-500 py-6">No categories found.</p>
                )}
              </CardContent>
            )}
          </Card>
        </AnimateOnView>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-4 border-t">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} Sanatana Dharma Centre Admin Portal. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  )
}
