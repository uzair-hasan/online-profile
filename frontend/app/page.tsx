import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechnicalSkills from "@/components/TechnicalSkills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { AnimatedTestimonials } from "@/components/ui/Testimonial";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <main className="relative bg-black-100 justify-center items-center flex flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <TechnicalSkills />
          <Grid />
          {/* <AnimatedTestimonials/> */}
          <RecentProjects />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
} 
