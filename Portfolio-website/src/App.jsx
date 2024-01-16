import Header from "./Components/Header.jsx";
import HomePage from "./Components/HomePage.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx"
import React from "react"

function App() {
  return (
    <div className="app">
      <Header />
      <HomePage />
      <About />
      <Projects />
    </div>
  );
}

export default App;