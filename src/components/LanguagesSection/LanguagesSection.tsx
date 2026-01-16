import { languages } from "./languages"
import  { ListItem } from "./ListItem"

export const LanguagesSection = () => {

    return(
        <section className="languages-section">
            <ul>
                {languages.map((item, index) => (
                    <ListItem
                        name={item.name}
                        backgroundColor={item.backgroundColor}
                        color={item.color}
                    />
                ))}
            </ul>
        </section>
    )
}