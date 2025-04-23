import { useSolarSystem } from "../contexts/SolarSystemContext";

function Planet({
  image,
  orbitSize,
  spinDuration = 20,
  orbitDuration,
  planetSize,
}) {
  const { speedFactor, isPlaying } = useSolarSystem();
  console.log(speedFactor);
  console.log(orbitSize);
  const getPlanetNameFromPath = (path) => {
    const match = path.match(/\/src\/assets\/(.*)\.png/);
    return match ? match[1] : null;
  };

  const name = getPlanetNameFromPath(image); // Get the planet name

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        height: orbitSize,
        width: orbitSize,
        border: "1px solid rgba(234, 227, 181, 0.2)",
        borderRadius: "50%",
      }}
    >
      <div
        className="absolute"
        style={{
          height: "100%",
          width: "100%",
          animation: `spin ${orbitDuration / speedFactor}s linear infinite`,
          animationPlayState: isPlaying ? "running" : "paused",
        }}
      >
        <div
          className="absolute"
          style={{
            right: "0",
            top: "50%",
            transform: "translateX(50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              animation: `spin ${spinDuration}s linear infinite reverse`,
              animationPlayState: isPlaying ? "running" : "paused",
            }}
          >
            <img
              className="rounded-full object-cover"
              style={{
                width: `${10 * planetSize}px`,
                height: `${10 * planetSize}px`,
              }}
              src={image}
              alt={`Planet ${name}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planet;
