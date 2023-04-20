import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Felopater | Full Stack Developer",
  description:
    " Hello! I&apos;m Felopater, a passionate full-stack developer\n" +
    "        specializing in React and Next.js. Although I have only one year of\n" +
    "        professional experience, my journey into the world of development began\n" +
    "        in high school, where I taught myself programming just to try a new\n" +
    "        thing and this is how I discovered my passion. My dedication to learning\n" +
    "        and my ability to pick up new concepts quickly have allowed me to\n" +
    "        complete various personal projects and two successful freelance jobs. As\n" +
    "        a self-taught developer, I take pride in being efficient, responsible,\n" +
    "        and always eager to enhance my skills. I genuinely believe that my love\n" +
    "        for development goes beyond just a career—it&apos;s also my hobby. Feel\n" +
    "        free to browse my portfolio to see the projects I&apos;ve worked on and\n" +
    "        get a glimpse of my capabilities. If you&apos;re interested in\n" +
    "        collaborating or have any questions, don&apos;t hesitate to reach out!",
  themeColor: "black",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
};

export default RootLayout;
