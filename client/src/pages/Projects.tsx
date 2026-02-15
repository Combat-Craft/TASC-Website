import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    year: "2025",
    name: "Asimov Rover",
    description: "Our first rover, for CIRC 2025. Asimov was developed to have a 6 wheel rocker bogie suspension, later optimised for a 4 wheel steering. Powered by a LiFePo4 battery, Asimov is controlled by Jetson Orin Nano. The rover also has a 6 DoF arm that is capable of grabbing, holding and carrying up to 7 kilograms. The rover has 2 normal cameras and one infrared camera. Asimov is capable of scanning and translating Russian and Chinese texts as well as deciphering Aruco codes, and the infrared camera allows for navigation at night.",
    features: [
      "4 Wheel steering",
      "6-DoF arm",
      "LiFePo4 battery",
      "Jetson Orin Nano",
      "Normal + infrared cameras",
    ],
    image: "/figmaAssets/Rover_1.png",
  },
  {
    year: "2024",
    name: "Napoleon Battlebot",
    description: "Napoleon is a 30lb sumo battlebot that was developed for Botbrawl. In its debut, Napoleon was awarded best rookie at the CNE. The bot was constructed out of GLARE, a composite of aluminium and carbon. It is powered by a 4s LiPo battery and controlled by the F-Si6 radio controller. The bot runs on 2 brushless DC motors and is maneuvered by differential steering.",
    features: [
      "2 Brushless DC motors",
      "Differential steering",
      "F-Si6 radio controller",
      "4s LiPo battery",
      "GLARE composite frame",
    ],
    image: "/figmaAssets/Rover_2.png",
  },
];

export const Projects = () => {
  return (
    <div className="bg-white w-full">
      <Navigation />

      <section className="px-6 md:px-12 py-8 md:py-16">
        {projects.map((project, index) => (
          <div key={index} className="mb-16 md:mb-24">
            <div className="flex justify-start mb-6">
              <Card className="w-[200px] md:w-[289px] h-[50px] rounded-xl bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center">
                <CardContent className="p-0 flex items-center justify-center">
                  <p className="[font-family:'Poppins'] font-bold text-white text-[28px] md:text-[30px] text-center">
                    {project.year}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-neutral-50 rounded-[20px] p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left column: Image */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <div className="rounded-[20px] w-full md:w-[450px] h-[250px] md:h-[450px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right column: Description and Features */}
              <div className="flex-1">
                <h2 className="[font-family:'Poppins'] font-bold text-[28px] md:text-[48px] text-black mb-4 text-center md:text-left">{project.name}</h2>
                <p className="[font-family:'BeVietnam'] font-normal text-black text-[18px] md:text-[20px] tracking-[0] leading-[24px] md:leading-[30px] mb-6 md:mb-8 text-center md:text-left">
                  {project.description}
                </p>

                <div className="mt-6 md:mt-8">
                  <h3 className="[font-family:'Poppins'] text-black font-bold text-[28px] md:text-[30px] mb-4 md:mb-6 text-center md:text-left">Key Features</h3>
                  <ul className="space-y-3 md:space-y-4">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 md:gap-4 justify-center md:justify-start">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-[#ff9800] rounded-full flex-shrink-0" />
                        <span className="[font-family:'BeVietnam'] font-normal text-black text-[18px] md:text-[20px] tracking-[0] leading-[20px] md:leading-[30px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};
