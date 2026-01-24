import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "../../hooks/use-mobile";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "EVENTS", href: "/events" },
  { label: "TEAM", href: "/team" },
  { label: "SPONSORS", href: "/sponsors" },
];

export const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6">
      {/* Mobile Menu Drawer */}
      {isMobile && (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Menu size={28} className="text-black" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            {/* Logo inside drawer */}
            <Link href="/" onClick={() => setIsOpen(false)} className="block mb-6">
              <img
                className="w-[72px] h-[57px] cursor-pointer"
                alt="TASC Logo"
                src="/figmaAssets/logo-enhanced-1.png"
              />
            </Link>

            {/* Navigation items */}
            <div className="flex flex-col gap-4">
              {navigationItems.map((item, index) => {
                const isActive = location === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`[font-family:'Poppins'] block px-4 py-3 font-normal text-black text-[16px] tracking-[0] leading-[normal] hover:bg-gray-100 rounded-lg transition-colors ${
                      isActive ? "border-l-4 border-[#ff9800] bg-orange-50" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      )}

      {/* Logo - desktop only */}
      {!isMobile && (
        <Link href="/">
          <img
            className="w-[72px] h-[57px] cursor-pointer"
            alt="TASC Logo"
            src="/figmaAssets/logo-enhanced-1.png"
          />
        </Link>
      )}

      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="flex items-center gap-6">
          {navigationItems.map((item, index) => {
            const isActive = location === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`[font-family:'Poppins'] flex items-center justify-center px-4 py-0 font-normal text-black text-[20px] text-center tracking-[0] leading-[normal] hover:opacity-70 transition-opacity ${
                  isActive ? "border-2 border-[#ff9800] rounded-[20px]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};
