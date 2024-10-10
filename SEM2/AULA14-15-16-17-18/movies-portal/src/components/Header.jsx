// Link de navegação principal
import { NavLink } from 'react-router-dom'
import Login from './Login'
import { useState } from 'react'

export default function Header(){

    const [isLogged, setIsLogged] = useState(false)
    const handleLogin = () => {
        setIsLogged(!isLogged)
    }

    return(
        <>
            <header className='flex bg-red-900 text-white justify-between px-5 h-14 items-center'>
                <div>
                    <h1 className='font-bold'>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className='flex gap-5'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/movies'>Filmes</NavLink></li>
                        <li><NavLink to='/genre'>Gêneros</NavLink></li>
                        <li><NavLink to='/contato'>Contato</NavLink></li>
                        { isLogged && <li><NavLink to='/settings'>Configurações</NavLink></li> }
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin} />
            </header>
        </>
    )
}