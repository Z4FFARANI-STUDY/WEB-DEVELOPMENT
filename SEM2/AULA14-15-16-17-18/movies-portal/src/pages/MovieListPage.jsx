import { useEffect, useState } from "react"

export default function MovieListPage() {

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])

    // Recebe como primeiro parâmetro uma função que será executada assim que o componente renderizar.
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR')
        // Envio de resposta da API como arquivo formato JSON
        .then(res => res.json())
        // Definindo a lista com estado setFilmes, que tem uma lista vazia
        .then(res => setFilmes(res.results))
        // Gerando erro no console
        .catch(erro => console.log(erro))
        // Função de finalização
        .finally(() => console.log("Fim!"))
    // Array de dependências, que serve par atualização de informações
    }, [])

    console.log(filmes)

    const handleSearch = (elemento) => {
        setSearch(elemento.target.value)
    }

    return (
        <>
            <h1>Veja o catálogo completo de filmes</h1>
            <input
                className="text-black"
                type="text"
                name="search"
                id="search" 
                value={search}
                onChange={handleSearch}
            />
                
            <section className="flex flex-row justify-center items-center gap-[20px] px-5">
                {
                    filmes.map(filme => (
                        <>
                            <div className="z-0" key={filme.id}>
                                <div>
                                    <h1>{filme.title}</h1>
                                    <img src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`} alt="" />
                                </div>
                 
                                <img src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`} alt="" />
                            </div>
                        </>
                    ))
                }
            </section>
        </>
    )
}