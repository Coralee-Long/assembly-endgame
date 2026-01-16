export type ListItemProps = {
    name: string;
    styles: {
        backgroundColor: string;
        color: string;
    };
};

export const ListItem = ({name, styles}: ListItemProps) => {
    return (
        <span className="list-item" style={styles}>
            {name}
        </span>
    );
};