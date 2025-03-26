
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogCard = ({ post, isAdminMode = false, onEdit, onDelete }) => {
  // Early return with a placeholder if post is undefined
  if (!post) {
    return (
      <Card className="overflow-hidden h-full flex flex-col border border-gray-200/60">
        <CardHeader className="p-5 pb-3">
          <CardTitle className="text-xl font-bold">Blog post not available</CardTitle>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <CardDescription>
            This content is currently unavailable.
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  // Safely access post properties with defaults
  const {
    id = '',
    title = 'Untitled',
    image = '/placeholder.svg',
    excerpt = '',
    date = '',
    readTime = '',
    author = '',
    categories = []
  } = post;

  const handleEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onEdit) onEdit(post);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDelete) onDelete(post.id);
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-200/60 group">
      <div className="relative h-52 overflow-hidden">
        <Link to={`/blog/${id}`}>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {categories[0] && (
            <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
              {categories[0]}
            </div>
          )}
        </Link>

        {isAdminMode && (
          <div className="absolute top-3 left-3 flex gap-2">
            <Button
              variant="default"
              size="icon"
              className="bg-blue-500 hover:bg-blue-600 h-8 w-8 shadow-md transition-transform duration-300 hover:scale-105"
              onClick={handleEdit}
            >
              <Edit size={16} />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              className="h-8 w-8 shadow-md transition-transform duration-300 hover:scale-105"
              onClick={handleDelete}
            >
              <Trash2 size={16} />
            </Button>
          </div>
        )}
      </div>

      <CardHeader className="p-5 pb-3 flex-grow">
        <Link to={`/blog/${id}`}>
          <CardTitle className="text-xl font-bold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </Link>

        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
          {date && (
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{date}</span>
            </div>
          )}
          {readTime && (
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{readTime}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-0">
        <CardDescription className="line-clamp-3">
          {excerpt}
        </CardDescription>
      </CardContent>

      <CardFooter className="p-5 pt-0 mt-auto flex items-center justify-between">
        {author && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <User size={14} />
            <span>{author}</span>
          </div>
        )}

        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center text-primary font-medium text-sm group/link"
        >
          <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 group-hover/link:after:w-full">Read more</span>
          <ArrowRight size={14} className="ml-1 transform transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
