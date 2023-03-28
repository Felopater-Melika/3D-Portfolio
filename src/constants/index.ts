import {
  mobile,
  backend,
  designer,
  web,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  ross,
  shopify,
  threejs,
  medium,
  dotnet,
  github,
  csharp,
  sass,
  astral,
  messenger,
} from "../../public/assets";

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: designer,
  },
];

const technologies = [
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "Sass",
    icon: sass,
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
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET",
    icon: dotnet,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Freelance Shopify Template Development",
    company_name: "Independent",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2021",
    points: [
      "Designed a Store for the client with a Theme that fit the rest of the website",
      "Worked with client on developing a Shopify Store template that fits the theme of his website using Liquid templating language",
    ],
  },
  {
    title: "Retail Associate",
    company_name: "Ross Stores",
    icon: ross,
    iconBg: "#383E56",
    date: "December 2021 - March 2022",
    points: [
      "Worked in stockroom",
      "Stocked merchandise",
      "Assisted customers",
    ],
  },
];

const projects = [
  {
    name: "Medium Clone",
    description:
      "A clone of the Medium website, where users can create and share articles, and follow other users to read their articles.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: medium,
    source_code_link: "https://github.com/Felopater-Melika/medium-clone",
  },
  {
    name: "Messenger Clone",
    description:
      "A clone of Messenger website That allows users to chat with each other in real time.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: messenger,
    source_code_link: "https://github.com/Felopater-Melika/messenger-clone",
  },
  {
    name: "Astral",
    description: "The one and only website to buy planets from.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Shopify",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: astral,
    source_code_link: "https://github.com/Felopater-Melika/astral99",
  },
];

export { services, technologies, experiences, projects };
