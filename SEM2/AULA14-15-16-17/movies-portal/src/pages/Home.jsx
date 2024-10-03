import CardContainer from "../components/CardContainer";
// Importação de arquivo json de filmes
import movies from '../data/movies.json'
import MovieCard from '../components/MovieCard.jsx'

export default function Home(){
    return (
        <div className="flex flex-row">
            <CardContainer titulo='Filmes antigos'>
                {
                    movies
                        .filter(filme => filme.ano_lancamento < 2000)
                        .map(filme => (
                            // Spread operator (trazendo todas as informações de movies.json)
                            <MovieCard key={filme.id} {...filme} />
                        ))
                }
            </CardContainer>
            <CardContainer titulo='Melhor avaliados'>
                {
                    movies
                        .filter(filme => filme.avaliacao > 8)
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme} />
                        ))
                }
            </CardContainer>
        </div>
    )
}


