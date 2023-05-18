import "./App.css";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeContextProvider,
  BackDropProvider,
  AlertProvider,
} from "./Helpers/Context";
function App() {
  return (
    <ThemeContextProvider>
      <BackDropProvider>
        <AlertProvider>
          <CssBaseline />
          <div className="App">
            <Provider store={store}>
              <Router />
            </Provider>
          </div>
        </AlertProvider>
      </BackDropProvider>
    </ThemeContextProvider>
  );
}

export default App;
