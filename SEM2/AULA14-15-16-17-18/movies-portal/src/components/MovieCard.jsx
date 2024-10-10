import { Link } from 'react-router-dom'

// desestruturação trazendo as props de um json já importado
export default function MovieCard({ id, titulo, imagem_destaque }) {
    return (
        <>
            <div className='flex flex-col items-center'>
                <h2>{titulo}</h2>
                <img src={`/${imagem_destaque}`} alt={titulo} className='w-28 h-36'/>
                <Link to={`/movies/${id}`} className='bg-red-500 p-2 mt-3 rounded-full px-5 hover:bg-red-900 transition-all duration-200 ease active:scale-90 border-2 border-black'>Saiba mais</Link>
            </div>
        </>
    )
}
