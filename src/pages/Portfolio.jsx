import React from 'react';
import ProjectCard from '../components/ProjectCard';
import nycsales from '../assets/propertysales.png';
import BSImage from '../assets/blackscholes.png';
import ticks from '../assets/ticks.png';
import duo from '../assets/duolingo.jpeg'
import sgflat from '../assets/sgflats.png'
import diabetes from '../assets/diabetes.png'


const projects = [
  {
    title: "Black-Scholes Model Dashboard",
    description: "Interactive dashboard for European options valuation using Python, Streamlit, and MySQL. Users can simulate call/put pricing under varying conditions with real-time ticker API, and visualize results with heatmaps and P/L surfaces.",
    image: BSImage, 
    link: "https://tleblackschole.streamlit.app/"
  },
  {
    title: "Investigating NYC Property Sales",
    description: "R-based ETL and visualization workflow on New York City’s annualized property sales. Built spatial pipelines, performed trend analysis, and visualized price disparities across boroughs using ggplot2 and plotly.",
    image: nycsales,
    link: "https://github.com/tylerrleee/NYCsales"
  },
  {
    title: "Tracking Ticks Across a Changing Climate",
    description: "Time-series and geospatial analysis of tick population and climate trends using NEON data. Revealed environmental drivers and regional population surges, informing public health interventions.",
    image: ticks, 
    link: "https://github.com/tylerrleee/TicksTracking"
  },
  {
    title: "Duolingo User Accuracy Algorithm",
    description: "C++ pipeline for parsing and ranking 30,000+ Duolingo vocabulary words by user accuracy. Implemented and benchmarked custom quick sort and shell sort algorithms across four languages.",
    image: duo, 
    link: "https://github.com/jakelig03/project3-duolingo"
  },

 {
    title: "Predicting Resale HDB Prices in Singapore",
    description: "Explores how proximity to expressways and floor level (storey range) impact resale prices of HDB flats in Singapore.",
    image: sgflat, 
    link: "https://github.com/tylerrleee/SingaporeFlatsPrice-R"
  },
   {
    title: "Predicting Diabetes",
    description: "By examining different contributing factors to diabetes, such as BMI, age, and plasma glucose concentration, we can identify patterns in those affected and and make predictions about others based on these observations.",
    image: diabetes, 
    link: "https://github.com/tylerrleee/DiabetesModel-R-"
  },
];

const Portfolio = () => (
  <section className="max-w-5xl mx-auto py-24 px-4 ">
    <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 ">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;
