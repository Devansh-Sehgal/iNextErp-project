
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample blog categories
  const categories = ["All", "Inventory", "Retail", "Technology", "Business"];
  
  // Sample blog data (you would fetch this from an API in a real app)
  const allBlogPosts = [
    {
      id: 1,
      title: "The Future of Retail Inventory Management",
      excerpt: "Explore how AI and machine learning are transforming the way retailers manage inventory across channels.",
      author: "Jane Smith",
      date: "May 15, 2023",
      readTime: "5 min read",
      categories: ["Retail", "Technology"],
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "10 Ways to Reduce Stock Discrepancies in Your Retail Business",
      excerpt: "Practical strategies to minimize inventory discrepancies and improve accuracy in your retail operations.",
      author: "Michael Chen",
      date: "Apr 28, 2023",
      readTime: "7 min read",
      categories: ["Inventory", "Business"],
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      title: "How Omnichannel Inventory Management Increases Sales",
      excerpt: "Discover how a unified inventory approach can boost your retail business revenue and customer satisfaction.",
      author: "Sarah Johnson",
      date: "Apr 10, 2023",
      readTime: "6 min read",
      categories: ["Inventory", "Retail"],
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      title: "Sustainable Inventory Practices for Modern Retailers",
      excerpt: "How leading retailers are reducing waste and improving sustainability through better inventory management.",
      author: "David Rodriguez",
      date: "Mar 22, 2023",
      readTime: "8 min read",
      categories: ["Sustainability", "Retail"],
      image: "https://images.unsplash.com/photo-1610018556010-6a11691bc905?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 5,
      title: "Key Metrics Every Retailer Should Track for Inventory Health",
      excerpt: "Essential KPIs and metrics that help retailers maintain optimal inventory levels and improve turnover.",
      author: "Lisa Wong",
      date: "Mar 5, 2023",
      readTime: "6 min read",
      categories: ["Analytics", "Business"],
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 6,
      title: "Inventory Management Software: Build vs Buy Decision Guide",
      excerpt: "A comprehensive guide to help retailers decide whether to build custom inventory solutions or purchase existing ones.",
      author: "Robert Taylor",
      date: "Feb 18, 2023",
      readTime: "9 min read",
      categories: ["Technology", "Business"],
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  // Filter blogs based on search and category
  const filteredBlogs = allBlogPosts.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || blog.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

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

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-24">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
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
                  className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-12"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
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
                    <BlogCard post={post} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-2xl font-medium text-gray-700 mb-4">No results found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
                  <Button onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
