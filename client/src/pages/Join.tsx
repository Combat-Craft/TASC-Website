import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: "📷",
    label: "tmu_tasc",
    link: "https://instagram.com/tmu_tasc",
    src: "/figmaAssets/Instagram_icon.png",
  },
  {
    icon: "✉️",
    label: "tasc@gmail.com",
    link: "mailto:tasc@gmail.com",
    src: "/figmaAssets/Gmail_Logo_512px.png",
  },
  {
    icon: "💬",
    label: "linkedin",
    link: "https://www.linkedin.com/company/tmutasc/?originalSubdomain=ca",
    src: "/figmaAssets/LinkedIn_icon.png",
  },
];

const sponsors = [
  "Sponsor 1",
  "Sponsor 2",
  "Sponsor 3",
  "Sponsor 4",
  "Sponsor 5",
  "Sponsor 6",
  "Sponsor 7",
  "Sponsor 8",
  "Sponsor 9",
  "Sponsor 10",
  "Sponsor 11",
  "Sponsor 12",
];

export const Join = () => {
  return (
    <div className="bg-white w-full min-w-[1440px]">
      <Navigation />

      <section className="px-12 py-16">
        <h1 className="font-bold text-5xl text-black text-center mb-12">
          CONTACT US
        </h1>

        <div className="flex justify-center gap-12 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="text-center">
              <Card className="w-[289px] h-[289px] rounded-[150px] bg-[#0a1f44] border-0 shadow-lg flex items-center justify-center mb-4">
                <CardContent className="p-0 flex items-center justify-center">
                  <span className="text-5xl">
                    <img
                      className="w-[8rem]"
                      src={method.src}
                      alt={method.label}
                    ></img>
                  </span>
                </CardContent>
              </Card>
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[28px] text-black hover:text-[#ff9800] transition-colors"
              >
                {method.label}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 rounded-[20px] p-8 max-w-[1361px] mx-auto mb-8">
          <div className="h-[425px] rounded-[20px] bg-gray-200 flex items-center justify-center mb-4">
            <p className="text-gray-500 text-xl">
              Map placeholder - 20 Dundas St W Suite 921, Toronto, ON
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Card className="w-[105px] h-[105px] rounded-[150px] bg-[#0a1f44] border-0 shadow-lg flex items-center justify-center">
              <CardContent className="p-0">
                <span className="text-3xl">📍</span>
              </CardContent>
            </Card>
            <p className="font-bold text-[28px] text-black">
              20 Dundas St W Suite 921, Toronto, ON
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative py-24"
        style={{
          backgroundImage:
            "linear-gradient(126deg, rgba(255, 152, 0, 1) 2%, rgba(255, 167, 39, 1) 60%, rgba(255, 183, 77, 1) 117%)",
        }}
      >
        <div className="px-12 flex gap-12 items-start">
          <div className="flex-1">
            <h2 className="font-bold text-5xl text-black mb-8">
              JOIN OUR TEAM
            </h2>
            <p className="text-[25px] text-black leading-[35px] mb-8 max-w-[574px]">
              TASC welcomes students from all disciplines who are eager to
              learn, build, and push the boundaries of robotics and autonomous
              systems. Whether you're interested in mechanical design, embedded
              systems, software development, AI, manufacturing, business
              operations, or project management, there is a place for you on the
              team.
            </p>
            <Button className="h-[51px] px-8 bg-[#0a1f44] hover:bg-[#0a1f44]/90 rounded-[20px] text-xl text-white">
              Apply Now
            </Button>
          </div>
          <div className="w-[709px] h-[525px] rounded-[20px] bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500 text-xl">Team photo placeholder</p>
          </div>
        </div>
      </section>

      <section className="px-12 py-24">
        <h2 className="font-bold text-5xl text-[#1a1a1a] text-center mb-8">
          BECOME A SPONSOR
        </h2>
        <p className="text-xl text-black text-center max-w-[1032px] mx-auto leading-[35px] mb-8">
          TASC partners with organizations that share a passion for innovation,
          education, and the advancement of robotics. Sponsorship directly
          supports the development of our autonomous systems projects—providing
          materials, tooling, competition travel funds, and access to industry
          expertise that help our students design and build at the highest
          level. In return, sponsors receive a wide range of benefits, including
          brand placement on our rover and promotional materials, recognition at
          competitions and events, engagement opportunities with highly
          motivated engineering students, and access to a strong recruitment
          pipeline.
        </p>
        <div className="text-center mb-16">
          <Button className="h-[51px] px-8 bg-[#ff9800] hover:bg-[#ff9800]/90 rounded-[20px] text-xl text-black">
            Sponsorship Package
          </Button>
        </div>

        <h2 className="font-bold text-5xl text-[#1a1a1a] text-center mb-8">
          OUR CURRENT SPONSORS
        </h2>
        <p className="text-xl text-black text-center max-w-[568px] mx-auto leading-[30px] mb-12">
          We would like to thank our sponsors for supporting us. Their impact on
          TASC is directly reflected in our continuous progress.
        </p>

        <div className="bg-neutral-50 rounded-[20px] p-12 max-w-[1361px] mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="w-[260px] h-[260px] mx-auto border-2 border-[#0a1f44] rounded-[20px] flex items-center justify-center bg-white"
              >
                <span className="text-gray-400">{sponsor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
