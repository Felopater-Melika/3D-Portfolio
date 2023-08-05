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
    tailwind,
    nodejs,
    mongodb,
    git,
    github,
    figma,
    X,
    ross,
    shopify,
    threejs,
    medium,
    dotnet,
    githubTech,
    csharp,
    sass,
    astral,
    messenger,
    rainAlarm, astralChat, astralStore, nest, next, postgres, expo
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
    // {
    //     name: "Sass",
    //     icon: sass,
    // },
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
    // {
    //     name: "Node JS",
    //     icon: nodejs,
    // },
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
    // {
    //     name: "GitHub",
    //     icon: githubTech,
    // },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    {
        name: "nest",
        icon: nest
    },
    {
        name: "next",
        icon: next
    },
    {
        name: "postgres",
        icon: postgres
    },
    {
        name: "expo",
        icon: expo
    }
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
        title: "Retail Associate",
        company_name: "Ross Stores",
        icon: ross,
        iconBg: "#383E56",
        date: "December 2021 - March 2022",
        points: [
            "Helped customers complete purchases, locate items, and join reward programs.",
            "Stocked merchandise, clearly labeling items, and arranging according to size or color.",
            "Answered questions about store policies and addressed customer concerns.",
            "Refunded payments for returned items, processed exchanges, and offered store credit to achieve customer satisfaction.",
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
        name: "Chat ROom",
        description:
            "A chat room with real-time messaging.",
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
    // {
    //     name: "Astral",
    //     description: "The one and only website to buy Earth.",
    //     tags: [
    //         {
    //             name: "Next.JS",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "Shopify",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "tailwind",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: astral,
    //     source_code_link: "https://github.com/Felopater-Melika/astral99",
    //     link: "https://astral99.vercel.app/"
    // },
    {
        name: "Astral Store",
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
            }
        ],
        image: astralStore,
        source_code_link: "https://github.com/Felopater-Melika/astral-store",
        link: "https://astral-store.vercel.app/"
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
                name: 'Prisma',
                color: 'pink-text-gradient'
            }
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
                color: "blue-text-gradient",},
            {
                name: "UI Kitten",
                color: "green-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            }
        ],
        image: rainAlarm,
        source_code_link: "https://github.com/Felopater-Melika/rain-alarm",
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
    {
        name: "X",
        icon: X,
        link: "https://x.com/FelopaterMelika",
        index: 3,
    },
];

export {services, technologies, experiences, projects, socialLinks};
