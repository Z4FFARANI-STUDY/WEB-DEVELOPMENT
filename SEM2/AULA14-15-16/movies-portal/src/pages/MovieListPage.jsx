import { useState } from "react"
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"

export default function MovieListPage() {

    const [search, setSearch] = useState("")

    const handleSearch = (elemento) => {
        setSearch(elemento.target.value)
    }

    // Filtragem de 
    const filmesFiltrados = movies.filter(filme => (
        // Método de inclusão com letras minúsculas
        filme.titulo.toLowerCase().includes(search.toLowerCase())
    ))

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
                
            <section className="flex">
                {
                    // Operação ternária
                    filmesFiltrados.length > 0 ?
                        filmesFiltrados.map(filme => (
                            <MovieCard key={filme.titulo} {...filme} />
                        ))
                    : <p>Não existem filmes.</p>
                }
            </section>
        </>
    )
}