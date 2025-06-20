
import React, { useState } from 'react';

export default function ProjectCard({
  img,
  link,
  title,
  skills,
  dateRange,
  description,
}) {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => setExpanded(!expanded);

  return (
    <article className="w-full sm:w-[22rem] flex flex-col rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-slate-900 to-slate-800 text-slate-50">
      {/* ——— 1. image with hoverable link overlay ——— */}
      <div className="relative group h-48">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full select-none pointer-events-none"
          draggable={false}
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors"
          aria-label={`Open ${title}`}
        >
          {/* optional 🔗 icon */}
          <svg
            className="w-10 h-10 opacity-0 group-hover:opacity-100 text-white transition-opacity"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M14 3h7v7m0-7L10 14m-4 7H3v-7" />
          </svg>
        </a>
      </div>

      {/* ——— 2. content ——— */}
      <div className="p-5 space-y-2 flex flex-col flex-1">
        {/* title */}
        <h3 className="text-lg font-bold leading-snug">{title}</h3>

        {/* 3. skill chips */}
        <div className="flex flex-wrap gap-1">
          {skills.map(({ name, color }) => (
            <span
              key={name}
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${color} bg-opacity-90`}
            >
              {name}
            </span>
          ))}
        </div>

        {/* 4. date range */}
        <p className="italic text-xs text-slate-300">{dateRange}</p>

        {/* 5. description + read-more */}
        <p
          className={`text-sm leading-relaxed ${
            expanded ? '' : 'line-clamp-3'
          }`}
        >
          {description}
        </p>

        {/* read-more button appears only if text was clamped */}
        <button
          onClick={toggle}
          className="self-end mt-auto text-sm font-semibold underline underline-offset-2 hover:opacity-80 bg-transparent shadow-none"
            style={{ background: 'none' }}

        >
          {expanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </article>
  );
}


/*
const ProjectCard = ({ title, description, image, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-72 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
*/