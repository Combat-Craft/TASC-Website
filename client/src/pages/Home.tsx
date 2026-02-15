import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const statsData = [
  { value: "80+ Active Members" },
  { value: "12+ Current Sponsors" },
];

const timelineEvents = [
  {
    year: "2024",
    title: "Founding as TASC",
    description:
      "Established as TASC, a student-led robotics team at Toronto Metropolitan University (TMU), focusing on combat robotics.",
    side: "right",
  },
  {
    year: "2024",
    title: "Bot Brawl",
    description:
      "First Competition was Botbrawl CNE 2024 on August 31st and Sept 1st 2024",
    side: "left",
  },
  {
    year: "2025",
    title: "CIRC",
    description:
      "Canadian International Rover Challenge (CIRC) Summer 2025 from August 8-11th, 2025",
    side: "right",
  },
  {
    year: "2026",
    title: "CIRC",
    description:
      "Canadian International Rover Challenge (CIRC) Summer 2026 from August 7-10th, 2026",
    side: "left",
  },
];

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative overflow-x-hidden md:overflow-visible">
      <Navigation />

      <section className="relative px-6 md:px-12 pb-8 md:py-16 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        {/* Mobile heading - appears first on mobile */}
        <h1 className="md:hidden [font-family:'Stopmotion'] text-[36px] font-bold text-black mb-8 leading-tight text-center w-full mt-0">
          Toronto Autonomous Systems Collective
        </h1>
        <img
          className="w-full md:hidden h-auto max-w-[450px]"
          alt="Image"
          src="/figmaAssets/image-9.png"
        />
        <div className="w-full md:w-[706px]">
          <h1 className="hidden md:block [font-family:'Stopmotion'] text-[48px] font-bold text-black mb-8 leading-tight">
            Toronto Autonomous Systems Collective
          </h1>
          <p className="[font-family:'BeVietnam'] font-normal text-black text-[18px] md:text-[20px] tracking-[0] leading-[normal] text-center md:text-left">
            One of the biggest challenges facing students at Toronto
            Metropolitan University (TMU), and across Canadian post-secondary
            education, is the lack of accessible, hands-on experiential learning
            in robotics and advanced engineering. Too often, students graduate
            with strong theoretical knowledge but limited real-world experience
            applying that knowledge to solve meaningful problems.
          </p>
        </div>
        <img
          className="hidden md:block w-[450px] h-[450px]"
          alt="Image"
          src="/figmaAssets/image-9.png"
        />
      </section>

      <section className="relative bg-[#ff9800] overflow-hidden">
        <div className="relative px-6 md:px-12 pt-8 pb-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 gap-8">
            {/* Mobile heading - appears first on mobile */}
            <div className="flex flex-col md:hidden w-full">
              <h2 className="[font-family:'Poppins'] font-bold text-black text-[36px] tracking-[0] leading-[48px] mb-0 text-center">
                OUR STORY
              </h2>
            </div>

            {/* Left: image */}
            <div className="h-[300px] md:h-[520px] w-full md:w-1/2 md:flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-[20px]"
                alt="Image"
                src="/figmaAssets/image-17.jpg"
              />
            </div>

            {/* Right: text */}
            <div className="flex flex-col justify-start md:justify-start items-center md:items-start">
              <h2 className="hidden md:block [font-family:'Poppins'] font-bold text-black text-[48px] tracking-[0] leading-[48px] mb-8">
                OUR STORY
              </h2>
              <p className="[font-family:'BeVietnam'] font-normal text-black text-[18px] md:text-[20px] tracking-[0] leading-[30px] mb-8 text-center md:text-left">
                The Toronto Autonomous Systems Collective (TASC) is a
                student-run design and research team focused on robotics and
                autonomous systems. Founded at Toronto Metropolitan University
                under the Innovation Boost Zone (IBZ), the organisation is dedicated
                to providing hands-on, experiential learning opportunities that
                prepare students for an evolving technological landscape and for
                careers in engineering, science, and related fields.
                <br />
                TASC began as a combat robotics team, earning Best Rookie at CNE 
                BotBrawl 2024 before making a strategic pivot to planetary rover 
                development to pursue more complex engineering challenges.
              </p>
              <div className="flex justify-center md:justify-start w-full">
                <Link href="/Learnmore">
                  <Button className="[font-family:'BeVietnam'] h-[45px] px-8 bg-[#0a1f44] hover:bg-[#0a1f44]/90 rounded-[20px] font-normal text-neutral-50 text-[20px] justify-center">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-8">
        <div className="absolute top-0 left-0 w-max h-[361px] rounded-[20px]" />
        <div className="relative flex justify-center bg-neutral-50 p-6  md:mt-12 md:p-8 mx-6 md:mx-8 rounded-[20px]">
          <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-8 w-full">
            {statsData.map((stat, index) => (
              <Card
                key={index}
                className="w-full md:w-[600px] md:h-[250px] h-[290px] rounded-full bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center mx-auto"
              >
                <CardContent className="p-0 flex items-center justify-center">
                  <p className="w-[252px] md:w-[350px] font-bold text-white text-[28px] md:text-[30px] text-center leading-[48px] tracking-[0] [font-family:'Poppins']">
                    {stat.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 md:px-12 py-12">
        <div className="mx-auto">
          <h2 className="text-black text-center [font-family:'Poppins'] font-bold text-[36px] md:text-[48px] tracking-[0] leading-[48px] mb-24">
            OUR JOURNEY
          </h2>

          {/* MOBILE: Vertical Timeline */}
          <div className="md:hidden relative">
            <div className="relative">
              {/* Start indicator - horizontal line */}
              <div className="absolute left-0 top-0 h-1.5 w-8 bg-[#0a1f44]" style={{ zIndex: 2, transform: 'translateX(-40%) translateY(-3px)' }} />
              
              {/* Main line */}
              <div className="absolute left-0 top-0 w-1.5 h-full bg-[#0a1f44]" />

              <div className="space-y-32">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative min-h-[220px]">
                    <div className="absolute left-0 top-[18px] w-[30px] h-[30px] bg-[#0a1f44] rounded-[15px] -translate-x-[11px]" />

                    <div className="w-full flex flex-col items-start gap-6 ml-16">
                      <Card className="w-[80%] h-[68px] rounded-xl bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center">
                        <CardContent className="p-0 flex items-center justify-center">
                          <p className="[font-family:'Poppins'] font-bold text-white text-[28px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                            {event.year}
                          </p>
                        </CardContent>
                      </Card>
                      <Link href="/Events">
                        <Card className="w-[80%] rounded-[20px] border-4 border-[#0a1f44] bg-white relative cursor-pointer hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <h3 className="[font-family:'BeVietnam'] font-normal text-black text-[28px] text-center tracking-[0] leading-[30px] mb-4">
                              {event.title}
                            </h3>
                            <p className="[font-family:'BeVietnam'] text-center font-normal text-black text-[18px] tracking-[0] leading-[30px] mb-8">
                              {event.description}
                            </p>
                            {index !== 0 && (
                              <div className="absolute bottom-4 right-4">
                                <ChevronRight className="w-6 h-6 text-[#0a1f44]" />
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* End indicator - horizontal line */}
              <div className="absolute left-0 bottom-0 h-1.5 w-8 bg-[#0a1f44]" style={{ zIndex: 2, transform: 'translateX(-40%) translateY(3px)' }} />
            </div>
          </div>

          {/* DESKTOP: Horizontal Scrollable Timeline */}
          <div className="hidden md:block relative">
            <div className="overflow-x-auto pb-8 pl-2">
              <div className="relative inline-flex gap-8 min-w-max px-12">
                {/* Start indicator - vertical line */}
                <div className="absolute top-[12px] left-0 w-1.5 h-8 bg-[#0a1f44]" style={{ zIndex: 2, transform: 'translateX(-3px) translateY(10%)' }} />
                
                {/* Horizontal Line */}
                <div className="absolute top-[28px] left-0 right-0 h-1.5 bg-[#0a1f44]" style={{ zIndex: 0 }} />

                {/* Timeline Items */}
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative flex flex-col items-center flex-shrink-0 w-[480px]" style={{ zIndex: 1 }}>
                    {/* Dot ON the line */}
                    <div className="absolute top-[13px] left-1/2 -translate-x-1/2 w-[30px] h-[30px] bg-[#0a1f44] rounded-full" style={{ zIndex: 2 }} />

                    {/* Content Container */}
                    <div className="flex flex-col items-center gap-4 w-full pt-20">
                      <Card className="w-[289px] h-[70px] rounded-xl bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center flex-shrink-0">
                        <CardContent className="p-0 flex items-center justify-center">
                          <p className="[font-family:'Poppins'] font-bold text-white text-[30px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                            {event.year}
                          </p>
                        </CardContent>
                      </Card>
                      <Link href="/Events">
                        <Card className="w-[420px] h-[220px] rounded-[20px] border-4 border-[#0a1f44] bg-white flex flex-col flex-shrink-0 relative cursor-pointer hover:shadow-lg transition-shadow">
                          <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                            <h3 className="[font-family:'BeVietnam'] font-normal text-black text-[30px] text-center tracking-[0] leading-[30px] mb-4">
                              {event.title}
                            </h3>
                            <p className="[font-family:'BeVietnam'] text-center font-normal text-black text-[20px] tracking-[0] leading-[30px]">
                              {event.description}
                            </p>
                            {index !== 0 && (
                              <div className="absolute bottom-4 right-4">
                                <ChevronRight className="w-6 h-6 text-[#0a1f44]" />
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  </div>
                ))}
                
                {/* End indicator - vertical line */}
                <div className="absolute top-[12px] right-0 w-1.5 h-8 bg-[#0a1f44]" style={{ zIndex: 2, transform: 'translateX(3px) translateY(10%)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
