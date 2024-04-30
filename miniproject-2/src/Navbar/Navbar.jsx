import './Navbar.css'
import naviconLogo from './../assets/navicon.png'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <img src={naviconLogo} alt="Logotipo" />
            <h1>Find me RECIPE!</h1>
        </nav>
    )
}
export default Navbar