import logo from "./logo.svg";
import "./styles/variables.css";
import { ToggleColorMode } from "./components/themes/theme";

function App() {
  return (
    <ToggleColorMode>
      <div className="App">
        <header className="App-header"></header>
        <button>test</button>
      </div>
    </ToggleColorMode>
  );
}

export default App;
