import React from 'react';
import profilePic from '../assets/tylerle.JPG';

const AboutSection = () => (
  <section className="max-w-3xl mx-auto py-32 px-4 flex flex-col md:flex-row items-center md:items-start ">
    <img
      src={profilePic}
      alt="Tyler Le"
      className="min-w-16 min-h-16 object-cover rounded-3xl mb- md:mb-0 md:mr-8 shadow-xl"
    />
    <div>
      <h2 className="text-3xl font-bold mb-0 text-center md:text-left"></h2>
      <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
        I'm a 3rd year Data Science student at the University of Florida, passionate about leveraging data to solve real-world problems. I have a strong foundation in statistics, data pipelines, and data visualization, and I'm always eager to learn more by working with Big Data.
      </p>
      <p className="text-lg text-gray-600 text-center md:text-left">
        My interests include running, cooking, and as niche as it sounds, I love to listen to Bloomberg Tech, JOMO podcasts, and TechStack about the latest in data science and technology. I also enjoy exploring new technologies and applying them to practical projects.
      </p>
      <p className="text-lg text-gray-600 text-center md:text-left mt-4">
        Feel free to connect with me on LinkedIn or GitHub, or reach out via email if you'd like to connect!
      </p>
    </div>
  </section>
);

export default AboutSection;