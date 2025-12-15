import { Link } from "wouter";

export const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] text-white py-12 px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-start">
          <div>
            <img
              className="w-[72px] h-[57px] mb-4"
              alt="TASC Logo"
              src="/figmaAssets/logo-enhanced-1.png"
            />
            <p className="text-lg">Toronto Autonomous Systems Collective</p>
            <p className="text-sm text-gray-400 mt-2">Toronto Metropolitan University</p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="font-bold text-xl mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link href="/" className="hover:text-[#ff9800] transition-colors">Home</Link>
                <Link href="/projects" className="hover:text-[#ff9800] transition-colors">Projects</Link>
                <Link href="/events" className="hover:text-[#ff9800] transition-colors">Events</Link>
                <Link href="/team" className="hover:text-[#ff9800] transition-colors">Team</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="mailto:tasc@gmail.com" className="hover:text-[#ff9800] transition-colors">tasc@gmail.com</a>
                <a href="https://instagram.com/tmu_tasc" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff9800] transition-colors">@tmu_tasc</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Toronto Autonomous Systems Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
