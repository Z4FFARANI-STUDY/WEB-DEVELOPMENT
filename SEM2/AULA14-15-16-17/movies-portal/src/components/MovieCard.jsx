import { Link } from 'react-router-dom'

// desestruturação trazendo as props de um json já importado
export default function MovieCard({ id, titulo, imagem_destaque }) {
    return (
        <>
            <div>
                <h2>{titulo}</h2>
                <img src={`/${imagem_destaque}`} alt={titulo} className='w-28 h-36'/>
                <Link to={`/movies/${id}`}>Saiba mais</Link>
            </div>
        </>
    )
}


