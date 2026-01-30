import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

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
    <div className="bg-white w-full relative">
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

      <section className="relative bg-[linear-gradient(135deg,rgba(255,152,0,1)_0%,rgba(255,167,39,1)_50%,rgba(255,183,77,1)_100%)] overflow-hidden">
        <div className="relative px-6 md:px-12 py-16 md:py-32 md:min-h-[600px]">
          <div className="flex flex-col md:flex-row md:items-start md:gap-16 gap-8">
            {/* Mobile heading - appears first on mobile */}
            <div className="flex flex-col md:hidden w-full">
              <h2 className="[font-family:'Poppins'] font-bold text-black text-[32px] tracking-[0] leading-[48px] mb-8 text-center">
                OUR STORY
              </h2>
            </div>

            {/* Left: image */}
            <div className="h-[300px] md:h-[520px] w-full md:w-1/2 md:flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-[20px]"
                alt="Image"
                src="/figmaAssets/image-17.png"
              />
            </div>

            {/* Right: text */}
            <div className="flex flex-col justify-start md:justify-start items-center md:items-start">
              <h2 className="hidden md:block [font-family:'Poppins'] font-bold text-black text-[48px] tracking-[0] leading-[48px] mb-8">
                OUR STORY
              </h2>
              <p className="[font-family:'BeVietnam'] font-normal text-black text-[16px] md:text-[20px] tracking-[0] leading-[30px] mb-8 text-center md:text-left">
                The Toronto Autonomous Systems Collective (TASC) is a
                student-run design and research team focused on robotics and
                autonomous systems. Founded at Toronto Metropolitan University
                under the Innovation Boost Zone, the organisation is dedicated
                to providing hands-on, experiential learning opportunities that
                prepare students for an evolving technological landscape and for
                careers in engineering, science, and related fields.
                <br />
                TASC began as a combat-robotics team with the goal of competing
                in events such as BotBrawl Ontario. The team entered its first
                competition at the CNE BotBrawl in September 2024, earning the
                title of Best Rookie. Following this success, TASC reassessed
                its long-term ambition and identified a desire to pursue more
                complex and impactful engineering challenges. This led to a
                strategic pivot from battlebots to planetary rover development.
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
        <div className="relative flex justify-center bg-neutral-50 p-6 md:p-8 mx-6 md:mx-8 rounded-[20px]">
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

      <section className="relative px-6 md:px-12 py-24">
        <div className="mx-auto">
          <h2 className="text-black text-center [font-family:'Poppins'] font-bold text-[36px] md:text-[48px] tracking-[0] leading-[48px] mb-24">
            OUR JOURNEY
          </h2>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 w-1.5 h-full bg-[#0a1f44] md:-translate-x-1/2" />

            <div className="space-y-32">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative min-h-[220px]">
                  <div className="absolute left-0 md:left-1/2 top-[18px] w-[30px] h-[30px] bg-[#0a1f44] rounded-[15px] md:-translate-x-1/2 -translate-x-[11px]" />

                  {/* Mobile: Always on right, Desktop: Alternate left/right */}
                  {event.side === "right" ? (
                    <div className="flex flex-col md:flex-row md:items-start md:justify-end md:gap-16">
                      <div className="hidden md:block md:w-1/2" />
                      <div className="w-full md:w-1/2 flex flex-col items-start gap-6 ml-16 md:ml-0">
                        <Card className="w-[80%] md:w-[289px] h-[68px] rounded-xl bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center">
                          <CardContent className="p-0 flex items-center justify-center">
                            <p className="[font-family:'Poppins'] font-bold text-white text-[30px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                              {event.year}
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="w-[80%] md:w-[504px] rounded-[20px] border-4 border-[#0a1f44] bg-white">
                          <CardContent className="p-6 md:p-8">
                            <h3 className="[font-family:'BeVietnam'] font-normal text-black text-[24px] md:text-[30px] text-center tracking-[0] leading-[30px] mb-4">
                              {event.title}
                            </h3>
                            <p className="[font-family:'BeVietnam'] text-center font-normal text-black text-[16px] md:text-[20px] tracking-[0] leading-[30px] mb-8">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row md:items-start md:justify-start md:gap-16">
                      <div className="w-full md:w-1/2 flex flex-col md:items-end items-start gap-6 ml-16 md:ml-0">
                        <Card className="w-[80%] md:w-[289px] h-[68px] rounded-xl bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center">
                          <CardContent className="p-0 flex items-center justify-center">
                            <p className="[font-family:'Poppins'] font-bold text-white text-[30px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                              {event.year}
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="w-[80%] md:w-[504px] rounded-[20px] border-4 border-[#0a1f44] bg-white">
                          <CardContent className="p-6 md:p-8">
                            <h3 className="[font-family:'BeVietnam'] font-normal text-black text-[24px] md:text-[30px] text-center tracking-[0] leading-[30px] mb-4">
                              {event.title}
                            </h3>
                            <p className="[font-family:'BeVietnam'] text-center font-normal text-black text-[16px] md:text-[20px] tracking-[0] leading-[30px] mb-8">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="hidden md:block md:w-1/2" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
