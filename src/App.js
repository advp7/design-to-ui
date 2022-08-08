import "./App.css";
import { themeSettings } from "./theme";
import { ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Main from "./components/main/Main";
import Person from "./components/person/Person";
import Footer from "./components/footer/Footer";
import { Counter } from "./components/counter/Counter";

function App() {
  return (
    <ThemeProvider theme={themeSettings}>
      <Navbar />
      <Main />
      <Person />
      <Footer />
      <Counter />
    </ThemeProvider>
  );
}

export default App;
