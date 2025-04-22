import { useSolarSystem } from "../contexts/SolarSystemContext";

const ControlPanel = () => {
  const {
    speedFactor,
    setSpeedFactor,
    isPlaying,
    togglePlay,
    zoomFactor,
    setZoomFactor,
  } = useSolarSystem();

  return (
    <div className="bg-gray-800 p-4 rounded-b-lg shadow-lg border-t border-gray-700">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="speedFactor"
          className="text-gray-50 text-sm font-medium"
        >
          1 second is {speedFactor} Earth days
        </label>

        <div className="flex items-center gap-4">
          <input
            type="range"
            id="speedFactor"
            min="1"
            max="365"
            value={speedFactor}
            onChange={(e) => setSpeedFactor(Number(e.target.value))}
            className="w-48 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />

          <input
            type="number"
            value={speedFactor}
            onChange={(e) => setSpeedFactor(Number(e.target.value))}
            className="w-20 px-2 py-1 text-gray-50 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
            min="1"
            max="100"
          />
        </div>
        <label
          htmlFor="zoomFactor"
          className="text-gray-50 text-sm font-medium"
        >
          Zoom in {zoomFactor}×
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            id="zoomFactor"
            min="1"
            max="10"
            value={zoomFactor}
            onChange={(e) => setZoomFactor(Number(e.target.value))}
            className="w-48 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />

          <input
            type="number"
            value={zoomFactor}
            onChange={(e) => setZoomFactor(Number(e.target.value))}
            className="w-20 px-2 py-1 text-gray-50 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
            min="1"
            max="10"
          />
        </div>

        <button
          onClick={togglePlay}
          className="self-start px-4 py-2 bg-cyan-800 hover:bg-cyan-900 hover:cursor-pointer rounded-lg text-gray-50 font-medium flex items-center gap-2 transition-colors"
        >
          {isPlaying ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </>
          )}
        </button>
      </div>
    </div>
  );
};
export default ControlPanel;
