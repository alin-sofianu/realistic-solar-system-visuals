import "./App.css";
import SolarSystem from "./components/SolarSystem";
import InfoTable from "./components/InfoTable";
import ControlPanel from "./components/ControlPanel";
import Accordion from "./components/Accordion";
import { SolarSystemProvider } from "./contexts/SolarSystemContext";

function App() {
  return (
    <SolarSystemProvider>
      <div>
        <SolarSystem />
        <div>
          <Accordion position={{ x: 26, y: 26 }}>
            <ControlPanel />
          </Accordion>
          {/* <Accordion position={{ x: 16, y: 16 }}>
            <InfoTable />
          </Accordion> */}
        </div>
      </div>
    </SolarSystemProvider>
  );
}

export default App;
