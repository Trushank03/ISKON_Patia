"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit3, Trash2, ExternalLink } from "lucide-react"
import type { Category } from "@/types/blog"
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
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

interface CategoriesTableProps {
  categories: Category[]
  onEdit: (category: Category) => void
  onDelete: (slug: string) => Promise<void>
}

export function CategoriesTable({ categories, onEdit, onDelete }: CategoriesTableProps) {
  const { toast } = useToast()
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(null)

  const handleDeleteClick = (category: Category) => {
    setCategoryToDelete(category)
    setShowDeleteConfirm(true)
  }

  const confirmDelete = async () => {
    if (categoryToDelete) {
      try {
        await onDelete(categoryToDelete.slug)
        toast({ title: "Success", description: "Category deleted successfully." })
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message || "Failed to delete category.",
        })
      }
    }
    setShowDeleteConfirm(false)
    setCategoryToDelete(null)
  }

  return (
    <>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden sm:table-cell">Slug</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-gray-500 py-10">
                  No categories found.
                </TableCell>
              </TableRow>
            )}
            {categories.map((category) => (
              <TableRow key={category.id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium text-gray-800 py-3">{category.name}</TableCell>
                <TableCell className="hidden sm:table-cell text-sm text-gray-600 py-3">{category.slug}</TableCell>
                <TableCell className="hidden md:table-cell text-xs text-gray-500 py-3">
                  {category.description ? (
                    category.description.length > 80 ? (
                      category.description.substring(0, 80) + "..."
                    ) : (
                      category.description
                    )
                  ) : (
                    <span className="italic text-gray-400">No description</span>
                  )}
                </TableCell>
                <TableCell className="text-right py-3">
                  <div className="flex items-center justify-end space-x-1">
                    <Link href={`/blog/category/${category.slug}`} target="_blank" passHref>
                      <Button variant="outline" size="icon" className="h-8 w-8" title="View Category Page">
                        <ExternalLink size={14} />
                      </Button>
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal size={18} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onEdit(category)} className="cursor-pointer">
                          <Edit3 size={14} className="mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeleteClick(category)}
                          className="text-red-600 cursor-pointer focus:bg-red-50 focus:text-red-700"
                        >
                          <Trash2 size={14} className="mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent className="sm:max-w-[425px] bg-white">
          <AlertDialogHeader className="space-y-3">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <Trash2 className="h-6 w-6 text-red-600" />
            </div>
            <AlertDialogTitle className="text-center text-lg font-semibold text-gray-900">
              Delete Category
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-sm text-gray-500">
              Are you sure you want to delete the category{" "}
              <span className="font-medium text-gray-900">"{categoryToDelete?.name}"</span>?
              <br />
              <span className="text-red-600 font-medium">This action cannot be undone.</span>
              <br />
              <span className="text-amber-600 text-xs">
                Note: This may affect blog posts associated with this category.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-center gap-2 pt-4">
            <AlertDialogCancel
              onClick={() => setCategoryToDelete(null)}
              className="w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-500 text-white font-medium"
            >
              Yes, Delete Category
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
