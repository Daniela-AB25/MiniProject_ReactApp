import reactLogo from './../../assets/react.svg'
import navicon from './../../assets/navicon.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
                <div className='buttons'>
                    <img src={navicon} alt="Navicon" className='navicon' />
<<<<<<< HEAD
                    <h1>IronShop</h1>
=======
                    <h1>Students</h1>
>>>>>>> 10f1c76d4c87c59a0a60c624f088d1d75febb344
                </div>
                <img src={reactLogo} alt="Logotipo" className='logo' />
            </nav>
        </div>
    )
}

export default Navbar