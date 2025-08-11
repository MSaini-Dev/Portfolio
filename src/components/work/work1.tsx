import { useState } from "react";

/**
 * ToggleSwitch Component
 * @param {string} option1 - First label (e.g., "Dark")
 * @param {string} option2 - Second label (e.g., "Light")
 * @param {number} duration - Transition duration in ms
 * @param {function} onToggle - Callback when toggle changes (receives 0 or 1)
 * @param {string} bgColor - Background color for container
 */
export default function ToggleSwitch({
  option1 = "Dark",
  option2 = "Light",
  duration = 300,
  onToggle = () => {},
  bgColor = "bg-white",
}) {
  const [pos, setPos] = useState(0); // 0 = left, 1 = right

  function handleToggle() {
    setPos((prev) => {
      const nextPos = prev === 0 ? 1 : 0;
      onToggle(nextPos);
      return nextPos;
    });
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className={`relative w-fit h-fit py-3 px-4 flex justify-center items-center gap-6 ${bgColor} text-black rounded-md text-4xl cursor-pointer`}
        onClick={handleToggle}
      >
        {/* Toggle cover */}
        <div
          className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] ${bgColor} mix-blend-difference z-20 rounded-sm`}
          style={{
            right: pos === 0 ? "2px" : "50%",
            transition: `right ${duration}ms ease`,
          }}
        ></div>

        {/* Labels */}
        <p>{option1}</p>
        <p>{option2}</p>
      </div>
    </div>
  );
}
