
import React from 'react';

const ClientCard = ({ logo, name, description, industry }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center p-0 border border-border overflow-hidden">
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-full h-full object-fill aspect-auto"
          />
        </div>
        <div className="flip-card-back bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-xl p-6 flex flex-col items-center justify-center shadow-md text-white">
          <h3 className="text-xl font-semibold mb-3">{name}</h3>
          <p className="text-center">{description}</p>
          <div className="mt-4 bg-white/20 px-3 py-1 rounded-full text-sm">
            {industry}
          </div>
        </div>
      </div>
      
      {/* Apply longer transition duration with CSS */}
      <style jsx="true">{`
        .flip-card {
          perspective: 1000px;
          height: 100%;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 1.2s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ClientCard;
