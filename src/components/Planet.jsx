// Planet.jsx
function Planet({
  image,
  alt = "planet image",
  className = "",
  spinDuration = 20,
  orbitDuration,
  planetSize,
  isPlaying,
}) {
  return (
    <div className={`${className} z-50 `}>
      <img
        className={`rounded-full object-cover animate-spin`}
        style={{
          width: `${10 * planetSize}px`,
          height: `${10 * planetSize}px`,
          animationDirection: "reverse",
          animationDuration: `${spinDuration}s`,
          animationPlayState: isPlaying ? "running" : "paused",
        }}
        src={image}
        alt={`Planet ${image}`}
      />
    </div>
  );
}

export default Planet;
