import {
    GameHeader,
    KeyboardSection,
    LanguagesSection,
    MysteryWordSection,
    StatusSection,
    FooterSection,
} from "./components";
import { useState } from "react";

function App() {
    const [word, _setWord] = useState("pineapple");

    return (
        <div className="App">
            <GameHeader/>
            <StatusSection/>
            <LanguagesSection/>
            <MysteryWordSection word={word}/>
            <KeyboardSection/>
            <FooterSection/>
        </div>
    );
}

export default App;
