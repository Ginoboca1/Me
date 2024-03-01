import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Proyectos from "./Pages/Proyectos";
import Contacto from "./Pages/Contacto";
import { Footer } from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    red: {
      main: "#e5202b",
    },
    black: {
      main: "#1a1b1b",
    },
    grey: {
      main: "#2B2B2A",
    },
    backgroundGrey: {
      default: "#f5f6f7",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="app">
          <div className="app-container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
