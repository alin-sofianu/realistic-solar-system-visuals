// Planet.jsx
function Planet({
  image,
  alt = "planet image",
  className = "",
  spinDuration = 20,
  planetSize,
}) {
  return (
    <div className={`${className} z-50 `}>
      <img
        className={`rounded-full object-cover`}
        style={{
          width: `${10 * planetSize}px`,
          height: `${10 * planetSize}px`,
          // animationDuration: `${spinDuration}s`,
        }}
        src={image}
        alt={alt}
      />
    </div>
  );
}

export default Planet;
