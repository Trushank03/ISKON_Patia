"use client"

import { useState, useEffect, useMemo } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { createBlogPostWithFormData, updateBlogPost } from "@/lib/blog-api"
import type { BlogPost, Category } from "@/types/blog"
import { XCircle, UploadCloud, ImageIcon } from "lucide-react"

// Zod schema for validation
const blogPostSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long."),
  content: z.string().min(10, "Content must be at least 10 characters long."),
  excerpt: z.string().optional(),
  slug: z.string().optional(),
  is_published: z.boolean().default(false),
  is_featured: z.boolean().default(false),
  reading_time: z.number().int().min(1).default(5),
  category_ids: z.array(z.string()).default([]),
  featured_image: z.instanceof(FileList).optional(),
  remove_featured_image: z.boolean().default(false),
})

type BlogPostFormData = z.infer<typeof blogPostSchema>

interface BlogPostFormProps {
  initialData?: BlogPost
  allCategories: Category[]
  onSuccess: () => void
  onCancel: () => void
}

export function BlogPostForm({ initialData, allCategories, onSuccess, onCancel }: BlogPostFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.featured_image || null)
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null)

  const defaultValues = useMemo(
    () => ({
      title: initialData?.title || "",
      content: initialData?.content || "",
      excerpt: initialData?.excerpt || "",
      slug: initialData?.slug || "",
      is_published: initialData?.is_published || false,
      is_featured: initialData?.is_featured || false,
      reading_time: initialData?.reading_time || 5,
      category_ids: initialData?.categories?.map((cat) => cat.id.toString()) || [],
      featured_image: undefined,
      remove_featured_image: false,
    }),
    [initialData],
  )

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BlogPostFormData>({
    resolver: zodResolver(blogPostSchema),
    defaultValues,
  })

  useEffect(() => {
    reset(defaultValues)
    setImagePreview(initialData?.featured_image || null)
    setSelectedFileName(null)
  }, [initialData, reset, defaultValues])

  const watchedImage = watch("featured_image")
  const watchRemoveImage = watch("remove_featured_image")

  useEffect(() => {
    if (watchedImage && watchedImage.length > 0) {
      const file = watchedImage[0]
      if (file instanceof File) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImagePreview(reader.result as string)
        }
        reader.readAsDataURL(file)
        setSelectedFileName(file.name)
        setValue("remove_featured_image", false)
      }
    } else if (watchRemoveImage) {
      setImagePreview(null)
      setSelectedFileName(null)
    } else if (initialData?.featured_image && !watchRemoveImage) {
      setImagePreview(initialData.featured_image)
    }
  }, [watchedImage, watchRemoveImage, initialData?.featured_image, setValue])

  const onSubmit = async (data: BlogPostFormData) => {
    setIsSubmitting(true)

    try {
      // Get auth token from localStorage
      const authToken = localStorage.getItem("sanatana_access_token")
      if (!authToken) {
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description: "You must be logged in to create or update blog posts.",
        })
        setIsSubmitting(false)
        return
      }

      const formData = new FormData()

      // Add all form fields to FormData
      formData.append("title", data.title)
      formData.append("content", data.content)
      if (data.excerpt) formData.append("excerpt", data.excerpt)
      if (data.slug) formData.append("slug", data.slug)
      formData.append("is_published", String(data.is_published))
      formData.append("is_featured", String(data.is_featured))
      formData.append("reading_time", String(data.reading_time))

      // Add categories
      data.category_ids.forEach((id) => {
        formData.append("category_ids", id)
      })

      // Handle image
      if (data.featured_image && data.featured_image.length > 0) {
        formData.append("featured_image", data.featured_image[0])
      } else if (data.remove_featured_image) {
        formData.append("remove_featured_image", "true")
      }

      let result
      if (initialData?.slug) {
        result = await updateBlogPost(initialData.slug, formData, authToken)
      } else {
        result = await createBlogPostWithFormData(formData, authToken)
      }

      toast({
        title: "Success",
        description: `Blog post ${initialData ? "updated" : "created"} successfully.`,
      })
      onSuccess()
    } catch (error: any) {
      console.error("Error submitting blog post:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An unknown error occurred.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRemoveImage = () => {
    setValue("featured_image", undefined)
    setValue("remove_featured_image", true)
    setImagePreview(null)
    setSelectedFileName(null)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {initialData ? "Edit Blog Post" : "Create New Blog Post"}
      </h2>

      <div>
        <Label htmlFor="title" className="text-sm font-medium text-gray-700">
          Title <span className="text-red-500">*</span>
        </Label>
        <Input id="title" {...register("title")} className="mt-1 block w-full" />
        {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title.message}</p>}
      </div>

      <div>
        <Label htmlFor="content" className="text-sm font-medium text-gray-700">
          Content <span className="text-red-500">*</span>
        </Label>
        <Textarea id="content" {...register("content")} rows={10} className="mt-1 block w-full" />
        {errors.content && <p className="mt-1 text-xs text-red-600">{errors.content.message}</p>}
      </div>

      <div>
        <Label htmlFor="excerpt" className="text-sm font-medium text-gray-700">
          Excerpt
        </Label>
        <Textarea
          id="excerpt"
          {...register("excerpt")}
          rows={3}
          className="mt-1 block w-full"
          placeholder="A brief summary of the blog post"
        />
        {errors.excerpt && <p className="mt-1 text-xs text-red-600">{errors.excerpt.message}</p>}
      </div>

      <div>
        <Label htmlFor="slug" className="text-sm font-medium text-gray-700">
          Slug
        </Label>
        <Input
          id="slug"
          {...register("slug")}
          className="mt-1 block w-full"
          placeholder="my-blog-post-slug (leave empty for auto-generation)"
        />
        <p className="mt-1 text-xs text-gray-500">If left empty, a slug will be generated from the title.</p>
        {errors.slug && <p className="mt-1 text-xs text-red-600">{errors.slug.message}</p>}
      </div>

      <div>
        <Label htmlFor="reading_time" className="text-sm font-medium text-gray-700">
          Reading Time (minutes)
        </Label>
        <Controller
          name="reading_time"
          control={control}
          render={({ field }) => (
            <Input
              id="reading_time"
              type="number"
              min="1"
              className="mt-1 block w-full"
              value={field.value}
              onChange={(e) => field.onChange(Number.parseInt(e.target.value) || 1)}
            />
          )}
        />
        {errors.reading_time && <p className="mt-1 text-xs text-red-600">{errors.reading_time.message}</p>}
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium text-gray-700">Categories</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-40 overflow-y-auto p-2 border rounded-md">
          {allCategories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Controller
                name="category_ids"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={field.value?.includes(category.id.toString())}
                    onCheckedChange={(checked) => {
                      const currentCategoryIds = field.value || []
                      if (checked) {
                        field.onChange([...currentCategoryIds, category.id.toString()])
                      } else {
                        field.onChange(currentCategoryIds.filter((id) => id !== category.id.toString()))
                      }
                    }}
                  />
                )}
              />
              <Label htmlFor={`category-${category.id}`} className="text-xs font-normal text-gray-600 cursor-pointer">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
        {errors.category_ids && <p className="mt-1 text-xs text-red-600">{errors.category_ids.message}</p>}
      </div>

      <div>
        <Label htmlFor="featured_image" className="text-sm font-medium text-gray-700">
          Featured Image
        </Label>
        <div className="mt-1 flex flex-col items-center space-y-2">
          <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-md flex justify-center items-center relative overflow-hidden bg-gray-50">
            {imagePreview ? (
              <>
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="Featured image preview"
                  className="h-full w-full object-contain"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-7 w-7"
                  onClick={handleRemoveImage}
                >
                  <XCircle size={16} />
                </Button>
              </>
            ) : (
              <div className="text-center text-gray-500">
                <ImageIcon size={40} className="mx-auto mb-2" />
                <p className="text-xs">No image selected</p>
              </div>
            )}
          </div>
          <label
            htmlFor="featured_image_input"
            className="cursor-pointer w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <UploadCloud size={16} className="mr-2" />
            {selectedFileName ? `Change: ${selectedFileName.substring(0, 20)}...` : "Upload Image"}
          </label>
          <Input
            id="featured_image_input"
            type="file"
            {...register("featured_image")}
            className="hidden"
            accept="image/*"
          />
        </div>
        {errors.featured_image && (
          <p className="mt-1 text-xs text-red-600">{errors.featured_image.message as string}</p>
        )}
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <Controller
            name="is_published"
            control={control}
            render={({ field }) => (
              <Checkbox id="is_published" checked={field.value} onCheckedChange={field.onChange} />
            )}
          />
          <Label htmlFor="is_published" className="text-sm font-medium text-gray-700 cursor-pointer">
            Publish this post
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Controller
            name="is_featured"
            control={control}
            render={({ field }) => <Checkbox id="is_featured" checked={field.value} onCheckedChange={field.onChange} />}
          />
          <Label htmlFor="is_featured" className="text-sm font-medium text-gray-700 cursor-pointer">
            Feature this post (appears in featured section)
          </Label>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (initialData ? "Updating..." : "Creating...") : initialData ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  )
}
