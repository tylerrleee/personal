import React from 'react';
import emailLogo from '../assets/email_logo.png';
import linkedinLogo from '../assets/linkedin_logo.png';
import githubLogo from '../assets/github_logo.png';

const Home = () => (
  <section
    className="min-h-screen flex flex-col justify-center items-center"
    style={{ background: '#FAF9F6' }}
  >
    <h1 className="text-4xl font-bold mb-1 text-blue-800">Tyler Le</h1>
    <p className="italic text-gray-700 mb-4 text-center max-w-sm"> (he/him) </p>

    <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
      3rd year Data Science Student at the University of Florida
    </p>
    <div className="flex items-center space-x-6 mb-8">
      <a
        href="https://www.linkedin.com/in/tylerle-uf/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-blue-700 transition"
      >
        <img
          src={linkedinLogo}
          alt="LinkedIn"
          className="w-6 h-6"
        />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/tylerrleee"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-gray-800 transition"
      >
        <img
          src={githubLogo}
          alt="GitHub"
          className="w-6 h-6"
        />
        <span>GitHub</span>
      </a>
      <a
        href="mailto:tyleee0105@gmail.com"
        className="flex items-center space-x-2 hover:text-red-600 transition"
      >
        <img
          src={emailLogo}
          alt="Email"
          className="w-6 h-6"
        />
        <span>Email</span>
      </a>
    </div>
  </section>
);

export default Home;

/*
    <a
      href="/portfolio"
      className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
    >
      View Portfolio
    </a>
*/