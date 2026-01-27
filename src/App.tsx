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
    const [currentWord, _setCurrentWord] = useState("pineapple");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const addLetterAsGuess = (letter: string) => {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
            prevLetters : [...prevLetters, letter]
        )
    };

    return (
        <div className="App">
            <div className="app-wrapper">
                <GameHeader/>
                <StatusSection status="You win!" text="Well done! 🎉"/>
                <LanguagesSection/>
                <MysteryWordSection currentWord={currentWord}/>
                <KeyboardSection onLetterClick={addLetterAsGuess} guessedLetters={guessedLetters} currentWord={currentWord}/>
                <FooterSection/>
            </div>
        </div>
    );
}

export default App;
