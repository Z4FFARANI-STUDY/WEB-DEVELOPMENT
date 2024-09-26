import { useParams } from "react-router-dom"

export default function MovieDetailPage(){

    // Criação de um identificador já desestruturado
    const {id} = useParams()

    return(
        <>
            <h1>Movie Detail Page</h1>
            <p>O id do filme é: {id}</p>
        </>
    )
}


