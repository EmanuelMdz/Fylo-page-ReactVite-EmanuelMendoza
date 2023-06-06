import "./App.css";
import { Navbar } from "./Components/Navbar1/Navbar";
import { Hero } from "./Components/Hero/Index";
import { Features } from "./Components/Features/Features";
import { Section } from "./Components/Section/Index";
import { Cards } from "./Components/Cards/Cards";
import { SignUp } from "./Components/SignUp/Index";
import { Footer } from "./Components/Footer/Index";

function App() {
  return (
    <main>
      <Navbar />
      <Hero></Hero>
      <div className="fondo">
        <Features></Features>
        <Section></Section>
        <Cards />
        <SignUp></SignUp>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
