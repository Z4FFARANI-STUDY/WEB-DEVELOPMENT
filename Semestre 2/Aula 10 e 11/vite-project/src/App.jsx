import Header from "./componentes/Header.jsx"
import { Outlet } from 'react-router-dom'
import Footer from "./componentes/Footer.jsx"

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App


