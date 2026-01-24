import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

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

export const Sponsors = () => {
  return (
    <div className="bg-white w-full">
      <Navigation />

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
