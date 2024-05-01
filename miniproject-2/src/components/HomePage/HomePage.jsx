import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"


import ProductsList from "../ProductsList/ProductsList"

import './HomePage.css'

const HomePage = () => {



    return (
        <div className="HomePage">
            <Navbar />
            <main className="main-content">
                <Sidebar />

                <ProductsList />

            </main>
            <Footer />
        </div>



    )
}

export default HomePage