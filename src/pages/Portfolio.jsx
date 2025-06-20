// src/pages/Portfolio.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

// ——— images ———
import nycsales   from '../assets/propertysales.png';
import BSImage    from '../assets/blackscholes.png';
import ticks      from '../assets/ticks.png';
import duo        from '../assets/duolingo.jpeg';
import sgflat     from '../assets/sgflats.png';
import diabetes   from '../assets/diabetes.png';

// ——— project data tuned for the NEW ProjectCard API ———
const projects = [
  {
    img: BSImage,
    link: 'https://tleblackschole.streamlit.app/',
    title: 'Black-Scholes Model Dashboard',
    dateRange: 'Jun 2025 – present',
    skills: [
      { name: 'Python',    color: 'bg-red-500' },
      { name: 'Plotly', color: 'bg-pink-400'   },
      { name: 'MySQL',     color: 'bg-blue-700'  },
      { name: 'matplotlib',   color: 'bg-green-400' },
      { name: 'Finance',   color: 'bg-green-600' }
    ],
    description:
      'Interactive dashboard for European option valuation. Users simulate call / put pricing under varying conditions using live ticker data and visualise heat-maps + P/L surfaces.'
  },
  {
    img: nycsales,
    link: 'https://github.com/tylerrleee/NYCsales',
    title: 'Investigating NYC Property Sales',
    dateRange: 'Apr 2025 – May 2025',
    skills: [
      { name: 'R',        color: 'bg-sky-600'   },
      { name: 'ggplot2',  color: 'bg-pink-600'  },
      { name: 'Plotly',   color: 'bg-pink-400'  },
      { name: 'ETL',      color: 'bg-amber-600' }
    ],
    description:
      'Built an R-based ETL + visualisation workflow for New York City’s annualised property sales data. Created spatial pipelines and borough-level price disparity dashboards.'
  },
  {
    img: ticks,
    link: 'https://github.com/tylerrleee/TicksTracking',
    title: 'Tracking Ticks Across a Changing Climate',
    dateRange: 'Feb – Apr 2025',
    skills: [
      { name: 'Python',   color: 'bg-red-500' },
      { name: 'Pandas',   color: 'bg-emerald-600'},
      { name: 'seaborn',color: 'bg-teal-600'   },
      { name: 'Time-Series', color: 'bg-indigo-600'}
    ],
    description:
      'Time-series and geospatial analysis of tick populations vs. climate trends with NEON data. Uncovered environmental drivers and regional surges, informing public-health policy.'
  },
  {
    img: duo,
    link: 'https://github.com/jakelig03/project3-duolingo',
    title: 'Duolingo User Accuracy Algorithm',
    dateRange: 'Nov - Dec 2024',
    skills: [
      { name: 'C++',      color: 'bg-blue-600'  },
      { name: 'Algorithms', color: 'bg-purple-600' },
      { name: 'Data Structures', color: 'bg-fuchsia-600' }
    ],
    description:
      'Parsed and ranked 30 000+ Duolingo vocabulary entries. Implemented & benchmarked custom Quick-sort vs Shell-sort pipelines across four languages.'
  },
  {
    img: sgflat,
    link: 'https://github.com/tylerrleee/SingaporeFlatsPrice-R',
    title: 'Predicting Resale HDB Prices (Singapore)',
    dateRange: 'Nov - Dec 2024',
    skills: [
      { name: 'R',        color: 'bg-sky-600'   },
      { name: 'ggplot2',       color: 'bg-orange-600'},
      { name: 'Regression',      color: 'bg-cyan-600'  }
    ],
    description:
      'Explores how proximity to expressways and floor level influence resale prices of Singapore HDB flats; built predictive models & visual dashboards.'
  },
  {
    img: diabetes,
    link: 'https://github.com/tylerrleee/DiabetesModel-R-',
    title: 'Predicting Diabetes',
    dateRange: 'Nov - Dec 2024',
    skills: [
      { name: 'R',        color: 'bg-sky-600'   },
      { name: 'ggplot2',       color: 'bg-orange-600'},
      { name: 'Regression',      color: 'bg-cyan-600'  }
    ],
    description:
      'Analysed BMI, age & plasma glucose concentration to predict diabetes onset. Derived interpretable patterns and validated logistic-regression models.'
  }
];

export default function Portfolio() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center "
    style={{ background: '#FAF9F6' }}>
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        My Data Projects
      </h2>

      {/* responsive masonry-like grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}
