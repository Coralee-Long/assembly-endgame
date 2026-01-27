export const KeyboardSection = () => {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyboardLetters = alphabet.split('');

    return (
        <section className="keyboard-section">
            {keyboardLetters.map((letter, index) => (
                <button key={index} className="keyboard-letter">{letter.toUpperCase()}</button>
            ))}
        </section>
    )
}