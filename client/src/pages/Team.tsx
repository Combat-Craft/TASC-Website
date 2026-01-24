import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamCaptains = [
  { name: "Ahmed Tabl", role: "Communications & Controls Lead", image: "/figmaAssets/Ahmed Tabl.png" },
  { name: "Aditya Sajwan", role: "Power & Energy Systems Lead", image: "/figmaAssets/Aditya Sajwan.png" },
];

const teamLeads = [
  { name: "Bagalavan Thurairatnam", role: "Drivetrain & Chassis Lead", image: "/figmaAssets/Bagalavan Thurairatnam.png" },
  { name: "Mina Tadros", role: "Autonomous Navigation Lead", image: "/figmaAssets/Mina Tadros.png" },
  { name: "Umar Shabbir, Advisor", role: "B.Eng Aerospace Engineering", image: "/figmaAssets/Umar Shabbir.png" },
  { name: "Muntasir Munir", role: "Autonomous Navigation Lead", image: "/figmaAssets/Muntasir Munir.png" },
  { name: "Tim Laurence Andal", role: "Drivetrain & Chassis Lead", image: "/figmaAssets/Tim Laurence Andal.png" },
  { name: "Ashu Syal. Advisor", role: "B.Eng Director, Innovation Boost Zone", image: "/figmaAssets/Ashu Syal.png" },
  { name: "Harjeev Kohli, Founder, Advisor", role: "Business Development", image: "/figmaAssets/Harjeev Kohli.png" },
  { name: "Tabitha Grant, Advisor", role: "Manager, Centre for Engineering Innovation and Entrepreneurship", image: "/figmaAssets/Tabitha Grant.png" },
  { name: "Antonia Hoffman, Advisor", role: "PhD Candidate Aerospace Engineering", image: "/figmaAssets/Antonia Hoffman.png" },
  { name: "Rida-E Fatima", role: "Communications and Controls", image: "/figmaAssets/Rida-E Fatima.png" },
  { name: "Pranav Amladi", role: "Power & Energy Systems Lead", image: "/figmaAssets/Pranav Amladi.png" },
  { name: "Aashir Ahmed", role: "Arm Dynamics", image: "/figmaAssets/Aashir Ahmed.png" },
  { name: "Ahmad Zaki Momand", role: "Arm Dynamics", image: "/figmaAssets/Ahmad Zaki Momand.png" },
  { name: "Fahmida Parvage", role: "Scientific Analysis", image: "/figmaAssets/Fahmida Parvage.png" },
  { name: "Ikkena Agusiegbe", role: "Scientific Analysis", image: "/figmaAssets/Ikkena Agusiegbe.png" },
  { name: "Christian Turjuman", role: "Power and Energy Systems", image: "/figmaAssets/Christian Turjuman.png" },
];

const subteams = [
  {
    name: "Autonomous Navigation",
    description: "AutoNav aims to deliver a robust autonomous navigation platform by leveraging the full capabilities of the ROS2 Nav2 framework. The project integrates multi-camera vision, advanced computer vision techniques, and inertial measurement data to enhance real-time localization and situational awareness. By combining visual perception with calibrated GPS heading, AutoNav provides precise, reliable, and intelligent movement for the rover across dynamic environments.",
  },
  {
    name: "Communication and Controls",
    description: "The Communications & Controls subteam manages the rover's networking, arm control, and drive control, using ROS 2 to ensure reliable communication across all systems. Our current work includes implementing ros2_control for the arm and drivetrain, developing forward and inverse kinematics for precise manipulation, and exploring innovative features like LLM-assisted control and vision-based hand tracking.",
  },
  {
    name: "Arm Dynamics",
    description: "Arm Dynamics is a sub-team focused on designing and building the robotic arm for this years' rover! Our goal is to create a reliable, versatile and lightweight arm capable of performing key tasks during the CIRC 2026 competition. With dexterity capable of accomplishing such tasks as object handling, maneuvering, and lifting objects of up to 3kgs.",
  },
  {
    name: "Power and Energy Systems",
    description: "Focusing on building a custom 19v and 5v step down converter pcb to power our rover's main MCU and science module MCU. We are also Implementing a modular battery design and separate BMS to save weight on rover.",
  },
  {
    name: "Business Development",
    description: "We manage the team's finances and sponsorships, ensuring that our members have the funds and resources available to undertake ambitious projects. We are also responsible for marketing, driving more attention to our projects through our website, LinkedIn and Instagram as higher visibility leads to more opportunities for members and sponsors alike.",
  },
  {
    name: "Scientific Analysis",
    description: "The Science subTeam develops the rover's mechanisms for soil collection, storage, and analysis while also producing the final mission report at competition. We design contamination-free soil sampling methods and standardized preparation procedures. We select and design onboard tests such as pH, conductivity, and organic matter indicators in order to make conclusions about collected soil samples, interpreting results in the context of site geology and habitability.",
  },
  {
    name: "Drivetrain and Chassis",
    description: "We are responsible for the design, assembly, and testing of the rover's suspension system, chassis structure, and wheel assemblies. Our work follows an iterative process of research, proposal, critique cycle to ensure continuous improvement as we prepare for competition at CIRC. We use SolidWorks for CAD and create rapid 3D printed prototypes to test our subsystems and assembly.",
  },
];

const TeamMemberCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <Card className="w-[390px] rounded-[20px] bg-neutral-50 border-0">
    <CardContent className="p-6 text-center">
      <div className="w-[258px] h-[258px] mx-auto mb-4 bg-gray-200 border-2 border-[#0a1f44] rounded-full flex items-center justify-center overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="bg-gray-200 rounded-[20px] py-4 px-6">
        <p className="[font-family:'BeVietnam'] font-bold text-black text-[20px] tracking-[0] leading-[30px]">{name}</p>
        <p className="[font-family:'BeVietnam'] font-normal text-black text-[15px] tracking-[0] leading-[30px]">{role}</p>
      </div>
    </CardContent>
  </Card>
);

export const Team = () => {
  return (
    <div className="bg-white w-full">
      <Navigation />

      <section className="px-12 py-16">
        <h1 className="[font-family:'Poppins'] font-bold text-[48px] text-black text-center mb-4">
          OUR TEAM
        </h1>

        <div className="relative rounded-[20px] py-16 px-12 mb-16" style={{
          backgroundImage: "linear-gradient(126deg, rgba(255, 152, 0, 1) 2%, rgba(255, 167, 39, 1) 60%, rgba(255, 183, 77, 1) 117%)"
        }}>
          <h2 className="[font-family:'Poppins'] font-bold text-[30px] text-black text-center mb-8">
            Team Captains
          </h2>
          <div className="flex justify-center gap-16">
            {teamCaptains.map((captain, index) => (
              <Card key={index} className="w-[470px] rounded-[20px] bg-neutral-50 border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-[317px] h-[317px] mx-auto mb-4 bg-gray-200 border-2 border-[#0a1f44] rounded-full flex items-center justify-center overflow-hidden">
                    <img src={captain.image} alt={captain.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-gray-200 rounded-[20px] py-4 px-6">
                    <p className="[font-family:'BeVietnam'] font-bold text-black text-[20px] tracking-[0] leading-[30px]">{captain.name}</p>
                    <p className="[font-family:'BeVietnam'] font-normal text-black text-[15px] tracking-[0] leading-[30px]">{captain.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-[1300px] mx-auto mb-24 justify-items-center">
          {teamLeads.map((member, index) => (
            <TeamMemberCard key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>

        <h2 className="[font-family:'Poppins'] font-bold text-[48px] text-black text-center mb-12">
          OUR SUBTEAMS
        </h2>

        <div className="space-y-8 max-w-[1123px] mx-auto">
          {subteams.map((subteam, index) => (
            <Card key={index} className="rounded-[20px] bg-neutral-50 border-0">
              <CardContent className="p-8">
                <h3 className="[font-family:'Poppins'] font-bold text-[30px] text-black mb-6">{subteam.name}</h3>
                <div className="bg-[#ff9800] rounded-[20px] p-8">
                  <p className="[font-family:'BeVietnam'] font-normal text-black text-[20px] tracking-[0] leading-[30px]">
                    {subteam.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
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

      <Footer />
    </div>
  );
};
