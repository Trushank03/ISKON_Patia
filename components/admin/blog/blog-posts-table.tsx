"use client"

import { useState } from "react"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit3, Trash2, Eye, EyeOff } from "lucide-react"
import type { BlogPost } from "@/types/blog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface BlogPostsTableProps {
  posts: BlogPost[]
  onEdit: (post: BlogPost) => void
  onDelete: (slug: string) => void // Changed from ID to slug for consistency
}

export function BlogPostsTable({ posts, onEdit, onDelete }: BlogPostsTableProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null)

  const handleDeleteClick = (post: BlogPost) => {
    setPostToDelete(post)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = () => {
    if (postToDelete) {
      onDelete(postToDelete.slug) // Use slug for deletion
    }
    setShowDeleteConfirm(false)
    setPostToDelete(null)
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[80px] hidden sm:table-cell">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Categories</TableHead>
              <TableHead className="hidden lg:table-cell">Author</TableHead>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead className="w-[120px] hidden sm:table-cell">Published</TableHead>
              <TableHead className="w-[50px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="hidden sm:table-cell py-2">
                  {post.featured_image ? (
                    <Image
                      src={post.featured_image || "/placeholder.svg"}
                      alt={post.title}
                      width={60}
                      height={40}
                      className="rounded object-cover aspect-[3/2]"
                    />
                  ) : (
                    <div className="w-[60px] h-[40px] bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                      No Image
                    </div>
                  )}
                </TableCell>
                <TableCell className="font-medium text-gray-800 py-2">{post.title}</TableCell>
                <TableCell className="hidden md:table-cell py-2 text-xs">
                  {post.categories && post.categories.length > 0
                    ? post.categories.map((cat) => cat.name).join(", ")
                    : "Uncategorized"}
                </TableCell>
                <TableCell className="hidden lg:table-cell py-2 text-sm text-gray-600">
                  {post.author?.username || "N/A"}
                </TableCell>
                <TableCell className="py-2">
                  <Badge
                    variant={post.is_published ? "default" : "outline"}
                    className={
                      post.is_published
                        ? "bg-green-100 text-green-700 border-green-300"
                        : "bg-yellow-100 text-yellow-700 border-yellow-300"
                    }
                  >
                    {post.is_published ? (
                      <>
                        <Eye size={12} className="mr-1" />
                        Published
                      </>
                    ) : (
                      <>
                        <EyeOff size={12} className="mr-1" />
                        Draft
                      </>
                    )}
                  </Badge>
                </TableCell>
                <TableCell className="hidden sm:table-cell py-2 text-sm text-gray-600">
                  {formatDate(post.published_at)}
                </TableCell>
                <TableCell className="text-right py-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal size={18} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEdit(post)} className="cursor-pointer">
                        <Edit3 size={14} className="mr-2" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteClick(post)}
                        className="text-red-600 cursor-pointer focus:bg-red-50 focus:text-red-700"
                      >
                        <Trash2 size={14} className="mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader className="space-y-3">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <Trash2 className="h-6 w-6 text-red-600" />
            </div>
            <AlertDialogTitle className="text-center text-lg font-semibold text-gray-900">
              Delete Blog Post
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-sm text-gray-500">
              Are you sure you want to delete <span className="font-medium text-gray-900">"{postToDelete?.title}"</span>
              ?
              <br />
              <span className="text-red-600 font-medium">This action cannot be undone.</span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-center gap-2 pt-4">
            <AlertDialogCancel
              onClick={() => setPostToDelete(null)}
              className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-500 text-white font-medium"
            >
              Yes, Delete Post
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
