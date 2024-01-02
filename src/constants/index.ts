import {
  mobile,
  linkedin,
  backend,
  designer,
  web,
  typescript,
  reactjs,
  freelancer,
  redux,
  nodejs,
  mongodb,
  git,
  github,
  shopify,
  medium,
  dotnet,
  csharp,
  astral,
  messenger,
  rainAlarm,
  astralChat,
  astralStore,
  nest,
  next,
  postgres,
  expo,
  competitive,
  mediq,
  footprint,
  elderBytes,
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
];

const technologies = [
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
    name: "nest",
    icon: nest,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "expo",
    icon: expo,
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
      "Designed a store website with a specific theme of the original website.",
      "Developed the Shopify template from scratch with reusable components.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Freelancer.com",
    icon: freelancer,
    iconBg: "#383E56",
    date: "February 2023 - Present",
    points: [
      "Work with clients to define project requirements and deliver customized web development solutions for frontend, backend, and full stack projects.",
      "Utilize diverse technologies such as HTML, CSS, SASS, TailwindCSS, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, C#, ASP.NET, Python, and MongoDB to create engaging web applications.",
      "Ensure timely and within-budget delivery of high-quality projects, consistently meeting or exceeding client expectations.",
      "Continuously update skills and knowledge to stay current with industry trends and best practices.",
    ],
  },
  {
    title: "Competitive Programmer",
    company_name: "TNHIMSS, VandyHacks, and AIS",
    date: "October 2023 - November 2023",
    icon: competitive,
    iconBg: "#383E56",
    points: [
      "Participated in TNHIMSS competition and won 1st place in the TNHIMSS competition. I was responsible for the entire frontend",
      "Participated in VandyHacks and won 1st place in CareYaya sponsored. I Built the backend and refined the frontend.",
      "Participated in the AIS competition. I was responsible for the entire project.",
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
    link: "https://medium-clone-felopater.vercel.app/",
  },
  {
    name: "Chat Room",
    description: "A chat room with real-time messaging.",
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
    link: "https://felopater-chatroom.vercel.app/",
  },
  {
    name: "Astral Store V1",
    description: "The one and only website to buy Earth.",
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
    link: "https://astral99.vercel.app/",
  },
  {
    name: "Astral Store V2",
    description: "A store for all things celestial.",
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
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: astralStore,
    source_code_link: "https://github.com/Felopater-Melika/astral-store",
    link: "https://astral-store.vercel.app/",
  },
  {
    name: "Astral Chat",
    description: "A real time chat app.",
    tags: [
      {
        name: "Nest.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: astralChat,
    source_code_link: "https://github.com/Felopater-Melika/astral-chat",
  },
  {
    name: "Rain Alarm",
    description: "A weather alarm app.",
    tags: [
      {
        name: "Expo",
        color: "blue-text-gradient",
      },
      {
        name: "UI Kitten",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: rainAlarm,
    source_code_link: "https://github.com/Felopater-Melika/rain-alarm",
  },
  {
    name: "MediQ",
    description: "TNHIMSS competition.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Shadcn/UI",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: mediq,
    source_code_link: "https://github.com/einargs/tnhimss-bill",
  },
  {
    name: "Footprint Tracker",
    description: "AIS competition.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Shadcn/UI",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: footprint,
    source_code_link: "https://github.com/JalenJxnes/Footprint-Tracker",
  },
  {
    name: "ElderBytes",
    description: "VandyHacks competition.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: elderBytes,
    source_code_link: "https://github.com/Felopater-Melika/vandyhacks",
  },
];

const socialLinks = [
  {
    name: "Github",
    icon: github,
    link: "https://github.com/Felopater-Melika",
    index: 0,
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/felopater-melika/",
    index: 1,
  },
  {
    name: "freelancer",
    icon: freelancer,
    link: "https://freelancer.com/u/felopaterM",
    index: 2,
  },
];

export { services, technologies, experiences, projects, socialLinks };
