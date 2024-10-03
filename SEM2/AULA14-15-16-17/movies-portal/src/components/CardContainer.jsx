// Componente com props e children
export default function CardContainer({ titulo, children }) {
    return(
        <div>
            <h1>{titulo}</h1>
            <div>
                {children}
            </div>
        </div>
    )
}