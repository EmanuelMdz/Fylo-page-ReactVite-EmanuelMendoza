import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar1/Navbar";
import { Hero } from "./Components/Hero";
import { Features } from "./Components/Features/Features";
import { Section } from "./Components/Section";
import { Cards } from "./Components/Cards/Cards";
import { SignUp } from "./Components/SignUp/Index";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="fondo">
        <Features></Features>
        <Section></Section>
        <Cards></Cards>
        <SignUp></SignUp>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
