import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const address = "20 Dundas St W Suite 921, Toronto, ON";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  address
)}&output=embed`;

const contactMethods = [
  {
    icon: "📷",
    label: "tmu_tasc",
    link: "https://instagram.com/tmu_tasc",
    src: "/figmaAssets/Instagram_icon.png",
  },
  {
    icon: "✉️",
    label: "tmutasc@gmail.com",
    link: "mailto:tmutasc@gmail.com",
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
  { name: "Sponsor 1", image: "/figmaAssets/Sponsor_1.png" },
  { name: "Sponsor 2", image: "/figmaAssets/Sponsor_2.png" },
  { name: "Sponsor 3", image: "/figmaAssets/Sponsor_3.png" },
  { name: "Sponsor 4", image: "/figmaAssets/Sponsor_4.png" },
  { name: "Sponsor 5", image: "/figmaAssets/Sponsor_5.png" },
  { name: "Sponsor 6", image: "/figmaAssets/Sponsor_6.png" },
  { name: "Sponsor 7", image: "/figmaAssets/Sponsor_7.png" },
  { name: "Sponsor 8", image: "/figmaAssets/Sponsor_8.png" },
  { name: "Sponsor 9", image: "/figmaAssets/Sponsor_9.png" },
  { name: "Sponsor 10", image: "/figmaAssets/Sponsor_10.png" },
  { name: "Sponsor 11", image: "/figmaAssets/Sponsor_11.png" },
  { name: "Sponsor 12", image: "/figmaAssets/Sponsor_12.png" },
];

export const Join = () => {
  return (
    <div className="bg-white w-full">
      <Navigation />

      <section className="px-12 py-16">
        <h1 className="[font-family:'Poppins'] font-bold text-[48px] text-black text-center mb-12">
          CONTACT US
        </h1>

        <div className="flex justify-center gap-12 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:opacity-80 transition-opacity"
            >
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
              <span className="[font-family:'Poppins'] font-bold text-[30px] text-black">
                {method.label}
              </span>
            </a>
          ))}
        </div>

        <div className="bg-neutral-50 rounded-[20px] p-8 max-w-[1361px] mx-auto mb-8">
          <div className="h-[425px] rounded-[20px] overflow-hidden mb-4">
            <iframe
              title="TASC Location Map"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex items-center gap-4">
            <Card className="w-[105px] h-[105px] rounded-[150px] bg-[#0a1f44] border-0 shadow-lg flex items-center justify-center">
              <CardContent className="p-0">
                <span className="text-3xl">📍</span>
              </CardContent>
            </Card>
            <p className="[font-family:'Poppins'] font-bold text-[30px] text-black">
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
            <h2 className="[font-family:'Poppins'] font-bold text-[48px] text-black mb-4">
              JOIN OUR TEAM
            </h2>
            <p className="[font-family:'BeVietnam'] font-normal text-black text-[20px] tracking-[0] leading-[30px] mb-8">
              TASC welcomes students from all disciplines who are eager to
              learn, build, and push the boundaries of robotics and autonomous
              systems. Whether you're interested in mechanical design, embedded
              systems, software development, AI, manufacturing, business
              operations, or project management, there is a place for you on the
              team.
            </p>
            <a href="https://linktr.ee/TASC_TMU?utm_source=linktree_profile_share&ltsid=a3b1dac8-9f24-474d-b0f9-b974b3d522b2">
              <Button className="h-[51px] px-8 bg-[#0a1f44] hover:bg-[#0a1f44]/90 rounded-[20px] text-[16px] text-white">
                Apply Now
              </Button>
            </a>
          </div>
          <div className="w-[709px] h-[525px] rounded-[20px] overflow-hidden flex items-center justify-center">
            <img
              src="/figmaAssets/Join Our Team.png"
              alt="Team photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-12 py-24">
        <h2 className="[font-family:'Poppins'] font-bold text-[48px] text-black text-center mb-4">
          BECOME A SPONSOR
        </h2>
        <p className="[font-family:'BeVietnam'] font-normal text-black text-[20px] tracking-[0] leading-[30px] mb-8">
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
          <a href="https://drive.google.com/file/d/1SiBIiehzm1kNSmO35LfurmNbcmCTyEFh/view">
            <Button className="h-[51px] px-8 bg-[#ff9800] hover:bg-[#ff9800]/90 rounded-[20px] font-normal [font-family:'BeVietnam'] text-[20px] text-black">
              Sponsorship Package
            </Button>
          </a>
        </div>

        <h2 className="[font-family:'Poppins'] font-bold text-[48px] text-black text-center mb-8">
          OUR CURRENT SPONSORS
        </h2>
        <p className="[font-family:'BeVietnam'] font-normal text-black text-center text-[20px] tracking-[0] leading-[30px] mb-8">
          We would like to thank our sponsors for supporting us. Their impact on
          TASC is directly reflected in our continuous progress.
        </p>

        <div className="bg-neutral-50 rounded-[20px] p-12 max-w-[1361px] mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="w-[260px] h-[260px] mx-auto border-2 border-[#0a1f44] rounded-[20px] overflow-hidden bg-white"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
