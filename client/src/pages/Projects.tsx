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
    imagePlaceholder: true,
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
    imagePlaceholder: true,
  },
];

export const Projects = () => {
  return (
    <div className="bg-white w-full min-w-[1440px]">
      <Navigation />

      <section className="px-12 py-16">
        {projects.map((project, index) => (
          <div key={index} className="mb-24">
            <div className="flex gap-8 items-start">
              <div className="flex-1">
                <Card className="w-[289px] h-[68px] rounded-xl bg-[#0a1f44] border-0 shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] flex items-center justify-center mb-6">
                  <CardContent className="p-0 flex items-center justify-center">
                    <p className="font-bold text-white text-[28px] text-center">
                      {project.year}
                    </p>
                  </CardContent>
                </Card>

                <div className="bg-neutral-50 rounded-[20px] p-8 relative">
                  <h2 className="font-bold text-5xl text-black mb-4">{project.name}</h2>
                  <p className="text-xl text-black leading-[30px] mb-8 max-w-[516px]">
                    {project.description}
                  </p>

                  <div className="bg-gray-200 rounded-[20px] h-[400px] flex items-center justify-center">
                    <p className="text-gray-500 text-xl">Image placeholder - Add your image here</p>
                  </div>
                </div>
              </div>

              <div className="w-[400px] pt-32">
                <h3 className="font-bold text-2xl mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {project.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-[#ff9800] rounded-full" />
                      <span className="text-[28px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};
