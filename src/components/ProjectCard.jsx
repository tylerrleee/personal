
import React, { useState } from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-72 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;


// Usage example in a Portfolio component
/*
<ProjectCard
  title="My Project"
  description="A cool project I built."
  image="/path/to/image.jpg"
  link="https://github.com/your-repo"
/>
*/