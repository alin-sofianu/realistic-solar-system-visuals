import { createContext, useContext, useState } from "react";

const SolarSystemContext = createContext();

export const SolarSystemProvider = ({ children }) => {
  const [speedFactor, setSpeedFactor] = useState(1);
  const [zoomFactor, setZoomFactor] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const value = {
    speedFactor,
    setSpeedFactor,
    isPlaying,
    setIsPlaying,
    togglePlay,
    zoomFactor,
    setZoomFactor,
  };

  return (
    <SolarSystemContext.Provider value={value}>
      {children}
    </SolarSystemContext.Provider>
  );
};

// Custom hook to use the context
export const useSolarSystem = () => {
  const context = useContext(SolarSystemContext);
  if (context === undefined) {
    throw new Error("useSolarSystem must be used within a SolarSystemProvider");
  }
  return context;
};
