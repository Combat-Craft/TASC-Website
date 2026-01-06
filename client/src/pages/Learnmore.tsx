import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";

export const Learnmore = () => {
  return (
    <div className="bg-white w-full">
      <Navigation />

      <div className="mx-auto max-w-[1000px] px-6">
        <h1 className="[font-family:'Poppins'] font-bold text-black text-[48px] tracking-[0] leading-[48px] mt-16 text-center">
          OUR STORY
        </h1>

        <p className="[font-family:'BeVietnam'] font-normal text-black text-[20px] tracking-[0] leading-[30px] mt-8 mb-12 text-center">
        The Toronto Autonomous Systems Collective (TASC) is a student-run design
        and research team focused on robotics and autonomous systems. Founded at
        Toronto Metropolitan University under the Innovation Boost Zone, the
        organisation is dedicated to providing hands-on, experiential learning
        opportunities that prepare students for an evolving technological
        landscape and for careers in engineering, science, and related fields.
        <br />
        <br />
        TASC began as a combat-robotics team with the goal of competing in
        events such as BotBrawl Ontario. The team entered its first competition
        at the CNE BotBrawl in September 2024, earning the title of Best Rookie.
        Following this success, TASC reassessed its long-term ambition and
        identified a desire to pursue more complex and impactful engineering
        challenges. This led to a strategic pivot from battlebots to planetary
        rover development.
        <br />
        <br />
        Throughout this period, TASC continued to refine its structure,
        leadership, and project-management practices, fostering an environment
        where students can grow into capable and ambitious engineers. The team
        places strong emphasis on continuous improvement, encouraging members to
        tackle increasingly challenging problems while expanding their knowledge
        across mechanical, electrical, and software disciplines.
        <br />
        <br />
        TASC competed at CIRC 2025 in Drumheller, Alberta, successfully
        completing the build of Asimov within the ten-month development cycle.
        The competition introduced new insights and technical challenges,
        shaping the next phase of the rover’s evolution. In the upcoming year,
        TASC plans to design custom power-distribution boards and integrate full
        autonomy, enabling the rover to navigate to predetermined destinations
        without operator input.
        <br />
        <br />
        TASC’s mission is to guide students through the full engineering project
        lifecycle; from ideation and design to manufacturing, testing, and
        competition, blending technical development with business and
        project-management experience. The organisation continues to grow as a
        platform for innovation, collaboration, and the pursuit of advanced
        autonomous systems.
      </p>

      </div>

      <Footer />
    </div>
  );
};
