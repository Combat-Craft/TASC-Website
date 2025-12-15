import { Link, useLocation } from "wouter";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "EVENTS", href: "/events" },
  { label: "TEAM", href: "/team" },
  { label: "JOIN & CONNECT", href: "/join" },
];

export const Navigation = () => {
  const [location] = useLocation();

  return (
    <nav className="flex items-center justify-between px-12 py-6">
      <Link href="/">
        <img
          className="w-[72px] h-[57px] cursor-pointer"
          alt="TASC Logo"
          src="/figmaAssets/logo-enhanced-1.png"
        />
      </Link>
      <div className="flex items-center gap-6">
        {navigationItems.map((item, index) => {
          const isActive = location === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center justify-center px-4 py-2 font-normal text-black text-2xl text-center tracking-[0] leading-[normal] hover:opacity-70 transition-opacity ${
                isActive ? "border-2 border-[#ff9800] rounded-[20px]" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
