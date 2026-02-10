import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamCaptains = [
  { name: "Ahmed Tabl", role: "Communications & Controls Lead", image: "/figmaAssets/Ahmed Tabl.png" },
  { name: "Aditya Sajwan", role: "Power & Energy Systems Lead", image: "/figmaAssets/Aditya Sajwan.png" },
];

const teamLeads = [
  // ===== FOUNDER / LEADERSHIP =====
  { name: "Harjeev Kohli", role: "Founder — Business Development Lead", image: "/figmaAssets/Harjeev Kohli.jpg" },

  // ===== LEADS =====
  { name: "Bagalavan Thurairatnam", role: "Drivetrain & Chassis Lead", image: "/figmaAssets/Bagalavan Thurairatnam.png" },
  { name: "Mina Tadros", role: "Autonomous Navigation Lead", image: "/figmaAssets/Mina Tadros.png" },
  { name: "Muntasir Munir", role: "Autonomous Navigation Lead", image: "/figmaAssets/Muntasir Munir.png" },
  { name: "Tim Laurence Andal", role: "Drivetrain & Chassis Lead", image: "/figmaAssets/Tim Laurence Andal.png" },
  { name: "Pranav Amladi", role: "Power & Energy Systems Lead", image: "/figmaAssets/Pranav Amladi.png" },
  { name: "Rida-E Fatima", role: "Communications & Controls Lead", image: "/figmaAssets/Rida-E Fatima.png" },
  { name: "Aashir Ahmed", role: "Arm Dynamics Lead", image: "/figmaAssets/Aashir Ahmed.png" },
  { name: "Ahmad Zaki Momand", role: "Arm Dynamics Lead", image: "/figmaAssets/Ahmad Zaki Momand.png" },
  { name: "Ikkena Agusiegbe", role: "Scientific Analysis Lead", image: "/figmaAssets/Ikkena Agusiegbe.png" },
  { name: "Christian Turjuman", role: "Power & Energy Systems", image: "/figmaAssets/Christian Turjuman.png" },

  // ===== ADVISORS =====
  { name: "Umar Shabbir", role: "Advisor — Aerospace Engineering", image: "/figmaAssets/Umar Shabbir.png" },
  { name: "Tabitha Grant", role: "Advisor — Engineering Innovation & Entrepreneurship", image: "/figmaAssets/Tabitha Grant.png" },
  { name: "Antonia Hoffman", role: "Advisor — Aerospace Engineering PhD Candidate", image: "/figmaAssets/Antonia Hoffman.png" },

  // ===== IBZ =====
  { name: "Ashu Syal", role: "Advisor - Director, Innovation Boost Zone (IBZ)", image: "/figmaAssets/Ashu Syal.png" },
];

const subteams = [
  {
    name: "Autonomous Navigation",
    description: "AutoNav aims to deliver a robust autonomous navigation platform by leveraging the full capabilities of the ROS2 Nav2 framework. The project integrates multi-camera vision, advanced computer vision techniques, and inertial measurement data to enhance real-time localization and situational awareness. By combining visual perception with calibrated GPS heading, AutoNav provides precise, reliable, and intelligent movement for the rover across dynamic environments.",
    image: "/figmaAssets/Autonomous_Navigation.png",
  },
  {
    name: "Communication and Controls",
    description: "The Communications & Controls subteam manages the rover's networking, arm control, and drive control, using ROS 2 to ensure reliable communication across all systems. Our current work includes implementing ros2_control for the arm and drivetrain, developing forward and inverse kinematics for precise manipulation, and exploring innovative features like LLM-assisted control and vision-based hand tracking.",
    image: "/figmaAssets/Communications_Controls.png",
  },
  {
    name: "Arm Dynamics",
    description: "Arm Dynamics is a sub-team focused on designing and building the robotic arm for this years' rover! Our goal is to create a reliable, versatile and lightweight arm capable of performing key tasks during the CIRC 2026 competition. With dexterity capable of accomplishing such tasks as object handling, maneuvering, and lifting objects of up to 3kgs.",
    image: "/figmaAssets/Arm_Dynamics.png",
  },
  {
    name: "Power and Energy Systems",
    description: "Focusing on building a custom 19v and 5v step down converter pcb to power our rover's main MCU and science module MCU. We are also Implementing a modular battery design and separate BMS to save weight on rover.",
    image: "/figmaAssets/Power_Energy_Systems.png",
  },
  {
    name: "Business Development",
    description: "We manage the team's finances and sponsorships, ensuring that our members have the funds and resources available to undertake ambitious projects. We are also responsible for marketing, driving more attention to our projects through our website, LinkedIn and Instagram as higher visibility leads to more opportunities for members and sponsors alike.",
    image: "/figmaAssets/image-9.png",
  },
  {
    name: "Scientific Analysis",
    description: "The Science subTeam develops the rover's mechanisms for soil collection, storage, and analysis while also producing the final mission report at competition. We design contamination-free soil sampling methods and standardized preparation procedures. We select and design onboard tests such as pH, conductivity, and organic matter indicators in order to make conclusions about collected soil samples, interpreting results in the context of site geology and habitability.",
    image: "/figmaAssets/Scientific_Analysis.png",
  },
  {
    name: "Drivetrain and Chassis",
    description: "We are responsible for the design, assembly, and testing of the rover's suspension system, chassis structure, and wheel assemblies. Our work follows an iterative process of research, proposal, critique cycle to ensure continuous improvement as we prepare for competition at CIRC. We use SolidWorks for CAD and create rapid 3D printed prototypes to test our subsystems and assembly.",
    image: "/figmaAssets/Drivetrain_Chassis.jpg",
  },
];

