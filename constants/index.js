import { kvs, vit, maven } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  c,
  solidity,
  
} from "../assets/icons";

export const skills = [
  {
    imageUrl: c,
    name: "C++",
    type: "Backend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: solidity,
    name: "Solidity",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "RISCV DESIGN INTERNSHIP",
    company_name: "Maven Silicon",
    icon: maven,
    iconBg: "#a2d2ff",
    date: "September 2023 - October 2023",
    points: [
      "RISC-V is an open standard instruction set architecture based on established reduced instruction set computing (RISC) principles",
      "Gain a comprehensive understanding of the RISC-V ISA, focusing on the RV32I variant. This includes understanding the different instruction formats, opcode assignments, and the basic principles of RISC architecture",
      "Gain hands-on experience with Register-Transfer Level (RTL) design using hardware description languages (HDLs) like Verilog or VHDL. This involves describing the behavior and structure of digital circuits that implement the RV32I instructions.",
      "Use simulation tools to verify the correctness and functionality of the designed processor",
    ],
  },
];

export const education = [
  {
    title: "B-Tech",
    education_name: "VIT BHOPAL UNIVERSITY",
    icon: vit,
    iconBg: "#b7e4c7",
    date: "August 2021 - April 2025",
    points: [
      "Pursuing my B-tech degree in CSE with specialization in AIML",
      "Till Now CGPA - 8.33",
    ],
  },
  {
    title: "Intermediate Education",
    education_name: "K.V No.1 A.F.S AGRA",
    icon: kvs,
    iconBg: "#accbe1",
    date: "April 2020 - April 2021",
    points: ["Percentage - 90.8"],
  },
  {
    title: "Secondary Education",
    education_name: "K.V No.1 A.F.S AGRA",
    icon: kvs,
    iconBg: "#fbc3bc",
    date: "April 2018 - April 2019",
    points: ["Percentage - 89.2"],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/NishantSeth14",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/nishant-seth-3a8791204/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://pricewise-tawny.vercel.app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Ethereum Goerli Transfer ",
    description:
      "Created a web application which tranfers goerli ethereum from one metamask account to any other metamask account",
    link: "https://singular-croquembouche-8e2787.netlify.app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Weather App",
    description:
      "It is your ultimate companion for staying ahead of the weather curve delivering precision forecasts and real-time weather updates with an intuitive and visually appealing interface",
    link: "https://ephemeral-cheesecake-386509.netlify.app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Image Generator",
    description:
      "App that leverages AI to make an image that is in you mind using open-Ai api.",
    link: "https://sensational-tanuki-4b6908.netlify.app",
  },
];
