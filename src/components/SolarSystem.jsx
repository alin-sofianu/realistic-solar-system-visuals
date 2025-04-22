import React, { useEffect } from "react";
import Planet from "./Planet";

import mercuryImg from "../assets/mercury.png";
import venusImg from "../assets/venus.png";
import earthImg from "../assets/earth.png";
import marsImg from "../assets/mars.png";
import jupiterImg from "../assets/jupiter.png";
import saturnImg from "../assets/saturn.png";
import uranusImg from "../assets/uranus.png";
import neptuneImg from "../assets/neptune.png";
import sunImg from "../assets/sun.png";

import { useSolarSystem } from "../contexts/SolarSystemContext";

const ORBIT_SPEED_FACTOR = 1;
const SPIN_SPEED_FACTOR = 1 / 20;

const PLANETS_CONFIG = {
  // mercury: {
  //   image: mercuryImg,
  //   orbitDuration: 88 / ORBIT_SPEED_FACTOR, // 88 Earth days
  //   spinDuration: 58.6 / SPIN_SPEED_FACTOR, // 58.6 Earth days
  //   orbitSize: "10vmin",
  //   distanceFromSun: 57.9, // million km
  //   planetSize: 0.383,
  // },
  // venus: {
  //   image: venusImg,
  //   orbitDuration: 225 / ORBIT_SPEED_FACTOR, // 225 Earth days
  //   spinDuration: 243 / SPIN_SPEED_FACTOR, // 243 Earth days (retrograde rotation)
  //   orbitSize: "18vmin",
  //   distanceFromSun: 108.2, // million km
  //   planetSize: 0.949,
  // },
  earth: {
    image: earthImg,
    orbitDuration: 365 / ORBIT_SPEED_FACTOR, // 365 Earth days
    spinDuration: 10 / SPIN_SPEED_FACTOR, // 1 Earth day (24 hours)
    orbitSize: "25vmin",
    distanceFromSun: 149.6, // million km
    planetSize: 1,
  },
  // mars: {
  //   image: marsImg,
  //   orbitDuration: 687 / ORBIT_SPEED_FACTOR, // 687 Earth days
  //   spinDuration: 1.03 / SPIN_SPEED_FACTOR, // 24h 37m
  //   orbitSize: "38vmin",
  //   distanceFromSun: 227.9, // million km
  //   planetSize: 0.532,
  // },
  // jupiter: {
  //   image: jupiterImg,
  //   orbitDuration: 4333 / ORBIT_SPEED_FACTOR, // 11.86 Earth years
  //   spinDuration: 0.41 / SPIN_SPEED_FACTOR, // 9h 55m
  //   orbitSize: "43vmin",
  //   distanceFromSun: 778.5, // million km
  //   planetSize: 11.209,
  // },
  // saturn: {
  //   image: saturnImg,
  //   orbitDuration: 10759 / ORBIT_SPEED_FACTOR, // 29.46 Earth years
  //   spinDuration: 0.45 / SPIN_SPEED_FACTOR, // 10h 33m
  //   orbitSize: "52vmin",
  //   distanceFromSun: 1434.0, // million km
  //   planetSize: 9.449,
  // },
  // uranus: {
  //   image: uranusImg,
  //   orbitDuration: 30687 / ORBIT_SPEED_FACTOR, // 84.01 Earth years
  //   spinDuration: 0.72 / SPIN_SPEED_FACTOR, // 17h 14m
  //   orbitSize: "63vmin",
  //   distanceFromSun: 2871.0, // million km
  //   planetSize: 4.007,
  // },
  // neptune: {
  //   image: neptuneImg,
  //   orbitDuration: 60190 / ORBIT_SPEED_FACTOR, // 164.79 Earth years
  //   spinDuration: 0.67 / SPIN_SPEED_FACTOR, // 16h 6m
  //   orbitSize: "70vmin",
  //   distanceFromSun: 4495.0, // million km
  //   planetSize: 3.883,
  // },
};

function SolarSystem() {
  const { speedFactor, isPlaying } = useSolarSystem();

  useEffect(() => {
    const background = document.getElementById("bg");
    if (!background) return;

    const fragment = document.createDocumentFragment();

    const createDot = ({ x, y, size, html, className }) => {
      const dot = document.createElement("div");

      if (html) dot.innerHTML = html;
      if (className) dot.classList.add(className);

      dot.style.position = "absolute";
      dot.style.left = x;
      dot.style.top = y;
      dot.style.width = size;
      dot.style.height = size;
      if (!html) dot.style.backgroundColor = "white";

      return dot;
    };

    const getRandomPosition = () => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
    });

    const getBiasedX = () => {
      const biased = Math.random();
      return (
        (Math.random() < 0.3 ? Math.pow(biased, 4) : 1 - Math.pow(biased, 4)) *
          100 +
        "%"
      );
    };

    for (let i = 0; i < 100; i++) {
      const { x, y } = getRandomPosition();
      fragment.appendChild(createDot({ x, y, size: "1px" }));
    }

    for (let i = 0; i < 100; i++) {
      const { x, y } = getRandomPosition();
      fragment.appendChild(createDot({ x, y, size: "2px" }));
    }

    for (let i = 0; i < 20; i++) {
      const x = getBiasedX();
      const y = Math.random() * 100 + "%";
      const svgHTML =
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="#F4C171"/></svg>';

      fragment.appendChild(
        createDot({
          x,
          y,
          size: "2px",
          html: svgHTML,
          className: "animate-pulse",
        })
      );
    }

    background.appendChild(fragment);
  }, []);

  return (
    <div
      id="bg"
      className="animate relative z-auto w-full h-[100vh] overflow-hidden bg-black flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        {/* Sun at the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            className="relative w-20 h-20 animate-sun"
            src={sunImg}
            alt="Sun"
          />
        </div>

        <div
          className="relative"
          style={{
            height: "100vh",
            width: "100vw",
            overflow: "auto",
            transform: "scale(1.3)",
            transformOrigin: "center",
          }}
        >
          {/* Planets */}
          {Object.entries(PLANETS_CONFIG).map(([name, config]) => (
            <div
              key={name}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                height: config.orbitSize,
                width: config.orbitSize,
                border: "1px solid rgba(234, 227, 181, 0.2)",
                borderRadius: "50%",
              }}
            >
              <div
                className="absolute animate-spin"
                style={{
                  height: "100%",
                  width: "100%",
                  animationDuration: `${config.orbitDuration / speedFactor}s`,
                  animationPlayState: isPlaying ? "running" : "paused",
                }}
              >
                <div
                  className="absolute"
                  style={{
                    right: "0",
                    top: "50%",
                    transform: "translateX(50%)",
                  }}
                >
                  <Planet
                    image={config.image}
                    spinDuration={config.spinDuration}
                    planetSize={config.planetSize}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
