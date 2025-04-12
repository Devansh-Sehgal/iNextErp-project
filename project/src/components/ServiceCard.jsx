
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, index, link }) => {
  const cardRef = useRef(null);
  const gradientRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !gradientRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gradientRef.current.style.opacity = '1';
    gradientRef.current.style.left = `${x}px`;
    gradientRef.current.style.top = `${y}px`;
  };

  const handleMouseLeave = () => {
    if (gradientRef.current) {
      gradientRef.current.style.opacity = '0';
    }
    setIsHovered(false);
  };

  const rowIndex = Math.floor(index / 2); 
  
  return (
    <Link to={link}
      ref={cardRef}
      className={`service-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 border border-border relative overflow-hidden group h-full min-h-[340px] flex flex-col transform hover:-translate-y-1 ${
        rowIndex % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'
      }`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={gradientRef}
        className="absolute w-[150px] h-[150px] rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/20 blur-xl opacity-0 transition-opacity duration-500 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      ></div>

      <div className="relative z-1 flex flex-col flex-grow">
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
          <Icon size={24} className="transform transition-transform duration-500 group-hover:scale-110" />
        </div>

        <h3 className="text-xl font-semibold mb-3 text-foreground transition-colors duration-300 group-hover:text-primary">{title}</h3>

        <p className="text-muted-foreground flex-grow">{description}</p>

        <div className="mt-6 pt-4 border-t border-border">
          <a 
            href={link} 
            className="text-primary font-medium inline-flex items-center group-hover:underline transition-all duration-300"
          >
            Learn more
            <svg 
              className={`w-4 h-4 ml-1 transition-all duration-500 ${isHovered ? 'translate-x-1' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative corner effect */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div className="absolute transform rotate-45 bg-primary/10 text-primary shadow-sm -top-6 -right-6 w-12 h-12"></div>
      </div>
    </Link>
  );
};

export default ServiceCard;
