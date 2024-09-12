export default function Card({ data }) {
    return (
        <>
            {
                // função map com parâmetro chave (index) para identificação
                data.map((skill, index) => (
                    <div className="skill-card"
                        key={index}
                        style={{
                            color: skill.color
                        }}>
                        <h3>Habilidade: {skill.titulo}</h3>
                        <p>Nível: {skill.nivel}</p>
                        <p>Tempo de XP: {skill.tempoxp}</p>
                    </div> 
                ))
            }
        </>
    )
}


