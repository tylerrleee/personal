import React from 'react';
import ProjectCard from '../components/ProjectCard';
import nycsales from '../assets/nycproportion.png';
import BSImage from '../assets/blackscholesimage.png';

const projects = [
  {
    title: "Black-Scholes Model Dashboard",
    description: "Interactive dashboard for European options valuation using Python, Streamlit, and MySQL. Users can simulate call/put pricing under varying conditions with real-time ticker API, and visualize results with heatmaps and P/L surfaces.",
    image: BSImage, // You can add a relevant screenshot
    link: "https://tleblackschole.streamlit.app/"
  },
  {
    title: "Investigating NYC Property Sales",
    description: "R-based ETL and visualization workflow on New York City’s annualized property sales. Built spatial pipelines, performed trend analysis, and visualized price disparities across boroughs using ggplot2 and plotly.",
    image: nycsales, // Add your own screenshot or placeholder
    link: "https://github.com/tylerrleee/NYCsales"
  },
  {
    title: "Tracking Ticks Across a Changing Climate",
    description: "Time-series and geospatial analysis of tick population and climate trends using NEON data. Revealed environmental drivers and regional population surges, informing public health interventions.",
    image: "/images/ticks-tracking.png", // Add screenshot
    link: "https://github.com/tylerrleee/TicksTracking"
  },
  {
    title: "Duolingo User Accuracy Algorithm",
    description: "C++ pipeline for parsing and ranking 30,000+ Duolingo vocabulary words by user accuracy. Implemented and benchmarked custom quick sort and shell sort algorithms across four languages.",
    image: "/images/duolingo-algo.png", // Add screenshot
    link: "https://github.com/jakelig03/project3-duolingo"
  },
  // You can add leadership projects or visualizations here as well
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
