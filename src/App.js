import { Route, Switch, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

//components
import { Main } from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import { Intro } from "./components/Intro";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Intro />

      <ThemeProvider theme={lightTheme}></ThemeProvider>
    </>
  );
}

export default App;
