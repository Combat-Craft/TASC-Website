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

      <section className="px-12 py-16">
        {projects.map((project, index) => (
          <div key={index} className="mb-24">
            <Card className="w-[289px] h-[68px] rounded-xl bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center mb-6">
              <CardContent className="p-0 flex items-center justify-center">
                <p className="[font-family:'Poppins'] font-bold text-white text-[30px] text-center">
                  {project.year}
                </p>
              </CardContent>
            </Card>

            <div className="bg-neutral-50 rounded-[20px] p-8 flex gap-8">
              {/* Left column: Image */}
              <div className="flex-shrink-0">
                <div className="rounded-[20px] w-[450px] h-[450px] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right column: Description and Features */}
              <div className="flex-1">
                <h2 className="[font-family:'Poppins'] font-bold text-[48px] text-black mb-4">{project.name}</h2>
                <p className="[font-family:'BeVietnam'] font-normal text-black text-[20px] tracking-[0] leading-[30px] mb-8">
                  {project.description}
                </p>

                <div className="mt-8">
                  <h3 className="[font-family:'Poppins'] text-black font-bold text-[30px] mb-6">Key Features</h3>
                  <ul className="space-y-4">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-[#ff9800] rounded-full" />
                        <span className="[font-family:'BeVietnam'] font-normal text-black text-[20px] tracking-[0] leading-[30px]">{feature}</span>
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
