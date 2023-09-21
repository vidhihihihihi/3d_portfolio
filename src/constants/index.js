import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tasko,
  sbgblv,
  kooe,
  taxnodes,
  netflixclone,
  finfindr,
  threejs,
  moments,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Data Structures And Analysis",
    icon: backend,
  },
  {
    title: "Data Analytics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Kooe",
    icon: kooe,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Content Creation",
    company_name: "TaxNodes",
    icon: taxnodes,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - July 2023",
    points: [
      "Research useful content with data points on personal finance, income tax, how to save taxes & cryptocurrency.",
      "Preparing infographics and posts.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Scholenberg International",
    icon: sbgblv,
    iconBg: "#383E56",
    date: "Oct 2022 - Aug 2023",
    points: [
      "Create 2D, and 3D animations for technical presentation.",
      "Video editing, adding transition effects, sub-titles, optimizing videos.",
      "Make the course material graphically engaging for viewers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Tasko",
    icon: tasko ,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Feb 2023",
    points: [
      "To coordinate with different stakeholders within TASKO to gather content for post creation.",
      "To regularly post content on various social media platforms for TASKO.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NETFLIX Clone",
    description:
      "A Netflix clone built using React. It fetches the data from TMDB (The Movie Database) API.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: netflixclone,
    source_code_link: "https://github.com/vidhihihihihi/netflix-clone",
  },
  {
    name: "Moments",
    description:
      "A responsive web application where Authorized users allowed to post interesting events that happened in their lives.",
    tags: [
      {
        name: "react+redux",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "EXPRESS",
        color: "pink-text-gradient",
      },
    ],
    image: moments,
    source_code_link: "https://github.com/vidhihihihihi/moments",
  },
  {
    name: "FinFindr",
    description:
      "It is MVP which is a platform created for the investors and investment advisors where they can make business connections for their benefits.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "Authentication",
        color: "green-text-gradient",
      },
      {
        name: "Chat",
        color: "pink-text-gradient",
      },
    ],
    image: finfindr,
    source_code_link: "https://github.com/vidhihihihihi/",
  },
];

export { services, technologies, experiences, testimonials, projects };