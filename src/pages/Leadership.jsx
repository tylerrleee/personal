import React from 'react';
import vsoImg from '../assets/vso.png'; 
import promo from '../assets/promo.avif'; 
import bas from '../assets/bas.png'; 

import { useState } from 'react';

const leadershipRoles = [
  {
    title: "Marketing Analyst",
    organization: "Blockchain Association Singapore",
    period: "May 2024 - Aug 2024",
    description: "Built a reusable Python/Selenium scraper that captured C-suite contact data for 120+ blockchain & fintech firms, expanding the BAS outreach list by 3× in two weeks.\n Designed ETL workflows (BeautifulSoup → Pandas → BigQuery) to track quarterly funding, VC activity, and regulatory updates across 60 Singapore-registered fintechs; insights fed directly into BAS policy briefs. \n Equipped the Partnerships team with real-time analytics, shortening due-diligence cycles by 40 % and informing new collaborations with Acentrik (Mercedes-Benz) ",
    image: bas,
    link: 'https://www.linkedin.com/in/tylerle-uf/recent-activity/all/'
  },
  {
    title: "President",
    organization: "Vietnamese Student Organization",
    period: "2023 - Present",
    description: "I collaborate with a team of 20+ officers, managing over $40k+ annual budget, and donate our profit to a chosen philanthropy every year. Last year, we donated $3,200 to the Vietnam Health Clinics,\n We organize social events, host professional workshops, and educate Vietnamese culture for our 100+ active members. Our biggest endeavor is hosting a Mid Autuum and Lunar New Year show every year, which attracts 820+ confirmed attendees. ",
    image: vsoImg,
    link: 'https://www.instagram.com/ufvso/'
  },
  {
    title: "Promotional Director",
    organization: "UF",
    period: "Spring 2024",
    description: "30k+ views on all socials. \n Created a promotional video for the Vietnamese Student Organization at the University of Florida, showcasing our events and community impact.",
    image: promo,
    link: 'https://www.youtube.com/watch?v=bjYCfPc3wuo&pp=ygUFdWZ2c2_SBwkJ3gkBhyohjO8%3D'
  },
  // Add more roles as needed
];

const Leadership = () => (
  <section className="max-w-3xl mx-auto py-20 px-4">
    <h2 className="text-3xl font-bold mb-4 text-center text-gray-800"></h2>
    <div className="space-y-6">
      {leadershipRoles.map((role, idx) => (
        
        <div 

            key={idx} 
            className="rounded shadow p-8 flex flex-col items-center"
            style={{ background: '#FAF9F6' }}>
              <a 
              key={idx}
              href={role.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group">
                  
              {role.image && (
                <img
                  src={role.image}
                  alt={role.title}
                  className="min-w-full min-h-full object-cover shadow-lg mb-4 rounded"
                />
              )}
    
            </a>
          <div className="text-center">
            <h3 className="text-blue-900 text-l font-bold">{role.title} &middot; {role.organization}</h3>
            <p className="text-blue-700 text-sm">{role.period}</p>
            <p className="text-gray-700 mt-2">{role.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Leadership;