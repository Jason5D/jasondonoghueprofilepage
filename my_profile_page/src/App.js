import { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import AboutMe from "./AboutMe.js";
import Skills from "./Skills.js";
import Hobbies from "./Hobbies.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import Render from "./Render.js";
import Studyosaurus from "./Studyosaurus.js";
import WiseWalletKitchen from "./WiseWalletKitchen.js";
import SportsDay from "./SportsDay.js";
import BookClub from "./BookClub.js";
import PersonalPantry from "./PersonalPantry.js";
import MineCleaner from "./MineCleaner.js";
import Footer from "./Footer.js";

export default function App() {
  const [aboutMe, setAboutMe] = useState(null);
  const [skills, setSkills] = useState(null);
  const [hobbies, setHobbies] = useState(null);
  const [education, setEducation] = useState(null);
  const [experience, setExperience] = useState(null);

  const handleAboutMe = (value) => {
    setAboutMe(value);
    setSkills(null);
    setHobbies(null);
    setEducation(null);
    setExperience(null);
  };

  const handleSkills = (value) => {
    setSkills(value);
    setAboutMe(null);
    setHobbies(null);
    setEducation(null);
    setExperience(null);
  };

  const handleHobbies = (value) => {
    setHobbies(value);
    setAboutMe(null);
    setSkills(null);
    setEducation(null);
    setExperience(null);
  };

  const handleEducation = (value) => {
    setEducation(value);
    setAboutMe(null);
    setSkills(null);
    setHobbies(null);
    setExperience(null);
  };

  const handleExperience = (value) => {
    setExperience(value);
    setAboutMe(null);
    setSkills(null);
    setHobbies(null);
    setEducation(null);
  };

  return (
    <div className="grid-container">
      <Header />
      <AboutMe handleAboutMe={handleAboutMe} />
      <Skills handleSkills={handleSkills} />
      <Hobbies handleHobbies={handleHobbies} />
      <Education handleEducation={handleEducation} />
      <Experience handleExperience={handleExperience} />
      <Render
        aboutMe={aboutMe}
        skills={skills}
        hobbies={hobbies}
        education={education}
        experience={experience}
      />
      <Studyosaurus />
      <WiseWalletKitchen />
      <SportsDay />
      <BookClub />
      <PersonalPantry />
      <MineCleaner />
      <Footer />
    </div>
  );
}
