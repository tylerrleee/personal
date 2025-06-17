import React from 'react';
import vsoImg from '../assets/vso.jpg'; // Example image for Vietnamese Student Organization
// import ufImg from '../assets/uf.jpg';   // Example image for UF

const leadershipRoles = [
  {
    title: "President",
    organization: "Vietnamese Student Organization",
    period: "2023 - Present",
    description: "I run a student organization, 800+ add members, 100+ active members. I manage a team of 20+ officers, organize events, and lead initiatives to promote data science education and community engagement.",
    image: vsoImg
  },
  {
    title: "Promotional Director",
    organization: "UF",
    period: "Spring 2024",
    description: "fill this out",
    image: vsoImg // change this to ufImg when available
  },
  // Add more roles as needed
];

const Leadership = () => (
  <section className="max-w-3xl mx-auto py-12 px-4">
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">INSERT HERE**</h2>
    <div className="space-y-6">
      {leadershipRoles.map((role, idx) => (
        <div 
            key={idx} 
            className="rounded shadow p-8 flex flex-col items-center"
            style={{ background: '#FAF9F6' }}>
          {role.image && (
            <img
              src={role.image}
              alt={role.title}
              className="min-w-full min-h-full object-cover shadow-lg mb-4 rounded"
            />
          )}
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