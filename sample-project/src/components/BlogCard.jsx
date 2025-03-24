
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-200/60 group">
      <div className="relative h-52 overflow-hidden">
        <Link to={`/blog/${post.id}`}>
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {post.categories[0] && (
            <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
              {post.categories[0]}
            </div>
          )}
        </Link>
      </div>
      
      <CardHeader className="p-5 pb-3 flex-grow">
        <Link to={`/blog/${post.id}`}>
          <CardTitle className="text-xl font-bold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
        </Link>
        
        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-5 pt-0">
        <CardDescription className="line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <User size={14} />
          <span>{post.author}</span>
        </div>
        
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 group-hover:translate-x-1 transition-transform" asChild>
          <Link to={`/blog/${post.id}`}>
            Read more <ArrowRight size={14} className="ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;