const TeamMemberCard = ({ name, role, image }: { name: string; role: string; image: string }) => {
  // Extract special designations (Founder, Advisor, Director)
  let designation = "";
  let displayRole = role;
  
  if (role.startsWith("Founder")) {
    designation = "Founder";
    displayRole = role.replace("Founder — ", "").trim();
  } else if (role.startsWith("Advisor")) {
    designation = "Advisor";
    displayRole = role.replace("Advisor — ", "").trim();
  }

  return (
    <Card className="w-full md:w-[250px] rounded-[20px] bg-neutral-50 border-0 relative">
      {designation && (
        <div className="absolute top-4 right-4 bg-[#0a1f44] text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
          {designation}
        </div>
      )}
      <CardContent className="p-6 text-center">
        <div className="w-[200px] h-[200px] mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="bg-gray-200 rounded-[20px] py-4 px-6">
          <p className="[font-family:'BeVietnam'] font-bold text-black text-[18px] md:text-[20px] tracking-[0] leading-[30px]">{name}</p>
          <p className="[font-family:'BeVietnam'] font-normal text-black text-[14px] md:text-[15px] tracking-[0] leading-[30px]">{displayRole}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export const Team = () => {
  return (
    <div className="bg-white w-full">
      <Navigation />

      <section className="px-6 md:px-12 py-8 md:py-16">
        <h1 className="[font-family:'Poppins'] font-bold text-[36px] md:text-[48px] text-black text-center mb-4">
          OUR TEAM
        </h1>

        <div className="w-full md:w-[1140px] rounded-[20px] pt-8 pb-16 px-6 md:px-12 mb-16 mx-auto" style={{
          backgroundImage: "linear-gradient(126deg, rgba(255, 152, 0, 1) 2%, rgba(255, 167, 39, 1) 60%, rgba(255, 183, 77, 1) 117%)"
        }}>
          <h2 className="[font-family:'Poppins'] font-bold text-[24px] md:text-[30px] text-black text-center mb-8">
            Team Captains
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {teamCaptains.map((captain, index) => (
              <Card key={index} className="w-full md:w-[470px] rounded-[20px] bg-neutral-50 border-0">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-[250px] md:w-[317px] h-[250px] md:h-[317px] mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={captain.image} alt={captain.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-gray-200 rounded-[20px] py-4 px-6">
                    <p className="[font-family:'BeVietnam'] font-bold text-black text-[18px] md:text-[20px] tracking-[0] leading-[30px]">{captain.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1300px] mx-auto mb-24 justify-items-center">
          {teamLeads.map((member, index) => (
            <TeamMemberCard key={index} name={member.name} role={member.role} image={member.image} />
          ))}
        </div>

        <h2 className="[font-family:'Poppins'] font-bold text-[36px] md:text-[48px] text-black text-center mb-12">
          OUR SUBTEAMS
        </h2>

        <div className="space-y-8 max-w-[1100px] mx-auto">
          {subteams.map((subteam, index) => (
            <Card key={index} className="rounded-[20px] bg-neutral-50 border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 md:p-8">
                  <h3 className="[font-family:'Poppins'] font-bold text-[24px] md:text-[30px] text-black text-center md:text-left mb-6">{subteam.name}</h3>
                </div>
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-6 md:px-8 pb-6 md:pb-8">
                  {/* Image - Square */}
                  <div className="w-full md:w-[350px] h-[350px] flex-shrink-0 rounded-[20px] overflow-hidden bg-gray-200">
                    <img src={subteam.image} alt={subteam.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Text */}
                  <div className="flex-1 flex flex-col justify-center h-full md:h-[350px]">
                    <div className="bg-[#ff9800] rounded-[20px] p-6 md:p-8 h-full flex flex-col justify-center">
                      <p className="[font-family:'BeVietnam'] font-normal text-black text-[16px] md:text-[20px] tracking-[0] leading-[24px] md:leading-[30px]">
                        {subteam.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="relative py-8 md:py-24"
        style={{
          backgroundImage:
            "linear-gradient(126deg, rgba(255, 152, 0, 1) 2%, rgba(255, 167, 39, 1) 60%, rgba(255, 183, 77, 1) 117%)",
        }}
      >
        <div className="px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
          <div className="flex-1">
            <h2 className="[font-family:'Poppins'] font-bold text-[36px] md:text-[48px] text-black text-center md:text-left mb-4">
              JOIN OUR TEAM
            </h2>
            <div className="md:hidden w-full h-[300px] rounded-[20px] overflow-hidden flex items-center justify-center mb-8">
              <img
                src="/figmaAssets/Join Our Team.jpg"
                alt="Team photo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="[font-family:'BeVietnam'] font-normal text-black text-[16px] md:text-[20px] tracking-[0] leading-[24px] md:leading-[30px] text-center md:text-left mb-8">
              TASC welcomes students from all disciplines who are eager to
              learn, build, and push the boundaries of robotics and autonomous
              systems. Whether you're interested in mechanical design, embedded
              systems, software development, AI, manufacturing, business
              operations, or project management, there is a place for you on the
              team.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="https://linktr.ee/TASC_TMU?utm_source=linktree_profile_share&ltsid=a3b1dac8-9f24-474d-b0f9-b974b3d522b2">
                <Button className="h-[45px] md:h-[51px] px-8 bg-[#0a1f44] hover:bg-[#0a1f44]/90 rounded-[20px] text-[14px] md:text-[16px] text-white">
                  Apply Now
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:block w-[709px] h-[525px] rounded-[20px] overflow-hidden flex items-center justify-center">
            <img
              src="/figmaAssets/Join Our Team.jpg"
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
