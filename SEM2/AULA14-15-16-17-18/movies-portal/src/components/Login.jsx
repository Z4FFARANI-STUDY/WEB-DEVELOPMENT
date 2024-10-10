// Função com props do componente Header

export default function Login({ isLogged, handleLogin }) {
    return (
        <div className="flex gap-4 items-center">
            {/* Condicional sem else */}
            {isLogged && <p>Olá, usuário</p>}
            <button
                // Ternário
                className={`bg-${isLogged ? "white": "red-800"} text-${isLogged ? "red-800": "white"} font-bold px-4 py-1 rounded transition-all duration-200`}
                onClick={handleLogin}>
                {isLogged ? "Logout" : "Login"}
            </button>
        </div>
    )
}


