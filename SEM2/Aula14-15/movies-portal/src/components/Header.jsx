// Link de navegação principal
import { NavLink } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <header className='flex bg-red-900 text-white justify-around h-14 items-center'>
                <div>
                    <h1 className='font-bold'>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className='flex gap-5'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/movies'>Filmes</NavLink></li>
                        <li><NavLink to='/genre'>Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}