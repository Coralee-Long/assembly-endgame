import {
    GameHeader,
    KeyboardSection,
    LanguagesSection,
    MysteryWordSection,
    StatusSection,
    FooterSection,
} from "./components";
import { useState } from "react";
import { convertStringToArray } from "./components/utils";

export const App = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentWord, _setCurrentWord] = useState("pineapple");
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const keyboardLetters = convertStringToArray(alphabet);
    const currentWordAsLetters = convertStringToArray(currentWord);

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
                <MysteryWordSection currentWord={currentWord} guessedLetters={guessedLetters}/>
                <KeyboardSection
                    onLetterClick={addLetterAsGuess}
                    guessedLetters={guessedLetters}
                    keyboardLetters={keyboardLetters}
                    currentWordAsLetters={currentWordAsLetters}
                />
                <FooterSection/>
            </div>
        </div>
    );
}
