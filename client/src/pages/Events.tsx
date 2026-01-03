import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const upcomingEvents: any[] = [];

const pastEvents = [
  {
    name: "CIRC 2025",
    dates: "8th Aug 2025 - 11th Aug 2025",
    location: "Badland Community Facility, Drumheller, AB, Canada",
    description: "The team travelled to Drumheller, Alberta for a 4 day challenge in the desert. We tested our rover against the harsh, simulated Martian environment that challenged our work on multiple frontiers.",
    logo: "/figmaAssets/Logo_CIRC.png",
    images: [
      "/figmaAssets/CIRC_1.JPG",
      "/figmaAssets/CIRC_2.JPG",
      "/figmaAssets/CIRC_3.JPG",
      "/figmaAssets/CIRC_4.JPG",
      "/figmaAssets/CIRC_5.JPG",
    ],
  },
  {
    name: "CNE BotBrawl",
    dates: "21st Aug 2024 - 1st Sep 2024",
    location: "210 Princes' Blvd Etobicoke, ON, Canada",
    description: "The team participated in BotBrawl at the CNE, competing in the 30 lb combat robotics category. We showcased our robot across multiple matches and were awarded \"Best Rookie\" for our strong performance and innovative design.",
    logo: "/figmaAssets/Logo_CNE.png",
    images: [
      "/figmaAssets/CNE_1.JPG",
      "/figmaAssets/CNE_2.JPG",
      "/figmaAssets/CNE_3.JPG",
      "/figmaAssets/CNE_4.JPG",
      "/figmaAssets/CNE_5.JPG",
    ],
  },
];

export const Events = () => {
  return (
    <div className="bg-white w-full">
      <Navigation />

      <section className="px-12 py-16">
        <h1 className="[font-family:'Poppins'] font-bold text-[48px] text-black text-center mb-8">
          UPCOMING EVENTS
        </h1>

        {upcomingEvents.length === 0 ? (
          <Card className="max-w-[1263px] mx-auto rounded-[20px] bg-neutral-50 border-0 shadow-sm">
            <CardContent className="py-12 text-center">
                <p className="[font-family:'Poppins'] font-bold text-[30px] text-black">No Upcoming Events</p>
              </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Upcoming events would go here */}
          </div>
        )}
      </section>

      <section className="px-12 py-16">
        <h2 className="[font-family:'Poppins'] font-bold text-[48px] text-black text-center mb-8">
          PAST EVENTS
        </h2>

        <div className="space-y-8 max-w-[1263px] mx-auto">
          {pastEvents.map((event, index) => (
            <Card key={index} className="rounded-[20px] bg-neutral-50 border-0 shadow-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-[90px] h-[90px] bg-white border-2 border-[#0a1f44] rounded-[20px] flex items-center justify-center overflow-hidden">
                      <img src={event.logo} alt={event.name} className="w-full h-full object-contain p-2" />
                    </div>
                    <h3 className="[font-family:'Poppins'] text-black font-bold text-[48px]">{event.name}</h3>
                  </div>
                  <Card className="w-[400px] h-[50px] rounded-xl bg-[#0a1f44] border-0 shadow-lg flex items-center justify-center">
                    <CardContent className="p-0">
                      <p className="[font-family:'Poppins'] font-bold text-white text-[20px] text-center">
                        {event.dates}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <p className="[font-family:'BeVietnam'] font-normal text-black text-[20px] tracking-[0] leading-[30px] mb-4">
                  {event.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[20px] leading-[30px]">📍</span>
                  <p className="[font-family:'BeVietnam'] font-normal text-black text-[20px] tracking-[0] leading-[30px]">{event.location}</p>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-4">
                  {event.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="w-[260px] h-[260px] bg-white border-2 border-[#0a1f44] rounded-[20px] flex-shrink-0 overflow-hidden"
                    >
                      <img src={image} alt={`${event.name} ${imgIndex + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};
