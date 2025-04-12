
import React, { useEffect, useRef, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from "../../firebase";
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const testimonialsCollection = collection(db, 'testimonials');
        const q = query(testimonialsCollection);
        const querySnapshot = await getDocs(q);
        
        const testimonialData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        setTestimonials(testimonialData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const setupInfiniteScroll = () => {
      if (scrollerRef.current && containerRef.current) {
        const originalContent = scrollerRef.current.innerHTML;
        scrollerRef.current.innerHTML += originalContent;
      }
    };

    setupInfiniteScroll();

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (scrollerRef.current) {
        scrollerRef.current.style.animationPlayState = 'paused';
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (scrollerRef.current) {
        scrollerRef.current.style.animationPlayState = 'running';
      }
    };

    const container = containerRef.current;
    container?.addEventListener('mouseenter', handleMouseEnter);
    container?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container?.removeEventListener('mouseenter', handleMouseEnter);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [testimonials]);

  // Distribute testimonials into columns for masonry layout
  // Ensure more even distribution across columns
  const columnSize = Math.ceil(testimonials.length / 3);
  const column1 = testimonials.slice(0, columnSize);
  const column2 = testimonials.slice(columnSize, columnSize * 2);
  const column3 = testimonials.slice(columnSize * 2);

  return (
    <section id="testimonials" className="py-8 px-4 relative overflow-hidden bg-secondary/50 dark:bg-gray-900/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-violet-900/10 dark:to-indigo-900/10 -z-10"></div>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the retailers and brands that have transformed their operations with our solutions.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div ref={containerRef} className="testimonial-container relative">
            <div
              ref={scrollerRef}
              className="testimonial-scroller absolute w-full"
              style={{
                animation: 'scroll-testimonials 40s linear infinite',
                animationPlayState: isHovered ? 'paused' : 'running',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Column 1 */}
                <div className="space-y-6">
                  {column1.map((testimonial, index) => (
                    <TestimonialCard
                      key={`col1-${testimonial.id || index}`}
                      quote={testimonial.content}
                      author={testimonial.author}
                      company={testimonial.company}
                      image={testimonial.image}
                      rating={testimonial.rating || 5}
                      role={testimonial.role}
                    />
                  ))}

                  {/* Repeating column 1 for infinite scroll */}
                  {column1.map((testimonial, index) => (
                    <TestimonialCard
                      key={`col1-repeat-${testimonial.id || index}`}
                      quote={testimonial.content}
                      author={testimonial.author}
                      company={testimonial.company}
                      image={testimonial.image}
                      rating={testimonial.rating || 5}
                      role={testimonial.role}
                    />
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                  {column2.map((testimonial, index) => (
                    <TestimonialCard
                      key={`col2-${testimonial.id || index}`}
                      quote={testimonial.content}
                      author={testimonial.author}
                      company={testimonial.company}
                      image={testimonial.image}
                      rating={testimonial.rating || 5}
                      role={testimonial.role}
                    />
                  ))}

                  {/* Repeating column 2 for infinite scroll */}
                  {column2.map((testimonial, index) => (
                    <TestimonialCard
                      key={`col2-repeat-${testimonial.id || index}`}
                      quote={testimonial.content}
                      author={testimonial.author}
                      company={testimonial.company}
                      image={testimonial.image}
                      rating={testimonial.rating || 5}
                      role={testimonial.role}
                    />
                  ))}
                </div>

                {/* Column 3 (only visible on large screens) */}
                <div className="space-y-6 hidden lg:block">
                  {column3.map((testimonial, index) => (
                    <TestimonialCard
                      key={`col3-${testimonial.id || index}`}
                      quote={testimonial.content}
                      author={testimonial.author}
                      company={testimonial.company}
                      image={testimonial.image}
                      rating={testimonial.rating || 5}
                      role={testimonial.role}
                    />
                  ))}

                  {/* Repeating column 3 for infinite scroll */}
                  {column3.map((testimonial, index) => (
                    <TestimonialCard
                      key={`col3-repeat-${testimonial.id || index}`}
                      quote={testimonial.content}
                      author={testimonial.author}
                      company={testimonial.company}
                      image={testimonial.image}
                      rating={testimonial.rating || 5}
                      role={testimonial.role}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;