import React from 'react';
import profilePic from '../assets/tylerle.JPG';

const AboutSection = () => (
  <section className="max-w-3xl mx-auto py-12 px-4 flex flex-col items-center">
    <img
      src={profilePic}
      alt="Tyler Le"
      className="w-40 h-40 object-cover rounded-full mb-6 shadow-lg"
    />
    <h2 className="text-3xl font-bold mb-4 text-center"></h2>
    <p className="text-lg text-gray-700 mb-4 text-center">
      I'm a 3rd year Data Science student at the University of Florida, passionate about leveraging data to solve real-world problems. I have a strong foundation in statistics, data pipelines, and data visualization, and I'm always eager to learn more by working with Big Data.
    </p>
    <p className="text-gray-600 text-center">
      My interests include running, cooking, and as niche as it sounds, I love to listen to Bloomberg Tech, Podcasts and TechStack about the latest in data science and technology. I also enjoy exploring new technologies and applying them to practical projects.
    </p>
    <p className="text-gray-600 text-center mt-4">
      Feel free to connect with me on LinkedIn or GitHub, or reach out via email if you'd like to collaborate or just chat about data science!
    </p>
  </section>
);

export default AboutSection;