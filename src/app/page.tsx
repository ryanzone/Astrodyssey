"use client";

import HomeUniverse from "@/components/three/HomeUniverse";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    titleRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-black text-white overflow-x-hidden w-full min-h-screen font-oxanium">

      {/* ================= SUN HERO ================= */}
      <section className="relative w-full min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <HomeUniverse />
        </div>

        <div className="absolute bottom-8 sm:bottom-12 w-full flex justify-center z-10">
          <button
            onClick={scrollToContent}
            className="
              font-oxanium
              px-6 sm:px-8
              py-2.5 sm:py-3
              rounded-full
              border border-white/30
              text-white
              tracking-[0.3em]
              text-sm sm:text-base
              backdrop-blur-xl
              bg-white/10
              hover:bg-white/20
              transition
            "
          >
            EXPLORE ↓
          </button>
        </div>
      </section>

      {/* ================= TITLE ================= */}
      <section
        ref={titleRef}
        className="
          relative
          w-full
          min-h-[100svh]
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-4 sm:px-6
          font-oxanium
        "
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-3xl">
<h1 className="text-[clamp(2.4rem,9vw,4rem)] font-bold">
  AstroOdyssey
</h1>

          <p className="text-gray-300 text-base sm:text-xl leading-relaxed">
            A real-time 3D journey through planets, moons,
            rings and galaxies.
          </p>
        </div>
      </section>

      {/* ================= PLANETS ================= */}
      <section className="relative w-full py-24 sm:py-36 px-4 sm:px-10 font-oxanium">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <h2
          className="
            relative z-10
            text-3xl sm:text-5xl
            text-center
            mb-14 sm:mb-20
            tracking-[0.25em]
            sm:tracking-[0.35em]
            font-semibold
            font-oxanium
          "
        >
          EXPLORE
        </h2>

        <div
          className="
            relative z-10
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-5
            max-w-6xl
            mx-auto
          "
        >
          {[
            { name: "Mercury", path: "/planets/mercury" },
            { name: "Venus", path: "/planets/venus" },
            { name: "Earth", path: "/planets/earth" },
            { name: "Mars", path: "/planets/mars" },
            { name: "Jupiter", path: "/planets/jupiter" },
            { name: "Saturn", path: "/planets/saturn" },
            { name: "Uranus", path: "/planets/uranus" },
            { name: "Neptune", path: "/planets/neptune" },
          ].map((planet) => (
            <Link
              key={planet.name}
              href={planet.path}
              className="
                group
                relative
                h-[70px] sm:h-[85px]
                rounded-xl
                border border-white/20
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                transition
                sm:hover:scale-105
                hover:border-blue-500
                font-oxanium
              "
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-blue-500/10" />

              <p
                className="
                  relative z-10
                  text-[0.7rem] sm:text-sm
                  font-medium
                  tracking-[0.18em]
                  sm:tracking-[0.25em]
                  text-white
                  font-oxanium
                "
              >
                {planet.name.toUpperCase()}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
