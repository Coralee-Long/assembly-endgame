import { languages } from "./languages"
import { ListItem } from "./ListItem"

export const LanguagesSection = () => {

    return (
        <section className="languages-section">
            <span className="list-wrapper">
                {languages.map((item, index) => (
                    <ListItem
                        key={item.name}
                        name={item.name}
                        styles={{
                            backgroundColor: item.backgroundColor,
                            color: item.color,
                        }}
                    />

                ))}
            </span>
        </section>
    )
}