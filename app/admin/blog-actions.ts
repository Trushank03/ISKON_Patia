"use server"

import { revalidatePath } from "next/cache"
// import { createBlogPost, updateBlogPost, patchBlogPost, deleteBlogPost } from "@/lib/blog-api"
import type { BlogPost } from "@/types/blog"
import { createBlogPostWithFormData , updateBlogPost, patchBlogPost, deleteBlogPost} from "@/lib/blog-api"

export async function revalidateBlogPaths(slug?: string, oldSlug?: string) {
  revalidatePath("/blog")
  if (slug) {
    revalidatePath(`/blog/${slug}`)
  }
  if (oldSlug && oldSlug !== slug) {
    revalidatePath(`/blog/${oldSlug}`)
  }
  revalidatePath("/admin/blog-management")
}

export async function handleCreateBlogPost(
  formData: FormData,
  authToken: string,
): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  try {
    if (!authToken) {
      return { success: false, error: "Authentication token is required." }
    }

    // Basic validation
    if (!formData.get("title") || !formData.get("content")) {
      return { success: false, error: "Title and content are required." }
    }

    const newPost = await createBlogPostWithFormData(formData, authToken)

    revalidateBlogPaths(newPost.slug)

    return { success: true, post: newPost }
  } catch (error: any) {
    console.error("Error creating blog post:", error)
    return { success: false, error: error.message || "Failed to create blog post." }
  }
}

export async function handleUpdateBlogPost(
  currentSlug: string,
  formData: FormData,
  authToken: string,
): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  try {
    if (!authToken) {
      return { success: false, error: "Authentication token is required." }
    }

    if (!formData.get("title") || !formData.get("content")) {
      return { success: false, error: "Title and content are required." }
    }

    const updatedPost = await updateBlogPost(currentSlug, formData, authToken)

    revalidateBlogPaths(updatedPost.slug, currentSlug)

    return { success: true, post: updatedPost }
  } catch (error: any) {
    console.error("Error updating blog post:", error)
    return { success: false, error: error.message || "Failed to update blog post." }
  }
}

export async function handlePatchBlogPost(
  slug: string,
  data: any,
  authToken: string,
): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  try {
    if (!authToken) {
      return { success: false, error: "Authentication token is required." }
    }

    const updatedPost = await patchBlogPost(slug, data, authToken)

    revalidateBlogPaths(updatedPost.slug)

    return { success: true, post: updatedPost }
  } catch (error: any) {
    console.error("Error patching blog post:", error)
    return { success: false, error: error.message || "Failed to update blog post." }
  }
}

export async function handleDeleteBlogPost(
  slug: string,
  authToken: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!authToken) {
      return { success: false, error: "Authentication token is required." }
    }

    await deleteBlogPost(slug, authToken)

    revalidateBlogPaths(slug)

    return { success: true }
  } catch (error: any) {
    console.error("Error deleting blog post:", error)
    return { success: false, error: error.message || "Failed to delete blog post." }
  }
}
