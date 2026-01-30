"use client";

import { useEffect, useState } from "react";
import { getMultiplePlanetFacts } from "@/lib/getplanetFunFact";

type Props = {
  planet: string;
};

export default function PlanetFactsPanel({ planet }: Props) {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getMultiplePlanetFacts(planet, 3).then((data) => {
      setFacts(data);
      setLoading(false);
    });
  }, [planet]);

  return (
    <section
      className="
        w-full
        px-8 py-16
        bg-gradient-to-b
        from-black
        via-[#050b18]
        to-black
        border-t border-white/10
      "
    >
      <h2 className="text-white text-xl font-semibold mb-8 tracking-wide">
        🪐 Space Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* loading skeleton */}
        {loading &&
          [1, 2, 3].map((i) => (
            <div
              key={i}
              className="
                h-40
                rounded-2xl
                bg-white/10
                animate-pulse
              "
            />
          ))}

        {!loading &&
          facts.map((fact, i) => (
            <div
              key={i}
              className="
                relative
                rounded-2xl
                p-6
                text-white
                text-sm
                leading-relaxed
                bg-white/10
                border border-white/15
                backdrop-blur-xl
                shadow-[0_0_40px_rgba(120,180,255,0.08)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_45px_rgba(120,180,255,0.25)]
                hover:border-white/30
              "
            >
              {/* glow */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-br
                  from-blue-400/10 via-purple-400/10 to-transparent
                  opacity-0
                  hover:opacity-100
                  transition
                  pointer-events-none
                "
              />

              <p className="relative z-10">
                {fact}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
