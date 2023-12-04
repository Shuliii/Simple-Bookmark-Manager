import Header from "./components/Header";
import SectionHero from "./components/SectionHero";
import SectionFeatures from "./components/SectionFeatures";
import SectionDownload from "./components/SectionDownload";
import SectionFaq from "./components/SectionFaq";
import FooterHero from "./components/FooterHero";
import Footer from "./components/Footer";

function App() {
  console.log(window.innerWidth);
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionFeatures />
        <SectionDownload />
        <SectionFaq />
      </main>
      <footer>
        <FooterHero />
        <Footer />
      </footer>
    </>
  );
}

export default App;
