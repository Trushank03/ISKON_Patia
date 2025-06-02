"use server"

import { revalidatePath } from "next/cache"
import { createCategory, updateCategory, deleteCategory } from "@/lib/blog-api"
import type { Category } from "@/types/blog"

export async function handleCreateCategory(
  data: { name: string; slug?: string; description?: string },
  authToken: string,
): Promise<{
  success: boolean
  category?: Category
  error?: string
}> {
  try {
    if (!authToken) {
      return { success: false, error: "Authentication token is required." }
    }

    if (!data.name || data.name.trim() === "") {
      return { success: false, error: "Category name is required." }
    }

    const newCategory = await createCategory(data, authToken)

    revalidateCategoryPaths()

    return { success: true, category: newCategory }
  } catch (error: any) {
    console.error("Error creating category:", error)
    return { success: false, error: error.message || "Failed to create category." }
  }
}

export async function handleUpdateCategory(
  currentSlug: string,
  data: { name?: string; slug?: string; description?: string },
  authToken: string,
): Promise<{ success: boolean; category?: Category; error?: string }> {
  try {
    if (!authToken) {
      return { success: false, error: "Authentication token is required." }
    }

    if (Object.keys(data).length === 0) {
      return { success: false, error: "No data provided for update." }
    }

    if (data.name !== undefined && data.name.trim() === "") {
      return { success: false, error: "Category name cannot be empty." }
    }

    const updatedCategory = await updateCategory(currentSlug, data, authToken)

    revalidateCategoryPaths(updatedCategory.slug, currentSlug)

    return { success: true, category: updatedCategory }
  } catch (error: any) {
    console.error("Error updating category:", error)
    return { success: false, error: error.message || "Failed to update category." }
  }
}

export async function handleDeleteCategory(
  slug: string,
  authToken: string,
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!authToken) {
      return { success: false, error: "Authentication token is required." }
    }

    await deleteCategory(slug, authToken)

    revalidateCategoryPaths(slug)

    return { success: true }
  } catch (error: any) {
    console.error("Error deleting category:", error)
    return { success: false, error: error.message || "Failed to delete category." }
  }
}

export async function revalidateCategoryPaths(slug?: string, oldSlug?: string) {
  revalidatePath("/blog")
  if (slug) {
    revalidatePath(`/blog/category/${slug}`)
  }
  if (oldSlug && oldSlug !== slug) {
    revalidatePath(`/blog/category/${oldSlug}`)
  }
  revalidatePath("/admin/blog-management")
}
