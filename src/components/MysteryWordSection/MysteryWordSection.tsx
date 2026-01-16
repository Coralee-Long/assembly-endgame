import { convertStringToArray } from "../utils";

export type MysteryWordProps = {
    word: string,
}

export const MysteryWordSection = ({word}: MysteryWordProps) => {
    const letters = convertStringToArray(word);

    return (
        <section className="mystery-word-section">
            {letters.map((letter, index) => (
                <span key={index} className="letter-block">{letter}</span>
            ))}
        </section>
    )
}