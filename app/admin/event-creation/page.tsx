"use client"

import type React from "react"

import { deleteEvent, updateEvent } from "@/lib/api" // make sure this import is present
 

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Save, Eye, ArrowLeft, Edit, Trash2, Plus, AlertCircle } from "lucide-react"
import { AnimateOnView } from "@/components/animate-on-view"
import { createEvent, fetchEvents, fetchUserNotices } from "@/lib/api"

// Define the Notice type based on the API structure
interface Notice {
  id: number
  noticeTitle: string
  noticeText: string
  creationTime: string
  globalNoticeID: string
  noticefile: string | null
}

export default function EventCreationPage() {
  const router = useRouter()
  const [noticeTitle, setNoticeTitle] = useState("")
  const [noticeText, setNoticeText] = useState("")
  const [globalNoticeID, setGlobalNoticeID] = useState("")
  const [noticefile, setNoticefile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState<string | null>(null)

  const [isSaving, setIsSaving] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  const [notices, setNotices] = useState<Notice[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [publish, setPublish] = useState(false)


  // Fetch existing notices when the component mounts
  // useEffect(() => {
  //   const loadEvents = async () => {
  //     setIsLoading(true)
  //     try {
  //       const { data, error } = await fetchEvents()
  //       if (error || !data) {
  //         setError("Failed to fetch notices")
  //         return
  //       }

  //       setNotices(data.results)  // ✅ store only the `results` array
  //     } catch (err) {
  //       console.error(err)
  //       setError("An error occurred")
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   loadEvents()
  // }, [])


  useEffect(() => {
    const loadUserNotices = async () => {
      setIsLoading(true)
      setError(null)
      const { data, error } = await fetchUserNotices()
      if (error) {
        setError(error)
      } else {
        setNotices(data?.results || []) // or `setNotices(data)` if you're keeping full pagination info
      }
      setIsLoading(false)
    }

    loadUserNotices()
  }, [])


  // Function to fetch all notices
  const fetchNotices = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // In a real implementation, this would be an actual API call
      // For now, we'll simulate it with mock data
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock data based on the API structure
      const mockNotices: Notice[] = [
        {
          id: 1,
          noticeTitle: "Kartika Deepotsava 2024",
          noticeText:
            "Join us for the auspicious month-long celebration of Kartika, the most sacred month dedicated to Lord Damodara.",
          creationTime: "2024-05-01T10:00:00Z",
          globalNoticeID: "NTC001",
          noticefile: null,
        },
        {
          id: 2,
          noticeTitle: "Deep Daan in Kartika Month",
          noticeText: "Special lamp offering ceremony during the auspicious month of Kartika.",
          creationTime: "2024-05-02T14:30:00Z",
          globalNoticeID: "NTC002",
          noticefile: null,
        },
        {
          id: 3,
          noticeTitle: "Bhagavad Gita Study Circle",
          noticeText:
            "Weekly study of the Bhagavad Gita with in-depth discussions on its practical applications in modern life.",
          creationTime: "2024-05-03T09:15:00Z",
          globalNoticeID: "NTC003",
          noticefile: null,
        },
      ]

      setNotices(mockNotices)
    } catch (err) {
      console.error("Error fetching notices:", err)
      setError("Failed to load events. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  // Function to handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setNoticefile(file)

      // Create a preview URL for the file
      const reader = new FileReader()
      reader.onloadend = () => {
        setFilePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Function to remove the selected file
  const removeFile = () => {
    setNoticefile(null)
    setFilePreview(null)
  }

  // // Function to create a new notice
  // const createNotice = async () => {
  //   setIsSaving(true)
  //   setError(null)

  //   try {
  //     // Prepare the form data
  //     const formData = new FormData()
  //     formData.append("noticeTitle", noticeTitle)
  //     formData.append("noticeText", noticeText)
  //     formData.append(
  //       "globalNoticeID",
  //       globalNoticeID ||
  //       `NTC${Math.floor(Math.random() * 1000)
  //         .toString()
  //         .padStart(3, "0")}`,
  //     )
  //     formData.append("creationTime", new Date().toISOString())
  //     formData.append("publish", String(publish))  
  //     if (noticefile) {
  //       formData.append("noticefile", noticefile)
  //     }

  //     // In a real implementation, this would be an actual API call
  //     // For example:
  //     const response = await fetch("https://iskconbarangapatia.com/api/notice/notices/", {
  //       method: "POST",
  //       body: formData
  //     })

  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 1500))

  //     // Create a new mock notice
  //     const newNotice: Notice = {
  //       id: notices.length + 1,
  //       noticeTitle,
  //       noticeText,
  //       creationTime: new Date().toISOString(),
  //       globalNoticeID:
  //         globalNoticeID ||
  //         `NTC${Math.floor(Math.random() * 1000)
  //           .toString()
  //           .padStart(3, "0")}`,
  //       noticefile: filePreview,
  //     }

  //     // Update the notices list
  //     setNotices([...notices, newNotice])

  //     // Reset the form
  //     resetForm()

  //     alert("Event created successfully!")
  //   } catch (err) {
  //     console.error("Error creating notice:", err)
  //     setError("Failed to create event. Please try again.")
  //   } finally {
  //     setIsSaving(false)
  //   }
  // }



  const createNotice = async () => {
    setIsSaving(true)
    setError(null)

    try {
      // Prepare the form data
      const formData = new FormData()
      formData.append("noticeTitle", noticeTitle)
      formData.append("noticeText", noticeText)
      formData.append(
        "globalNoticeID",
        globalNoticeID ||
        `NTC${Math.floor(Math.random() * 1000)
          .toString()
          .padStart(3, "0")}`,
      )
      formData.append("creationTime", new Date().toISOString())
      formData.append("publish", String(publish))
      if (noticefile) {
        formData.append("noticefile", noticefile)
      }

      // ✅ Replace fetch with your custom API call
      const { data, error } = await createEvent(formData)

      if (error || !data) {
        throw new Error(error || "API error")
      }

      // Use returned data if your backend responds with the saved object
      const newNotice: Notice = {
        id: data.id,
        noticeTitle: data.noticeTitle,
        noticeText: data.noticeText,
        creationTime: data.creationTime,
        globalNoticeID: data.globalNoticeID,
        noticefile: filePreview, // or data.noticefile if you get URL back
      }

      setNotices([...notices, newNotice])
      resetForm()
      alert("Event created successfully!")
    } catch (err) {
      console.error("Error creating notice:", err)
      setError("Failed to create event. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

 

const updateNotice = async () => {
  if (!editingId) return

  setIsSaving(true)
  setError(null)

  try {
    // Prepare the form data
    const formData = new FormData()
    formData.append("noticeTitle", noticeTitle)
    formData.append("noticeText", noticeText)
    formData.append("globalNoticeID", globalNoticeID)
    formData.append("publish", String(publish))

    if (noticefile) {
      formData.append("noticefile", noticefile)
    }

    // Call your update API
    const { data, error } = await updateEvent(editingId, formData)

    if (error || !data) {
      throw new Error(error || "API error")
    }

    // Update notice in the list
    const updatedNotices = notices.map((notice) =>
      notice.id === editingId
        ? {
            ...notice,
            noticeTitle: data.noticeTitle,
            noticeText: data.noticeText,
            globalNoticeID: data.globalNoticeID,
            noticefile: filePreview, // Or data.noticefile if backend returns it
          }
        : notice,
    )

    setNotices(updatedNotices)
    resetForm()
    setIsEditing(false)
    setEditingId(null)

    alert("Event updated successfully!")
  } catch (err) {
    console.error("Error updating notice:", err)
    setError("Failed to update event. Please try again.")
  } finally {
    setIsSaving(false)
  }
}

  // Function to delete a notice
  // const deleteNotice = async (id: number) => {
  //   if (!confirm("Are you sure you want to delete this event?")) return

  //   try {


  //     // In a real implementation, this would be an actual API call
  //     // For example:
  //     // await fetch(`http://localhost:8000/api/notice/notices/${id}/delete/`, {
  //     //   method: "DELETE"
  //     // })

  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 1000))

  //     // Update the notices list
  //     setNotices(notices.filter((notice) => notice.id !== id))

  //     alert("Event deleted successfully!")
  //   } catch (err) {
  //     console.error("Error deleting notice:", err)
  //     alert("Failed to delete event. Please try again.")
  //   }
  // }



  const deleteNotice = async (id: number) => {
    if (!confirm("Are you sure you want to delete this event?")) return

    try {
      const { error } = await deleteEvent(id)

      if (error) {
        throw new Error(error)
      }

      // Update the notices list on successful deletion
      setNotices(notices.filter((notice) => notice.id !== id))

      alert("Event deleted successfully!")
    } catch (err) {
      console.error("Error deleting notice:", err)
      alert("Failed to delete event. Please try again.")
    }
  }


  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isEditing) {
      await updateNotice()
    } else {
      await createNotice()
    }
  }

  // Function to edit a notice
  const editNotice = (notice: Notice) => {
    setNoticeTitle(notice.noticeTitle)
    setNoticeText(notice.noticeText)
    setGlobalNoticeID(notice.globalNoticeID)
    setFilePreview(notice.noticefile)
    setIsEditing(true)
    setEditingId(notice.id)

    // Scroll to the form
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Function to reset the form
  const resetForm = () => {
    setNoticeTitle("")
    setNoticeText("")
    setGlobalNoticeID("")
    setNoticefile(null)
    setFilePreview(null)
    setIsEditing(false)
    setEditingId(null)
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Admin Header */}
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
                onClick={() => {
                  // Clear auth tokens before logout
                  localStorage.removeItem("sanatana_access_token")
                  localStorage.removeItem("sanatana_refresh_token") // if you store this too
                  router.push("/loginadmin")
                }}
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
            <Link href="/admin/dashboard" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
              Dashboard
            </Link>
            <Link
              href="/admin/event-creation"
              className="text-primary border-b-2 border-primary px-3 py-2 text-sm font-medium"
            >
              Events
            </Link>
            <Link href="/admin/donations" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
              Donations
            </Link>
            <Link href="/admin/users" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
              Users
            </Link>
            <Link href="/admin/settings" className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium">
              Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6">
        <AnimateOnView animation="fade-up">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{isEditing ? "Edit Event" : "Create New Event"}</h1>
            <div className="flex space-x-3">
              {isEditing && (
                <button
                  onClick={resetForm}
                  className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Cancel Edit
                </button>
              )}
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                <Eye size={16} className="mr-2" />
                {showPreview ? "Hide Preview" : "Preview"}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6 flex items-center">
              <AlertCircle size={16} className="mr-2" />
              {error}
            </div>
          )}

          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <form onSubmit={handleSubmit} className="p-6">
              {/* Notice Title Input */}
              <div className="mb-6">
                <label htmlFor="noticeTitle" className="block text-gray-700 text-sm font-medium mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  id="noticeTitle"
                  value={noticeTitle}
                  onChange={(e) => setNoticeTitle(e.target.value)}
                  placeholder="Enter event title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>

              {/* Global Notice ID */}
              <div className="mb-6">
                <label htmlFor="globalNoticeID" className="block text-gray-700 text-sm font-medium mb-2">
                  Event ID 
                </label>
                <input
                  type="text"
                  id="globalNoticeID"
                  value={globalNoticeID}
                  onChange={(e) => setGlobalNoticeID(e.target.value)}
                  placeholder="e.g., NTC001 (will be generated if left empty)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <p className="text-xs text-gray-500 mt-1">
                  A unique identifier for this event. Leave blank to auto-generate.
                </p>
              </div>

              {/* Notice File Upload */}
              <div className="mb-6">
                <label htmlFor="noticefile" className="block text-gray-700 text-sm font-medium mb-2">
                  Event Image/File 
                </label>

                {filePreview ? (
                  <div className="relative mb-4">
                    <Image
                      src={filePreview || "/placeholder.svg"}
                      alt="File preview"
                      width={600}
                      height={300}
                      className="w-full h-64 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={removeFile}
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                    >
                      <Trash2 size={16} className="text-gray-700" />
                    </button>
                  </div>
                ) : (
                  <div className="mb-4">
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer bg-gray-50 border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-100"
                    >
                      <Plus size={16} className="mr-2" />
                      <span>Choose file</span>
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx"
                    />
                  </div>
                )}

                <p className="text-xs text-gray-500">
                  Upload an image for the event or a document with details. Supported formats: JPG, PNG, PDF, DOC.
                </p>
              </div>

              {/* Notice Text */}
              <div className="mb-6">
                <label htmlFor="noticeText" className="block text-gray-700 text-sm font-medium mb-2">
                  Event Description
                </label>
                <textarea
                  id="noticeText"
                  value={noticeText}
                  onChange={(e) => setNoticeText(e.target.value)}
                  rows={8}
                  placeholder="Write a detailed description of the event..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                ></textarea>
              </div>


              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="publish"
                  checked={publish}
                  onChange={(e) => setPublish(e.target.checked)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="publish" className="ml-2 block text-sm text-gray-700">
                  Publish immediately
                </label>
              </div>


              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center"
                >
                  {isSaving && (
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                  )}
                  <Save size={16} className="mr-2" />
                  {isSaving ? (isEditing ? "Updating..." : "Saving...") : isEditing ? "Update Event" : "Save Event"}
                </button>
              </div>
            </form>
          </div>

          {/* Preview Section */}
          {showPreview && (
            <AnimateOnView animation="fade-in" delay={200}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Event Preview</h2>
                  <div className="border rounded-lg overflow-hidden">
                    {/* Preview Header */}
                    <div className="relative">
                      {filePreview ? (
                        <Image
                          src={filePreview || "/placeholder.svg"}
                          alt="Event preview"
                          width={800}
                          height={400}
                          className="w-full h-64 object-cover"
                        />
                      ) : (
                        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400">No image uploaded</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                        <h1 className="text-white text-2xl font-bold">
                          {noticeTitle || "Event Title Will Appear Here"}
                        </h1>
                        <div className="text-white/80 text-sm mt-2">ID: {globalNoticeID || "Auto-generated"}</div>
                      </div>
                    </div>

                    {/* Preview Content */}
                    <div className="p-6">
                      <div className="prose max-w-none">
                        <p className="text-gray-800 whitespace-pre-line">
                          {noticeText || "Your event description will appear here..."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnView>
          )}

          {/* Events List */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Existing Events</h2>

              {isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : notices.length === 0 ? (
                <div className="text-center py-8 text-gray-500">No events found. Create your first event above.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Created
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {notices.map((notice) => (
                        <tr key={notice.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{notice.noticeTitle}</div>
                            <div className="text-sm text-gray-500 truncate max-w-xs">{notice.noticeText}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{notice.globalNoticeID}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{formatDate(notice.creationTime)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => editNotice(notice)}
                                className="text-blue-600 hover:text-blue-900 flex items-center"
                              >
                                <Edit size={16} className="mr-1" />
                                Edit
                              </button>
                              <button
                                onClick={() => deleteNotice(notice.id)}
                                className="text-red-600 hover:text-red-900 flex items-center"
                              >
                                <Trash2 size={16} className="mr-1" />
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </AnimateOnView>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-4 border-t">
        <div className="container mx-auto px-4">
          <p className="text-xs text-gray-600 text-center">
            © 2025 Sanatana Dharma Centre Admin Portal. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  )
}
