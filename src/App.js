import Header from "./components/Header";
import SectionHero from "./components/SectionHero";
import SectionFeatures from "./components/SectionFeatures";
import SectionDownload from "./components/SectionDownload";
import SectionFaq from "./components/SectionFaq";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionFeatures />
        <SectionDownload />
        <SectionFaq />
      </main>
    </>
  );
}

export default App;
