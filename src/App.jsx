import "./App.css";
import SolarSystem from "./components/SolarSystem";
import InfoTable from "./components/InfoTable";
import ControlPanel from "./components/ControlPanel";
import { SolarSystemProvider } from "./contexts/SolarSystemContext";

function App() {
  return (
    <SolarSystemProvider>
      <div>
        <SolarSystem />
        <div className="flex">
          {/* <InfoTable /> */}
          <ControlPanel />
        </div>
      </div>
    </SolarSystemProvider>
  );
}

export default App;
