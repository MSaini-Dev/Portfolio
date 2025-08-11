import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(SplitText, CustomEase);

export default function SplitTextp() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const emojiRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!headingRef.current || !wrapperRef.current || !emojiRef.current) return;

    // custom ease
    CustomEase.create("new-ease", "0.625, 0.05, 0, 1");

    // create split (lines used for animation, words used to detect hover target)
    const split = new SplitText(headingRef.current, {
      type: "lines, words",
      mask: "lines",
      linesClass: "line",
      wordsClass: "word",
    });

    // animate lines on mount (same as before)
    gsap.fromTo(
      split.lines,
      { yPercent: 110 },
      { yPercent: 0, duration: 0.8, stagger: 0.08, ease: "new-ease" }
    );

    const words = (split.words || []) as HTMLElement[];
    if (words.length === 0) {
      return () => split.revert();
    }

    // pick a single random word element
    const chosen = words[Math.floor(Math.random() * words.length)];

    // mouse handlers
    const handleEnter = () => {
      if (!emojiRef.current || !wrapperRef.current) return;

      const rect = chosen.getBoundingClientRect();
      const parentRect = wrapperRef.current.getBoundingClientRect();

      // center emoji horizontally on the word, place it slightly above the top of the word
      const left = rect.left - parentRect.left + rect.width / 2;
      const top = rect.top - parentRect.top; // top of the word relative to wrapper

      emojiRef.current.textContent = pickEmoji(chosen.textContent || "");
      emojiRef.current.style.left = `${left}px`;
      emojiRef.current.style.top = `${top}px`;
      emojiRef.current.style.opacity = "1";
      // pop-in animation
      gsap.fromTo(
        emojiRef.current,
        { y: -8, scale: 0.8, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.28, ease: "back.out(1.7)" }
      );
    };

    const handleLeave = () => {
      if (!emojiRef.current) return;
      gsap.to(emojiRef.current, {
        opacity: 0,
        duration: 0.18,
        onComplete: () => {
          if (emojiRef.current) emojiRef.current.textContent = "";
        },
      });
    };

    // attach listeners directly to the chosen word
    chosen.addEventListener("mouseenter", handleEnter);
    chosen.addEventListener("mouseleave", handleLeave);

    // cleanup
    return () => {
      chosen.removeEventListener("mouseenter", handleEnter);
      chosen.removeEventListener("mouseleave", handleLeave);
      split.revert();
    };
  }, []);

  return (
    <div style={styles.container} >
      <div ref={wrapperRef} style={{ position: "relative" }}>
     <p 
  ref={headingRef} 
  style={styles.heading } 
  className="text-muted-foreground  mb-4 leading-relaxed"
>
  I'm Mohit Saini, a Jaipur-based MERN Stack Developer with a strong foundation in web development and a Bachelor's degree in Computer Science. I build modern web applications using MongoDB, Express, React, and Node.js
  {/* <br /><br /> */}
  {/* From crafting real-time collaborative tools to developing efficient backend systems, I love turning ideas into functional digital experiences. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects — always learning, always building. Let's create something great together! */}
</p>

        {/* floating emoji (positioned absolutely inside wrapper) */}
        <span ref={emojiRef} style={styles.emoji} aria-hidden />
      </div>
    </div>
  );
}

function pickEmoji(word: string) {
  const lower = (word || "").toLowerCase();
  if (lower.includes("developer")) return "💻";
  if (lower.includes("design")) return "🎨";
  if (lower.includes("web")) return "🌐";
  if (lower.includes("power")) return "⚡";
  if (lower.includes("technologies")) return "🛠️";
  if (lower.includes("journey")) return "⭐";
  return "✨";
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "fit-content",
    background: "transparent",
    padding: "0 1rem",
    fontWeight:"200 !important"
  },
  heading: {
    fontSize: "1.2rem",
    textAlign: "center",
    fontWeight:"200 !important",
    maxWidth: "600px"
    // lineHeight: "1.35",
    // letterSpacing: "0.5px",
    // margin: 0,
    // color: "#ffffff",
  },
  emoji: {
    position: "absolute",
    transform: "translate(-50%, -120%)", // center horizontally and place above the word
    fontSize: "1.8rem",
    pointerEvents: "none",
    opacity: 0,
    zIndex: 9999,
    transition: "opacity 0.18s linear",
    willChange: "transform, opacity",
  },
};
