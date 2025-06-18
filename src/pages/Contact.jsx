import React from 'react';
import emailLogo from '../assets/email_logo.png';
import linkedinLogo from '../assets/linkedin_logo.png';
import githubLogo from '../assets/github_logo.png';

const Contact = () => (
  <section className="min-h-screen flex flex-col justify-center items-center" style={{ background: '#FAF9F6' }}>
    <h2 className="text-3xl  text-blue-800 font-bold mb-8 text-center">Contact Me!</h2>
    <div className="flex flex-col items-start space-y-6">
      <a
        href="https://www.linkedin.com/in/tylerle-uf/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 text-xl hover:text-blue-700 transition"
      >
        <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8" />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://github.com/tylerrleee"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 text-xl hover:text-gray-800 transition"
      >
        <img src={githubLogo} alt="GitHub" className="w-8 h-8" />
        <span>GitHub</span>
      </a>
      <a
        href="mailto:tyleee0105@gmail.com"
        className="flex items-center space-x-3 text-xl hover:text-red-600 transition"
      >
        <img src={emailLogo} alt="Email" className="w-8 h-8" />
        <span>Email: tyleee0105@gmail.com</span>
      </a>
    </div>
  </section>
);
export default Contact;