import { clsx } from 'clsx';

export type KeyboardProps = {
    onLetterClick: (letter: string) => void;
    guessedLetters: string[];
    keyboardLetters: string[];
    currentWordAsLetters: string[];
}

export const KeyboardSection = ({
        onLetterClick,
        guessedLetters,
        keyboardLetters,
        currentWordAsLetters
    }:KeyboardProps) => {

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
                        {isGuessed && isCorrect ? letter.toUpperCase() : null}
                    </button>
                );
            })}
        </section>
    );
};
