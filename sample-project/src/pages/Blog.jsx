
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Plus, X, AlertTriangle, Loader2 } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { getAllBlogs, addBlog, updateBlog, deleteBlog } from "../services/firestore";

const Blog = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: "",
    excerpt: "",
    author: "",
    readTime: "5 min read",
    categories: ["Inventory"],
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    content: "",
  });
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Check for admin mode in localStorage
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken === 'admin123') {
      setIsAdminMode(true);
    }

    // Fetch blogs from Firestore
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const blogs = await getAllBlogs();
      setBlogPosts(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast({
        title: "Error",
        description: "Failed to load blogs. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Function to add a new blog
  const handleAddBlog = async () => {
    try {
      setSubmitting(true);
      
      // Format categories as an array if it's a string
      const formattedBlogData = {
        ...blogForm,
        categories: Array.isArray(blogForm.categories) 
          ? blogForm.categories 
          : [blogForm.categories],
      };
      
      await addBlog(formattedBlogData);
      
      // Refresh the blogs list
      await fetchBlogs();
      
      setShowAddDialog(false);
      
      toast({
        title: "Success",
        description: "Blog post has been created successfully!",
        variant: "default",
      });
      
      // Reset form
      resetBlogForm();
    } catch (error) {
      console.error("Error adding blog:", error);
      toast({
        title: "Error",
        description: "Failed to create blog post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Function to update an existing blog
  const handleUpdateBlog = async () => {
    try {
      setSubmitting(true);
      
      // Format categories as an array if it's a string
      const formattedBlogData = {
        ...blogForm,
        categories: Array.isArray(blogForm.categories) 
          ? blogForm.categories 
          : [blogForm.categories],
      };
      
      await updateBlog(currentBlogId, formattedBlogData);
      
      // Refresh the blogs list
      await fetchBlogs();
      
      setShowAddDialog(false);
      setIsEditMode(false);
      
      toast({
        title: "Success",
        description: "Blog post has been updated successfully!",
        variant: "default",
      });
      
      // Reset form
      resetBlogForm();
    } catch (error) {
      console.error("Error updating blog:", error);
      toast({
        title: "Error",
        description: "Failed to update blog post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Function to delete a blog
  const handleDeleteBlog = async () => {
    try {
      setSubmitting(true);
      
      await deleteBlog(blogToDelete);
      
      // Refresh the blogs list
      await fetchBlogs();
      
      setShowDeleteDialog(false);
      setBlogToDelete(null);
      
      toast({
        title: "Success",
        description: "Blog post has been deleted successfully!",
        variant: "default",
      });
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast({
        title: "Error",
        description: "Failed to delete blog post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Reset the blog form
  const resetBlogForm = () => {
    setBlogForm({
      title: "",
      excerpt: "",
      author: "",
      readTime: "5 min read",
      categories: ["Inventory"],
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      content: "",
    });
    setCurrentBlogId(null);
  };

  // Handle edit blog button click
  const handleEditClick = (blog) => {
    setIsEditMode(true);
    setCurrentBlogId(blog.id);
    setBlogForm({
      title: blog.title,
      excerpt: blog.excerpt,
      author: blog.author,
      readTime: blog.readTime,
      categories: blog.categories,
      image: blog.image,
      content: blog.content || "",
    });
    setShowAddDialog(true);
  };

  // Handle delete blog button click
  const handleDeleteClick = (blogId) => {
    setBlogToDelete(blogId);
    setShowDeleteDialog(true);
  };

  // Toggle admin mode with password
  const toggleAdminMode = () => {
    const password = prompt("Enter admin password:");
    if (password === "admin123") {
      setIsAdminMode(!isAdminMode);
      
      if (!isAdminMode) {
        localStorage.setItem('adminToken', 'admin123');
      } else {
        localStorage.removeItem('adminToken');
      }
      
      toast({
        title: isAdminMode ? "Admin Mode Disabled" : "Admin Mode Enabled",
        description: isAdminMode ? "You are now in regular mode." : "You can now add, edit, and delete blog posts.",
        variant: "default",
      });
    } else if (password !== null) {
      toast({
        title: "Error",
        description: "Incorrect password. Admin mode not enabled.",
        variant: "destructive",
      });
    }
  };

  // Filter blogs based on search and category
  const filteredBlogs = blogPosts.filter((blog) => {
    const matchesSearch = blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "All" || 
      (blog.categories && blog.categories.includes(selectedCategory));

    return matchesSearch && matchesCategory;
  });

  // Get unique categories from all blogs
  const allCategories = ["All", ...new Set(blogPosts.flatMap(blog => blog.categories || []))];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-24 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
            <p className="text-lg text-muted-foreground">Loading blogs...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 pt-16 md:pt-20 pb-10">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-80 -right-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-24 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#6495ed] to-indigo-600">
                Insights & Resources for Retail Success
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Discover the latest trends, strategies, and innovations in inventory and retail management
              </p>

              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#6495ed] focus:border-transparent pl-12"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              {/* Admin Mode Toggle */}
              <div className="mt-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleAdminMode}
                  className="transition-colors duration-300 hover:bg-primary/15 text-primary hover:text-primary font-medium"
                >
                  {isAdminMode ? "Exit Admin Mode" : "Admin Mode"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter - Reduced gap by changing py-8 to py-4 */}
        <section className="py-4 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                    ? 'bg-[#6495ed] hover:bg-[#5078d0] shadow-md'
                    : 'border-[#6495ed] text-[#6495ed] hover:bg-[#6495ed]/20 hover:border-[#5078d0] hover:text-[#5078d0]'
                    }`}
                >
                  {category}
                </Button>
              ))}

              {/* Add Blog Button (Admin Only) */}
              {isAdminMode && (
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => {
                    setIsEditMode(false);
                    resetBlogForm();
                    setShowAddDialog(true);
                  }}
                  className="rounded-full bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300 transform shadow-md ml-2"
                >
                  <Plus size={18} className="mr-1" /> Add Blog
                </Button>
              )}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <BlogCard
                      post={post}
                      isAdminMode={isAdminMode}
                      onEdit={handleEditClick}
                      onDelete={handleDeleteClick}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-2xl font-medium text-gray-700 mb-4">No results found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
                  <Button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="bg-[#6495ed] hover:bg-[#5078d0] transition-all duration-300"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Add/Edit Blog Dialog */}
      <Dialog open={showAddDialog} onOpenChange={(open) => !submitting && setShowAddDialog(open)}>
        <DialogContent className="sm:max-w-[525px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{isEditMode ? "Edit Blog Post" : "Add New Blog Post"}</DialogTitle>
            <DialogDescription>
              {isEditMode
                ? "Update the details for this blog post. Click save when you're done."
                : "Fill in the details for the new blog post. Click save when you're done."}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">Title *</Label>
              <Input
                id="title"
                value={blogForm.title}
                onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="excerpt" className="text-right">Excerpt *</Label>
              <Textarea
                id="excerpt"
                value={blogForm.excerpt}
                onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="content" className="text-right pt-2">Content *</Label>
              <Textarea
                id="content"
                value={blogForm.content}
                onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                className="col-span-3 min-h-[200px]"
                placeholder="Write your blog content here. Use double line breaks for new paragraphs."
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">Author *</Label>
              <Input
                id="author"
                value={blogForm.author}
                onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="readTime" className="text-right">Read Time</Label>
              <Input
                id="readTime"
                value={blogForm.readTime}
                onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                className="col-span-3"
                placeholder="5 min read"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">Category *</Label>
              <Input
                id="category"
                value={Array.isArray(blogForm.categories) ? blogForm.categories[0] || "" : blogForm.categories || ""}
                onChange={(e) => setBlogForm({ ...blogForm, categories: [e.target.value] })}
                className="col-span-3"
                required
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">Image URL *</Label>
              <Input
                id="image"
                value={blogForm.image}
                onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" disabled={submitting}>Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              onClick={isEditMode ? handleUpdateBlog : handleAddBlog}
              disabled={submitting || !blogForm.title || !blogForm.excerpt || !blogForm.content || !blogForm.author || !(blogForm.categories && blogForm.categories[0]) || !blogForm.image}
              className="relative"
            >
              {submitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isEditMode ? "Update Blog" : "Save Blog"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={(open) => !submitting && setShowDeleteDialog(open)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Confirm Deletion
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this blog post? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={submitting}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteBlog} 
              className="bg-red-600 hover:bg-red-700 relative"
              disabled={submitting}
            >
              {submitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </>
  );
};

export default Blog;
