import React from 'react';

const ProjectCard = ({ title, description, image, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
    )}
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 flex-1">{description}</p>
      <div className="flex justify-center">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  </div>
);

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