import React from 'react';
import vsoImg from '../assets/vso.png'; 
import promo from '../assets/promo.avif'; 
import bas from '../assets/bas.png'; 

const leadershipRoles = [
  {
    title: "Marketing Analyst",
    organization: "Blockchain Association Singapore",
    period: "May 2024 - Aug 2024",
    description: "Built a reusable ETL pipeline and MailChimp integration that captured C-suite contact data for Singaporean consultants, 120+ blockchain & fintech firms, expanding the BAS outreach list by 28%.\n Created visualizations on the growth of fintech course offering growth in Singaporean universities, growth in technology tender requests, and pitch decks for the Acentrik seminar partnership." 
      ,
    image: bas,
    link: 'https://www.linkedin.com/in/tylerle-uf/recent-activity/all/'
  },
  {
    title: "President",
    organization: "Vietnamese Student Organization",
    period: "2023 - Present",
    description: "I collaborate with a team of 20+ officers, managing over $40k+ annual budget, and donate our profit to a chosen philanthropy every year. Last year, we donated $3,200 to the Vietnam Health Clinics,\n We organize social events, host professional workshops, and educate Vietnamese culture for our 100+ active members. Our biggest endeavor is hosting a Mid Autuum and Lunar New Year show every year, which attracts 820+ confirmed attendees. \n Awarded as the 'Most Outstanding VSA in the Nation 2024-2025' ",
    image: vsoImg,
    link: 'https://www.instagram.com/ufvso/'
  },
  /*
  {
    title: "Promotional Director",
    organization: "UF",
    period: "Spring 2024",
    description: "30k+ views on all socials. \n A fun cinematic side project, where I created a promotional video for the Vietnamese Student Organization at the University of Florida. ",
    image: promo,
    link: 'https://www.youtube.com/watch?v=bjYCfPc3wuo&pp=ygUFdWZ2c2_SBwkJ3gkBhyohjO8%3D'
  },
  */
];

const Leadership = () => (
  <section className="max-w-3xl mx-auto py-20 px-4">
    <h2 className="text-3xl font-bold mb-4 text-center text-gray-800"></h2>
    <div className="space-y-6">
      {leadershipRoles.map((role, idx) => (
        <div 
          key={idx} 
          className="rounded shadow p-8 flex flex-col items-center"
          style={{ background: '#FAF9F6' }}
        >
          <a 
            href={role.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
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
            <p
              className="text-gray-700 mt-2"
              dangerouslySetInnerHTML={{
                __html: role.description.replace(/\n/g, '<br />')
              }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Leadership;