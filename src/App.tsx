import {
    GameHeader,
    KeyboardSection,
    LanguagesSection,
    MysteryWordSection,
    StatusSection,
    FooterSection,
} from "./components";
function App() {
  return (
    <div className="App">
        <GameHeader />
        <StatusSection />
        <LanguagesSection />
        <MysteryWordSection />
        <KeyboardSection />
        <FooterSection />
    </div>
  );
}

export default App;
