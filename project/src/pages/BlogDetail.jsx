
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, Clock, User, ArrowLeft, Bookmark, Share2, Edit, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getBlogById, updateBlog, deleteBlog } from "../services/firestore";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    date: "",
    readTime: "",
    categories: [],
    image: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkAdminMode = () => {
      // Check for admin mode in localStorage
      const adminToken = localStorage.getItem('adminToken');
      if (adminToken === 'admin123') {
        setIsAdminMode(true);
      }
    };
    
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const blogData = await getBlogById(id);
        
        if (blogData) {
          setBlog(blogData);
          setBlogForm({
            title: blogData.title || "",
            excerpt: blogData.excerpt || "",
            content: blogData.content || "",
            author: blogData.author || "",
            date: blogData.date || "",
            readTime: blogData.readTime || "",
            categories: blogData.categories || [],
            image: blogData.image || "",
          });
          
          // For related posts logic, we would need to fetch more blogs
          // This could be optimized in a real-world scenario with a query
          // that fetches related blogs directly from Firestore
          setRelatedPosts([]);
        } else {
          toast({
            title: "Error",
            description: "Blog post not found",
            variant: "destructive",
          });
          // Redirect to blog listing after 2 seconds
          setTimeout(() => navigate('/blog'), 2000);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast({
          title: "Error",
          description: "Failed to load blog. Please try again later.",
          variant: "destructive",
        });
        setTimeout(() => navigate('/blog'), 2000);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlog();
    checkAdminMode();
  }, [id, navigate, toast]);

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
      
      await updateBlog(id, formattedBlogData);
      
      // Update the local blog state
      setBlog({ ...blog, ...formattedBlogData });
      setShowEditDialog(false);
      
      toast({
        title: "Success",
        description: "Blog post has been updated successfully!",
        variant: "default",
      });
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

  const handleDeleteBlog = async () => {
    if (window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      try {
        setSubmitting(true);
        
        await deleteBlog(id);
        
        toast({
          title: "Success",
          description: "Blog post has been deleted successfully!",
          variant: "default",
        });
        
        navigate('/blog');
      } catch (error) {
        console.error("Error deleting blog:", error);
        toast({
          title: "Error",
          description: "Failed to delete blog post. Please try again.",
          variant: "destructive",
        });
        setSubmitting(false);
      }
    }
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
        description: isAdminMode ? "You are now in regular mode." : "You can now edit and delete blog posts.",
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

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
            <p className="text-lg text-muted-foreground">Loading blog content...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Blog Post Not Found</h2>
            <p className="text-gray-500 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Blogs
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Admin Controls - Improved Mobile Layout */}
          <div className="mb-8 flex flex-wrap justify-between items-center gap-4">
            {/* Back Button */}
            <Button 
              variant="outline" 
              onClick={() => navigate('/blog')} 
              className="group transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to All Blogs
            </Button>
            
            <div className="flex flex-wrap items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleAdminMode}
                className="transition-colors duration-300 hover:bg-primary/15 hover:text-primary"
              >
                {isAdminMode ? "Exit Admin Mode" : "Admin Mode"}
              </Button>
              
              {isAdminMode && (
                <div className="flex gap-2">
                  <Button 
                    onClick={() => setShowEditDialog(true)}
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
                    disabled={submitting}
                  >
                    <Edit size={16} />
                    <span className="hidden sm:inline">Edit Blog</span>
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={handleDeleteBlog}
                    className="flex items-center gap-2 transition-colors duration-300"
                    disabled={submitting}
                  >
                    <Trash2 size={16} />
                    <span className="hidden sm:inline">Delete</span>
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Blog Header */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {blog.categories && blog.categories.map((category, index) => (
                <span 
                  key={index}
                  className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full max-h-[400px] object-cover"
            />
          </div>
          
          {/* Blog Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Blog content paragraphs */}
              {blog.content ? (
                <div className="text-lg leading-relaxed space-y-6">
                  {blog.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="text-lg leading-relaxed mb-6">No content available for this blog post.</p>
              )}
            </div>
            
            {/* Social Sharing */}
            <div className="flex flex-wrap justify-between items-center border-t border-b border-gray-200 py-6 my-10 gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Bookmark size={18} />
                <span className="hidden sm:inline">Save for Later</span>
              </Button>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Share:</span>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href, "_blank")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://twitter.com/intent/tweet?url=" + window.location.href, "_blank")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href, "_blank")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast({
                    title: "Link Copied",
                    description: "Blog link has been copied to clipboard",
                  });
                }}>
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related Posts (we could add this feature later) */}
          
          {/* Back to Blog Button */}
          <div className="flex justify-center mt-16">
            <Button 
              variant="outline" 
              onClick={() => navigate('/blog')} 
              className="group transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to All Blogs
            </Button>
          </div>
        </div>
      </main>

      {/* Edit Blog Dialog */}
      <Dialog open={showEditDialog} onOpenChange={(open) => !submitting && setShowEditDialog(open)}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Blog Post</DialogTitle>
            <DialogDescription>
              Make changes to your blog post. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">Title</Label>
              <Input 
                id="title" 
                value={blogForm.title} 
                onChange={(e) => setBlogForm({...blogForm, title: e.target.value})}
                className="col-span-3" 
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="excerpt" className="text-right">Excerpt</Label>
              <Textarea 
                id="excerpt" 
                value={blogForm.excerpt} 
                onChange={(e) => setBlogForm({...blogForm, excerpt: e.target.value})}
                className="col-span-3" 
              />
            </div>
            
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="content" className="text-right pt-2">Content</Label>
              <Textarea 
                id="content" 
                value={blogForm.content} 
                onChange={(e) => setBlogForm({...blogForm, content: e.target.value})}
                className="col-span-3 min-h-[200px]" 
                placeholder="Write your blog content here. Use double line breaks for new paragraphs."
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">Author</Label>
              <Input 
                id="author" 
                value={blogForm.author} 
                onChange={(e) => setBlogForm({...blogForm, author: e.target.value})}
                className="col-span-3" 
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="readTime" className="text-right">Read Time</Label>
              <Input 
                id="readTime" 
                value={blogForm.readTime} 
                onChange={(e) => setBlogForm({...blogForm, readTime: e.target.value})}
                className="col-span-3" 
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">Category</Label>
              <Input 
                id="category" 
                value={Array.isArray(blogForm.categories) ? blogForm.categories[0] || "" : blogForm.categories || ""}
                onChange={(e) => setBlogForm({...blogForm, categories: [e.target.value]})}
                className="col-span-3" 
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">Image URL</Label>
              <Input 
                id="image" 
                value={blogForm.image} 
                onChange={(e) => setBlogForm({...blogForm, image: e.target.value})}
                className="col-span-3" 
              />
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" disabled={submitting}>Cancel</Button>
            </DialogClose>
            <Button 
              onClick={handleUpdateBlog}
              disabled={submitting}
              className="relative"
            >
              {submitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </>
  );
};

export default BlogDetail;
