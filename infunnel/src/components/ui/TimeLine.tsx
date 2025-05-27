"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discovery Call",
    text: "We learn about your brand, goals, and where you're stuck. 15–30 minus.",
  },
  {
    title: "Full Evaluation",
    text: "We evaluate your website speed, UX, SEO, branding, analytics, and competition.",
  },
  {
    title: "Strategic Roadmap",
    text: "You'll get a plan with clear fixes, growth ideas, and a timeline to move forward.",
  },
  {
    title: "Ongoing Support",
    text: "Continuous updates, analytics, and growth-focused insights for your business.",
  },
];

const TimeLine = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    // Animación de la línea vertical
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          height: "100%",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animación individual por cada paso
    stepsRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="relative px-4 py-20 text-black">
      <div
        ref={lineRef}
        className="absolute left-1/2 top-0 w-0.5 bg-gray-300 rounded-full origin-top -translate-x-1/2"
        style={{ height: 0 }}
      />

      <ol className="relative space-y-16 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <li
            key={i}
            ref={(el) => {
              if (el) stepsRef.current[i] = el;
            }}
            className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
          >
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-orange-500 z-10 group-hover:scale-125 transition-transform duration-300" />
              <div>
                <h3 className="text-lg font-bold group-hover:text-orange-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-gray-800 italic">{step.text}</p>
              </div>
            </div>
            <div aria-hidden="true"></div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;
