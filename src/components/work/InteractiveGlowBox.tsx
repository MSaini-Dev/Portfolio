// src/components/InteractiveGlowBox.tsx
import React, { useRef } from "react";

interface InteractiveGlowBoxProps {
  backgroundImage: string; // URL or imported image
  className?: string; // Optional custom styles
}

const InteractiveGlowBox: React.FC<InteractiveGlowBoxProps> = ({
  backgroundImage,
  className = "",
}) => {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glowRef.current) return;

    const rect = glowRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowRef.current.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0),rgba(255,255,255,0)26%, rgba(0,0,0) 30%)
    `;
  };

  const handleMouseLeave = () => {
    if (glowRef.current) {
       glowRef.current.style.background = `
      radial-gradient(circle , rgba(255,255,255,0) 0%,rgba(255,255,255,0.2)0%, rgba(0,0,0) 0%)
    `;
    }
  };

  return (
    <div
      className={`relative w-1/2 h-1/2  bg-transparent  ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Mouse interaction area */}
      <div
        className="absolute inset-[-250px] bg-transparent z-20  rounded-2xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      ></div>

      {/* Glow effect overlay */}
      <div
        ref={glowRef}
        className="absolute inset-[-1px] bg-black rounded-2xl flex justify-center items-center mix-blend-multiply font-semibold text-3xl"
        style={{ transition: "background 0.5s linear" }}
      >
        Hover
      </div>
    </div>
  );
};

export default InteractiveGlowBox;
