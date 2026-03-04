// Using CDN URLs from devicons for icons not previously available as local PNGs
// Existing local PNGs are reused for: HTML, CSS, JS, TypeScript, React, Node.js, SQL Server, PostgreSQL, Postman, GitHub

import html from '../pngs/html-5.png';
import css3 from '../pngs/css3.png';
import javascript from '../pngs/javascript.png';
import typescript from '../pngs/typescript.png';
import react from '../pngs/react.png';
import nodejs from '../pngs/nodejs.png';
import sqlserver from '../pngs/sql-server.png';
import postgresql from '../pngs/postgresql.png';
import postman from '../pngs/postman.png';
import github from '../pngs/github.png';

// CDN icons for new/replaced technologies
const DEVICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const skillsArray = [
  { name: 'HTML5',       image: html },
  { name: 'CSS3',        image: css3 },
  { name: 'JavaScript',  image: javascript },
  { name: 'TypeScript',  image: typescript },
  { name: 'React',       image: react },
  { name: 'Angular',     image: `${DEVICONS}/angularjs/angularjs-original.svg` },
  { name: '.NET',        image: `${DEVICONS}/dotnetcore/dotnetcore-original.svg` },
  { name: 'Node.js',     image: nodejs },

  { name: 'PostgreSQL',  image: postgresql },
  { name: 'Oracle SQL',  image: `${DEVICONS}/oracle/oracle-original.svg` },
  { name: 'Siebel CRM',  image: `${DEVICONS}/oracle/oracle-original.svg` },
  { name: 'Postman',     image: postman },
  { name: 'GitHub',      image: github },
  { name: 'Git',         image: `${DEVICONS}/git/git-original.svg` },
];
