import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const statsData = [
  { value: "80+ Active Members" },
  { value: "11+ Current Sponsors" },
  { value: "2+ Project Created" },
  { value: "2+ Competition Participated" },
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
    <div className="bg-white w-full min-w-[1440px] relative">
      <Navigation />

      <section className="relative px-12 py-16 flex items-start justify-between">
        <div className="w-[706px]">
          <img
            className="w-[704px] h-[141px] object-cover mb-8"
            alt="Image"
            src="/figmaAssets/image-14.png"
          />
          <p className="[font-family:'Khmer',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
            One of the biggest challenges facing students at Toronto
            Metropolitan University (TMU), and across Canadian post-secondary
            education, is the lack of accessible, hands-on experiential learning
            in robotics and advanced engineering. Too often, students graduate
            with strong theoretical knowledge but limited real-world experience
            applying that knowledge to solve meaningful problems.
          </p>
        </div>
        <img
          className="w-[614px] h-[616px]"
          alt="Image"
          src="/figmaAssets/image-9.png"
        />
      </section>

      <section className="relative bg-[linear-gradient(135deg,rgba(255,152,0,1)_0%,rgba(255,167,39,1)_50%,rgba(255,183,77,1)_100%)] overflow-hidden">
        <img
          className="absolute top-[127px] left-[59px] w-[621px] h-[621px]"
          alt="Image"
          src="/figmaAssets/image-17.png"
        />

        <div className="relative flex items-start justify-end px-12 py-32 min-h-[819px]">
          <div className="w-[600px] ml-auto">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[48px] mb-8">
              OUR STORY
            </h2>
            <p className="[font-family:'Khmer',Helvetica] font-normal text-black text-xl tracking-[0] leading-[30px] mb-8">
              The Toronto Autonomous Systems Collective (TASC) is a student-run
              design and research team focused on robotics and autonomous
              systems. Founded at Toronto Metropolitan University under the
              Innovation Boost Zone, the organisation is dedicated to providing
              hands-on, experiential learning opportunities that prepare
              students for an evolving technological landscape and for careers
              in engineering, science, and related fields.\
              <br />
              TASC began as a combat-robotics team with the goal of competing in
              events such as BotBrawl Ontario. The team entered its first
              competition at the CNE BotBrawl in September 2024, earning the
              title of Best Rookie. Following this success, TASC reassessed its
              long-term ambition and identified a desire to pursue more complex
              and impactful engineering challenges. This led to a strategic
              pivot from battlebots to planetary rover development.
            </p>
            <Link href="/projects">
              <Button className="h-[51px] px-8 bg-[#0a1f44] hover:bg-[#0a1f44]/90 rounded-[20px] [font-family:'Khmer',Helvetica] font-normal text-neutral-50 text-xl">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative px-12 py-24">
        <div className="absolute top-0 left-[38px] w-[1361px] h-[361px] bg-neutral-50 rounded-[20px]" />
        <div className="relative grid grid-cols-4 gap-8 max-w-[1400px] mx-auto">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="w-[300px] h-[300px] rounded-[150px] bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center"
            >
              <CardContent className="p-0 flex items-center justify-center">
                <p className="w-[252px] [font-family:'Inter',Helvetica] font-bold text-white text-[28px] text-center tracking-[0] leading-[48px]">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative px-12 py-24">
        <div className="max-w-[1158px] mx-auto">
          <h2 className="text-[#1a1a1a] text-center [font-family:'Inter',Helvetica] font-bold text-5xl tracking-[0] leading-[48px] mb-24">
            OUR JOURNEY
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 w-1.5 h-full bg-[#0a1f44] -translate-x-1/2" />

            <div className="space-y-32">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 top-[18px] w-[30px] h-[30px] bg-[#0a1f44] rounded-[15px] -translate-x-1/2" />

                  {event.side === "right" ? (
                    <div className="flex items-start justify-end gap-16">
                      <div className="w-1/2" />
                      <div className="w-1/2 flex flex-col items-start gap-6">
                        <Card className="w-[289px] h-[68px] rounded-xl bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center">
                          <CardContent className="p-0 flex items-center justify-center">
                            <p className="[font-family:'Inter',Helvetica] font-bold text-white text-[28px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                              {event.year}
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="w-[504px] rounded-[20px] border-4 border-[#0a1f44] bg-white">
                          <CardContent className="p-8">
                            <h3 className="[font-family:'Khmer',Helvetica] font-normal text-black text-[28px] text-center tracking-[0] leading-[30px] mb-4">
                              {event.title}
                            </h3>
                            <p className="[font-family:'Khmer',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[30px]">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-start gap-16">
                      <div className="w-1/2 flex flex-col items-end gap-6">
                        <Card className="w-[289px] h-[68px] rounded-xl bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center">
                          <CardContent className="p-0 flex items-center justify-center">
                            <p className="[font-family:'Inter',Helvetica] font-bold text-white text-[28px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                              {event.year}
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="w-[504px] rounded-[20px] border-4 border-[#0a1f44] bg-white">
                          <CardContent className="p-8">
                            <h3 className="[font-family:'Khmer',Helvetica] font-normal text-black text-[28px] text-center tracking-[0] leading-[30px] mb-4">
                              {event.title}
                            </h3>
                            <p className="[font-family:'Khmer',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[30px]">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="w-1/2" />
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
