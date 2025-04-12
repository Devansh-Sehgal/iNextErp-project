
import React from 'react';

const TestimonialCard = ({ quote, author, company, image, rating = 5, role }) => {
  return (
    <div className="testimonial-item bg-gradient-to-br from-background to-background/80 dark:from-gray-800 dark:to-gray-800/80 dark:border-gray-700 p-6 rounded-xl shadow-md border border-border">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold overflow-hidden">
          {image ? (
            <div
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ) : (
            author.charAt(0)
          )}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold dark:text-white">{author}</h4>
          <p className="text-sm text-muted-foreground dark:text-gray-300">
            {role}, {company}
          </p>
        </div>
      </div>
      <p className="italic text-muted-foreground dark:text-gray-300">"{quote}"</p>
      <div className="flex mt-3">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
