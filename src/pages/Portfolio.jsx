import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "D3 Bar Chart",
    description: "A simple bar chart built with D3.js.",
    image: "/images/bar-chart.png",
    link: "https://github.com/your-repo/bar-chart"
  },
  {
    title: "React Weather App",
    description: "A weather app built with React and OpenWeatherMap API.",
    image: "/images/weather-app.png",
    link: "https://github.com/your-repo/weather-app"
  },
  // Add more projects as needed
];

const Portfolio = () => (
  <section className="max-w-5xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;

/*
How it works:

Imports your ProjectCard component.
Defines a projects array with project details.
Maps over the array to render a ProjectCard for each project.
You can customize the projects array with your own projects and images. Make sure the image paths are correct or use external URLs.
*/