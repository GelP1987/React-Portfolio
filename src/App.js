import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
function App() {
  const [categories] = useState([
    {
      name: "About Me",
      description:
        "Learn a little about the developer you'll love having as a part of your team.",
    },
    {
      name: "Projects",
      description:
        "A List of Projects using various coding laguages of the MERN Stack",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div className="App">
      <Header></Header>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Navigation>
      <main>
        {!contactSelected && !resumeSelected ? (
          <>
            <AboutMe currentCategory={setCurrentCategory}></AboutMe>
            <Project></Project>
          </>
        ) : (
          <>
            <Contact></Contact>
            <Resume></Resume>
          </>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
