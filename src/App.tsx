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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [word, _setWord] = useState("pineapple");

    return (
        <div className="App">
            <div className="app-wrapper">
                <GameHeader/>
                <StatusSection/>
                <LanguagesSection/>
                <MysteryWordSection word={word}/>
                <KeyboardSection/>
                <FooterSection/>
            </div>
        </div>
    );
}

export default App;
