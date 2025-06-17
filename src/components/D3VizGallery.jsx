import React from 'react';

const D3VizGallery = ({ projects }) => (
  <section className="py-8">
    <h2 className="text-2xl font-bold mb-6 text-center">D3 Visualization Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects && projects.length > 0 ? (
        projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <div className="mb-2">
              {/* You can embed your D3 visualizations here, or use an <img> or <iframe> */}
              {project.visualization ? (
                <div>{project.visualization}</div>
              ) : project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded" />
              ) : null}
            </div>
            <p className="text-gray-700 mb-2">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Details
              </a>
            )}
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No D3 projects to display.</p>
      )}
    </div>
  </section>
);

export default D3VizGallery;

// Usage example in a Portfolio component
/*
<D3VizGallery
  projects={[
    {
      title: "Bar Chart",
      description: "A simple D3 bar chart.",
      image: "/images/bar-chart.png",
      link: "https://your-d3-demo.com"
    },
    // Add more projects...
  ]}
/>
  */