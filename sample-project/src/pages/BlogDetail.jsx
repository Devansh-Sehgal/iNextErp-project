
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, Clock, User, ArrowLeft, Bookmark, Share2, Edit, Trash2 } from "lucide-react";
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

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
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
      // Simple implementation for demo purposes
      const adminToken = localStorage.getItem('adminToken');
      if (adminToken === 'admin123') {
        setIsAdminMode(true);
      }
    };
    
    const fetchBlog = () => {
      // Get blogs from localStorage
      const savedBlogs = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      
      // Find the specific blog by ID
      const foundBlog = savedBlogs.find(blog => blog.id === parseInt(id));
      
      if (foundBlog) {
        setBlog(foundBlog);
        setBlogForm({
          title: foundBlog.title,
          excerpt: foundBlog.excerpt,
          content: foundBlog.content || "",
          author: foundBlog.author,
          date: foundBlog.date,
          readTime: foundBlog.readTime,
          categories: foundBlog.categories,
          image: foundBlog.image,
        });
        
        // Find 2-3 related posts with the same category
        const related = savedBlogs
          .filter(post => 
            post.id !== parseInt(id) && 
            post.categories.some(cat => foundBlog.categories.includes(cat))
          )
          .slice(0, 3);
        
        setRelatedPosts(related);
      } else {
        toast({
          title: "Error",
          description: "Blog post not found",
          variant: "destructive",
        });
        // Redirect to blog listing after 2 seconds if blog not found
        setTimeout(() => navigate('/blog'), 2000);
      }
      
      setLoading(false);
    };
    
    fetchBlog();
    checkAdminMode();
  }, [id, navigate, toast]);

  const handleUpdateBlog = () => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const updatedBlogs = savedBlogs.map(post => 
      post.id === parseInt(id) ? { ...post, ...blogForm } : post
    );
    
    localStorage.setItem('blogPosts', JSON.stringify(updatedBlogs));
    setBlog({ ...blog, ...blogForm });
    setShowEditDialog(false);
    
    toast({
      title: "Success",
      description: "Blog post has been updated successfully!",
      variant: "default",
    });
  };

  const handleDeleteBlog = () => {
    if (window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      const savedBlogs = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      const filteredBlogs = savedBlogs.filter(post => post.id !== parseInt(id));
      
      localStorage.setItem('blogPosts', JSON.stringify(filteredBlogs));
      
      toast({
        title: "Success",
        description: "Blog post has been deleted successfully!",
        variant: "default",
      });
      
      navigate('/blog');
    }
  };

  // Toggle admin mode with password (simple implementation)
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
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-40 bg-gray-200 rounded"></div>
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
          {/* Admin Controls */}
          <div className="mb-8 flex justify-between items-center">
            {/* Back Button - Replacing Breadcrumbs */}
            <Button 
              variant="outline" 
              onClick={() => navigate('/blog')} 
              className="group transition-all duration-300 hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to All Blogs
            </Button>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleAdminMode}
                className="transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
              >
                {isAdminMode ? "Exit Admin Mode" : "Admin Mode"}
              </Button>
              
              {isAdminMode && (
                <div className="flex gap-2">
                  <Button 
                    onClick={() => setShowEditDialog(true)}
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Edit size={16} />
                    Edit Blog
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={handleDeleteBlog}
                    className="flex items-center gap-2 transition-colors duration-300"
                  >
                    <Trash2 size={16} />
                    Delete Blog
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Blog Header */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {blog.categories.map((category, index) => (
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
                <>
                  <p className="text-lg leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                  
                  <p className="text-lg leading-relaxed mb-6">Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum.</p>
                  
                  <p className="text-lg leading-relaxed mb-6">Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.</p>
                </>
              )}
            </div>
            
            {/* Social Sharing */}
            <div className="flex justify-between items-center border-t border-b border-gray-200 py-6 my-10">
              <Button variant="outline" className="flex items-center gap-2">
                <Bookmark size={18} />
                Save for Later
              </Button>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Share:</span>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href, "_blank")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://twitter.com/intent/tweet?url=" + window.location.href, "_blank")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => window.open("https://www.instagram.com", "_blank")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
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
          
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-6xl mx-auto mt-16">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                          <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-1">
                            {post.categories[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
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
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
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
                value={blogForm.categories[0] || ""} 
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
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleUpdateBlog}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </>
  );
};

export default BlogDetail;
