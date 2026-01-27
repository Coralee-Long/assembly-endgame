export type StatusProps = {
    status: string;
    text: string;
}

export const StatusSection = ({status, text}: StatusProps) => {
    return (
        <section className="status-section">
            <span className="status-title">{status}</span>
            <span className="status-subtitle">{text}</span>
        </section>
    );
};