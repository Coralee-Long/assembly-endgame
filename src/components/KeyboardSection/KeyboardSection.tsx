import { clsx } from 'clsx';
import { convertStringToArray } from "../utils";

export type KeyboardProps = {
    onLetterClick: (letter: string) => void;
    guessedLetters: string[];
    currentWord: string;
}

export const KeyboardSection = ({onLetterClick,guessedLetters,currentWord}:KeyboardProps) => {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const keyboardLetters = convertStringToArray(alphabet);
    const currentWordAsLetters = convertStringToArray(currentWord);


    return (
        <section className="keyboard-section">
            {keyboardLetters.map((letter) => {
                const isGuessed = guessedLetters.includes(letter);
                const isCorrect = currentWordAsLetters.includes(letter);

                return (
                    <button
                        key={letter}
                        type="button"
                        onClick={() => onLetterClick(letter)}
                        disabled={isGuessed}
                        className={clsx("keyboard-letter-btn", {
                            correct: isGuessed && isCorrect,
                            incorrect: isGuessed && !isCorrect,
                        })}
                    >
                        {letter.toUpperCase()}
                    </button>
                );
            })}
        </section>
    );
};
