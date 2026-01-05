import { Link } from "wouter";

export const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] text-white py-8 px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-start">
          <div>
            <img
              className="w-[72px] h-[57px] mb-4"
              alt="TASC Logo"
              src="/figmaAssets/logo-enhanced-1.png"
            />
            <p className="[font-family:'Poppins'] font-bold text-white text-[20px] tracking-[0]">
              Toronto Autonomous Systems Collective
            </p>
            <p className="[font-family:'BeVietnam'] text-white text-[15px] tracking-[0]">
              Toronto Metropolitan University
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="[font-family:'Poppins'] font-bold text-white text-[20px] tracking-[0px]">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  href="/"
                  className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[15px] tracking-[0]"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[15px] tracking-[0]"
                >
                  Projects
                </Link>
                <Link
                  href="/events"
                  className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[15px] tracking-[0]"
                >
                  Events
                </Link>
                <Link
                  href="/team"
                  className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[15px] tracking-[0]"
                >
                  Team
                </Link>
              </div>
            </div>
            <div>
              <h4 className="[font-family:'Poppins'] font-bold text-white text-[20px] tracking-[0]">
                Connect
              </h4>
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href="mailto:tmutasc@gmail.com"
                  className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[15px] tracking-[0]"
                >
                  tmutasc@gmail.com
                </a>
                <a
                  href="https://instagram.com/tmu_tasc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff9800] transition-colors [font-family:'BeVietnam'] text-white text-[15px] tracking-[0]"
                >
                  @tmu_tasc
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="[font-family:'Poppins'] border-t border-gray-700 mt-4 pt-4 text-center text-sm text-gray-400">
          <p>
            &copy; 2025 Toronto Autonomous Systems Collective. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
