import React, { useEffect, useRef, useState } from "react";

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLImageElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const outlineX = useRef(0);
  const outlineY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prevVisible = { value: isVisible };
    const handleMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX.current}px, ${mouseY.current}px, 0)`;
      }

      // Hide cursor when hovering over elements marked as cursor-hide-zone
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      const overHideZone = !!(el && el.closest && el.closest(".cursor-hide-zone"));
      if (overHideZone !== prevVisible.value) {
        prevVisible.value = overHideZone;
        setIsVisible(!overHideZone);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    let raf = 0;
    const animate = () => {
      outlineX.current += (mouseX.current - outlineX.current) / 8;
      outlineY.current += (mouseY.current - outlineY.current) / 8;
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlineX.current}px, ${outlineY.current}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    // hide default cursor while mounted
    document.documentElement.classList.add("hide-default-cursor");
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.classList.remove("hide-default-cursor");
    };
  }, []);

  return (
    <div aria-hidden className={`custom-cursor ${isVisible ? "visible" : "hidden"}`}>
      <div ref={outlineRef} className="cursor-outline" />
      <img ref={dotRef} src="/figmaAssets/1-removebg-preview-6.png" alt="" className="cursor-dot-image" />
    </div>
  );
};

export default CustomCursor;
