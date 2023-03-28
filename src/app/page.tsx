import Head from "next/head";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "@/components";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Head>
        <link rel="shortcut icon" href="./../../public/favicon.ico" />
      </Head>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <Footer />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;
