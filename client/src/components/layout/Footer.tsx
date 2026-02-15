import { Link } from "wouter";
import { useIsMobile } from "../../hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";

const address = "20 Dundas St W Suite 921, Toronto, ON";
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  address
)}&output=embed`;

export const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-[#0a1f44] text-white py-8 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {isMobile ? (
          <div className="flex flex-col gap-8">
            {/* Logo and Title */}
            <div className="flex items-center gap-4 flex-col text-center">
              <div className="w-fit bg-[#ffffff] rounded-lg p-2 flex-shrink-0">
                <img
                  className="w-[72px] h-[57px]"
                  alt="TASC Logo"
                  src="/figmaAssets/logo-enhanced-1.png"
                />
              </div>
              <div>
                <p className="[font-family:'Poppins'] font-bold text-white text-[18px] md:text-[20px] tracking-[0]">
                  Toronto Autonomous Systems Collective
                </p>
                <p className="[font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]">
                  Toronto Metropolitan University
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="w-full">
              <div className="h-full flex flex-col">
                <div className="h-[300px] rounded-[20px] overflow-hidden mb-4">
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
                  <Card className="w-[40px] h-[40px] rounded-[150px] bg-[#ff9800] border-0 shadow-lg flex items-center justify-center flex-shrink-0">
                    <CardContent className="p-0 flex items-center justify-center">
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                          fill="#0a1f44"
                        />
                        <path d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#ff9800" />
                      </svg>
                    </CardContent>
                  </Card>
                  <p className="[font-family:'Poppins'] font-bold text-[14px] md:text-[20px] text-white">
                    20 Dundas St W Suite 921, Toronto, ON
                  </p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-8 w-full">
              {/* Quick Links */}
              <div className="text-center">
                <h4 className="[font-family:'Poppins'] font-bold text-white text-[18px] md:text-[20px] tracking-[0px]">
                  Explore
                </h4>
                <div className="flex flex-col gap-2 mt-2">
                  <Link
                    href="/"
                    className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/projects"
                    className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/events"
                    className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]"
                  >
                    Events
                  </Link>
                  <Link
                    href="/team"
                    className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]"
                  >
                    Team
                  </Link>
                  <Link
                    href="/sponsors"
                    className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]"
                  >
                    Sponsors
                  </Link>
                </div>
              </div>

              {/* Connect */}
              <div className="text-center">
                <h4 className="[font-family:'Poppins'] font-bold text-white text-[18px] md:text-[20px] tracking-[0]">
                  Connect
                </h4>
                <div className="flex flex-row gap-4 mt-2 items-center justify-center">
                  <a
                    href="mailto:tmutasc@gmail.com"
                    className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0] flex items-center gap-2"
                  >
                    <img src="/figmaAssets/Gmail_Logo_512px.png" alt="Email" className="w-5 h-5" />
                    Email
                  </a>
                  <a
                    href="https://instagram.com/tmu_tasc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0] flex items-center gap-2"
                  >
                    <img src="/figmaAssets/Instagram_icon.png" alt="Instagram" className="w-5 h-5" />
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/company/tmutasc/?originalSubdomain=ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0] flex items-center gap-2"
                  >
                    <img src="/figmaAssets/LinkedIn_icon.png" alt="LinkedIn" className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-14">
            {/* Map Section - Left Side */}
            <div className="w-1/2 flex-shrink-0">
              <div className="h-full flex flex-col">
                <div className="h-[300px] rounded-[20px] overflow-hidden mb-4">
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
                  <Card className="w-[40px] h-[40px] rounded-[150px] bg-[#ff9800] border-0 shadow-lg flex items-center justify-center flex-shrink-0">
                    <CardContent className="p-0 flex items-center justify-center">
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                          fill="#0a1f44"
                        />
                        <path d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="#ff9800" />
                      </svg>
                    </CardContent>
                  </Card>
                  <p className="[font-family:'Poppins'] font-bold text-[18px] md:text-[20px] text-white">
                    20 Dundas St W Suite 921, Toronto, ON
                  </p>
                </div>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="w-1/2 flex flex-col">
              {/* Logo and Organization Info */}
              <div className="flex items-center gap-4">
                <div className="w-fit bg-[#ffffff] rounded-lg p-2 flex-shrink-0">
                  <img
                    className="w-[72px] h-[57px]"
                    alt="TASC Logo"
                    src="/figmaAssets/logo-enhanced-1.png"
                  />
                </div>
                <div>
                  <p className="[font-family:'Poppins'] font-bold text-white text-[18px] md:text-[20px] tracking-[0]">
                    Toronto Autonomous Systems Collective
                  </p>
                  <p className="[font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]">
                    Toronto Metropolitan University
                  </p>
                </div>
              </div>

              {/* Links Section */}
              <div className="flex gap-20 mt-8">
                {/* Quick Links */}
                <div>
                  <h4 className="[font-family:'Poppins'] font-bold text-white text-[18px] md:text-[20px] tracking-[0px]">
                    Explore
                  </h4>
                  <div className="flex flex-col gap-2 mt-2">
                    <Link
                      href="/"
                      className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]"
                    >
                      Home
                    </Link>
                    <Link
                      href="/projects"
                      className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/events"
                      className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]"
                    >
                      Events
                    </Link>
                    <Link
                      href="/team"
                      className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]"
                    >
                      Team
                    </Link>
                    <Link
                      href="/sponsors"
                      className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0]"
                    >
                      Sponsors
                    </Link>
                  </div>
                </div>

                {/* Connect */}
                <div>
                  <h4 className="[font-family:'Poppins'] font-bold text-white text-[18px] md:text-[20px] tracking-[0]">
                    Connect
                  </h4>
                  <div className="flex flex-col gap-2 mt-2">
                    <a
                      href="mailto:tmutasc@gmail.com"
                      className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0] flex items-center gap-2"
                    >
                      <img src="/figmaAssets/Gmail_Logo_512px.png" alt="Email" className="w-5 h-4" />
                      Email
                    </a>
                    <a
                      href="https://instagram.com/tmu_tasc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0] flex items-center gap-2"
                    >
                      <img src="/figmaAssets/Instagram_icon.png" alt="Instagram" className="w-5 h-5" />
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/tmutasc/?originalSubdomain=ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[14px] md:text-[15px] tracking-[0] flex items-center gap-2"
                    >
                      <img src="/figmaAssets/LinkedIn_icon.png" alt="LinkedIn" className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="[font-family:'Poppins'] border-t border-gray-700 mt-4 pt-4 text-center text-xs md:text-sm text-gray-400">
          <p>
            &copy; 2025 Toronto Autonomous Systems Collective. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
