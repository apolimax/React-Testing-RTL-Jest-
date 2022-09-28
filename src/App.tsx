import "./App.css";
import MuiMode from "./components/mui/MuiMode";
import { AppProviders } from "./providers/app-providers";

function App() {
  return (
    <AppProviders>
      <MuiMode />
    </AppProviders>
  );
}

export default App;
