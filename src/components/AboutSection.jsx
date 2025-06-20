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
        My interests include running, trying Korean recipes, and traveling. After my 1st year in college, I studied and interned abroad in Singapore. It was some of the best months of my life being in a foreign country, challenged with new culture, and explore what it is like to live in a well planned urban city.  
      </p>
      <p className="text-lg text-gray-600 text-center md:text-left mt-4">
        I am actively learning as a Data Science, a curious Finance nerd, and data storytelling enthusiast! Please send me a message on LinkedIn, I'd happy to chat.
      </p>
    </div>
  </section>
);

export default AboutSection;