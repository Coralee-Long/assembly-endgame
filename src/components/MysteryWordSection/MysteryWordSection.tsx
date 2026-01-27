import { convertStringToArray } from "../utils";

export type MysteryWordProps = {
    currentWord: string,
}

export const MysteryWordSection = ({currentWord}: MysteryWordProps) => {
    const letters = convertStringToArray(currentWord);

    return (
        <section className="mystery-word-section">
            {letters.map((letter, index) => (
                <span key={index} className="letter-block">{letter.toUpperCase()}</span>
            ))}
        </section>
    )
}