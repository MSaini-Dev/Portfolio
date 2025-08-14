import React from "react";

interface BackgroundContainerProps {
  bg: string;
  zIndex:string,
  mask?: string;
  className?: string;
  children?: React.ReactNode;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  bg,
  zIndex,
  mask,
  className = "",
  children,
}) => {
  return (
    <div
      className={`min-w-full relative min-h-full  ${className}`}
     
    >
      <div style={{
        position:"absolute",
        inset:"0",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitMaskImage: mask ? `url(${mask})` : undefined,
        WebkitMaskPosition: "center",
        WebkitMaskSize: "cover",
        maskImage: mask ? `url(${mask})` : undefined,
        maskPosition: "center",
        maskSize: "cover",
        zIndex:`${zIndex}`
      }} ></div>
      {children}
    </div>
  );
};

export default BackgroundContainer;
