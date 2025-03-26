
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard from './BlogCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  
  useEffect(() => {
    // Try to get blogs from localStorage
    const savedBlogs = localStorage.getItem('blogPosts');
    
    if (savedBlogs) {
      setBlogPosts(JSON.parse(savedBlogs));
    } else {
      // Default blog data if nothing in localStorage
      const defaultBlogs = [
        {
          id: 1,
          title: "The Future of Retail Inventory Management",
          excerpt: "Explore how AI and machine learning are transforming the way retailers manage inventory across channels.",
          author: "Jane Smith",
          date: "May 15, 2023",
          readTime: "5 min read",
          categories: ["Retail", "Technology"],
          image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 2,
          title: "10 Ways to Reduce Stock Discrepancies in Your Retail Business",
          excerpt: "Practical strategies to minimize inventory discrepancies and improve accuracy in your retail operations.",
          author: "Michael Chen",
          date: "Apr 28, 2023",
          readTime: "7 min read",
          categories: ["Inventory", "Business"],
          image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 3,
          title: "How Omnichannel Inventory Management Increases Sales",
          excerpt: "Discover how a unified inventory approach can boost your retail business revenue and customer satisfaction.",
          author: "Sarah Johnson",
          date: "Apr 10, 2023",
          readTime: "6 min read",
          categories: ["Inventory", "Retail"],
          image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 4,
          title: "Sustainable Inventory Practices for Modern Retailers",
          excerpt: "How leading retailers are reducing waste and improving sustainability through better inventory management.",
          author: "David Rodriguez",
          date: "Mar 22, 2023",
          readTime: "8 min read",
          categories: ["Sustainability", "Retail"],
          image: "https://images.unsplash.com/photo-1610018556010-6a11691bc905?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 5,
          title: "Key Metrics Every Retailer Should Track for Inventory Health",
          excerpt: "Essential KPIs and metrics that help retailers maintain optimal inventory levels and improve turnover.",
          author: "Lisa Wong",
          date: "Mar 5, 2023",
          readTime: "6 min read",
          categories: ["Analytics", "Business"],
          image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 6,
          title: "Inventory Management Software: Build vs Buy Decision Guide",
          excerpt: "A comprehensive guide to help retailers decide whether to build custom inventory solutions or purchase existing ones.",
          author: "Robert Taylor",
          date: "Feb 18, 2023",
          readTime: "9 min read",
          categories: ["Technology", "Business"],
          image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ];
      setBlogPosts(defaultBlogs);
    }
  }, []);
  
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-muted/10 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground">
            Stay up to date with the latest trends, tips, and industry news in retail management
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative px-5 md:px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {blogPosts.map((blog) => (
                <CarouselItem key={blog.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <BlogCard post={blog} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="outline" className="group">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
