
const TechSlider = () => {
  const techIcons = [
    "devicon-react-original",
    "devicon-html5-plain",
    "devicon-css3-plain",
    "devicon-javascript-plain",
    "devicon-tailwindcss-original",
    "devicon-framermotion-original",
    "devicon-nodejs-plain",
    "devicon-npm-original-wordmark",
    "devicon-express-original",
    "devicon-mongodb-plain",
    "devicon-mongoose-original",
    "devicon-vscode-plain",
    "devicon-github-original",
    "devicon-git-plain",
  ];

  return (
    <div className="relative max-w-screen overflow-hidden ">
      {/* Add devicons CSS */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <style >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-animation {
          animation: scroll 30s linear infinite;
        }

        .scroll-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
         <div className="absolute inset-0 bg-gradient-to-r from-black via-white/0 to-black z-30"></div>

      <div className=" flex items-center">
        <div className="flex scroll-animation">
          {/* First set of icons */}
          <div className="flex gap-8 py-8">
            {techIcons.map((icon, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300"
              >
                <i
                  className={`${icon} text-6xl h-fit w-fit p-4 text-black bg-gray-300 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                ></i>
              </div>
            ))}
          </div>

          {/* Second set of icons (duplicate for seamless loop) */}
          <div className="flex gap-8 p-8">
            {techIcons.map((icon, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300"
              >
                <i
                  className={` text-6xl h-fit w-fit p-4 text-black bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ${icon}`}
                ></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TechSlider