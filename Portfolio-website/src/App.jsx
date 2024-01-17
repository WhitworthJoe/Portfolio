import Header from "./Components/Header.jsx";
import HomePage from "./Components/HomePage.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx"
import Contact from "./Components/Contact.jsx"
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Footer from "./Components/Footer"
import React, { useState, useEffect } from "react"

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="app">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <HomePage isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;