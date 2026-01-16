export type ListItemProps = {
    name: string,
    backgroundColor: string,
    color: string,
}

export const ListItem = ({
    name,
    backgroundColor,
    color
}:ListItemProps) => {

    return(
        <li className="list-item" key={name} style={{backgroundColor, color}}>
            {name}
        </li>
    )
}