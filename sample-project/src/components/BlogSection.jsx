
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
import { getAllBlogs } from '../services/firestore';
import { useToast } from '@/hooks/use-toast';

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
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

    fetchBlogs();
  }, [toast]);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-muted/10 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground">
            Stay up to date with the latest trends, tips, and industry news in retail management
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
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
        )}

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
