"use client"

import { useState, useEffect, useMemo } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { createCategory, updateCategory } from "@/lib/blog-api"
import type { Category } from "@/types/blog"

// Zod schema for validation
const categorySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long.").trim(),
  slug: z
    .string()
    .optional()
    .refine((val) => val === undefined || val === "" || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(val), {
      message: "Slug can only contain lowercase letters, numbers, and hyphens, or be empty.",
    }),
  description: z.string().optional(),
})

export type CategoryFormData = z.infer<typeof categorySchema>

interface CategoryFormProps {
  initialData?: Category
  onSuccess: () => void
  onCancel: () => void
}

export function CategoryForm({ initialData, onSuccess, onCancel }: CategoryFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: useMemo(
      () => ({
        name: initialData?.name || "",
        slug: initialData?.slug || "",
        description: initialData?.description || "",
      }),
      [initialData],
    ),
  })

  useEffect(() => {
    const defaultVals = {
      name: initialData?.name || "",
      slug: initialData?.slug || "",
      description: initialData?.description || "",
    }
    reset(defaultVals)
  }, [initialData, reset])

  const onSubmit: SubmitHandler<CategoryFormData> = async (data) => {
    setIsSubmitting(true)

    try {
      // Get auth token from localStorage
      const authToken = localStorage.getItem("sanatana_access_token")
      if (!authToken) {
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description: "You must be logged in to create or update categories.",
        })
        setIsSubmitting(false)
        return
      }

      // Prepare payload, ensuring empty strings for optional fields become undefined if not meant to be sent
      const payload = {
        name: data.name,
        slug: data.slug?.trim() || undefined, // Send undefined if slug is empty, backend might auto-generate
        description: data.description?.trim() || undefined, // Send undefined if description is empty
      }

      let result
      if (initialData?.slug) {
        // For update, pass current slug and the payload of changes
        result = await updateCategory(initialData.slug, payload, authToken)
      } else {
        // For create, pass the payload
        result = await createCategory(payload, authToken)
      }

      toast({ title: "Success", description: `Category ${initialData ? "updated" : "created"} successfully.` })
      onSuccess()
    } catch (error: any) {
      console.error("Error submitting category:", error)
      toast({ variant: "destructive", title: "Error", description: error.message || "An unknown error occurred." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input id="name" {...register("name")} className={`mt-1 block w-full ${errors.name ? "border-red-500" : ""}`} />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="slug" className="text-sm font-medium text-gray-700">
          Slug (Optional)
        </Label>
        <Input
          id="slug"
          {...register("slug")}
          className={`mt-1 block w-full ${errors.slug ? "border-red-500" : ""}`}
          placeholder="e.g., tech-updates (auto-generated if empty)"
        />
        <p className="mt-1 text-xs text-gray-500">
          If left empty, a slug will be generated from the name. Use only lowercase letters, numbers, and hyphens.
        </p>
        {errors.slug && <p className="mt-1 text-xs text-red-600">{errors.slug.message}</p>}
      </div>

      <div>
        <Label htmlFor="description" className="text-sm font-medium text-gray-700">
          Description (Optional)
        </Label>
        <Textarea id="description" {...register("description")} rows={3} className="mt-1 block w-full" />
        {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>}
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? initialData
              ? "Updating..."
              : "Creating..."
            : initialData
              ? "Update Category"
              : "Create Category"}
        </Button>
      </div>
    </form>
  )
}
