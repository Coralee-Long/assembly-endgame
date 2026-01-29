import { convertStringToArray } from "../utils";

export type MysteryWordProps = {
    currentWord: string,
    guessedLetters: string[]
}

// Create logic to display only letters of the current word when user guesses a letter



export const MysteryWordSection = ({currentWord, guessedLetters}: MysteryWordProps) => {
    const letters = convertStringToArray(currentWord);

    console.log(guessedLetters)



    return (
        <section className="mystery-word-section">
            {letters.map((letter, index) => (
                <span key={index} className="letter-block">{letter.toUpperCase()}</span>
            ))}
        </section>
    )
}