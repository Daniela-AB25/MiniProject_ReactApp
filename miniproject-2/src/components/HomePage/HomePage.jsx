<<<<<<< HEAD
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { Route, Routes } from "react-router-dom"
import DashboardPage from "../DashboardPage/DashboardPage"

import './HomePage.css'
import AboutPage from "../AboutPage/AboutPage"
import ItemDetailsPage from "../ItemDetailsPage/ItemDetailsPage"
import NotFound from "../NotFound/NotFound"
=======
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"


import ProductsList from "../ProductsList/ProductsList"

import './HomePage.css'
>>>>>>> 10f1c76d4c87c59a0a60c624f088d1d75febb344

const HomePage = () => {


<<<<<<< HEAD
  return (
    <div className="HomePage">
      <Navbar />
      <main className="main-content">
        <Sidebar />
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/products/:product_id' element={<ItemDetailsPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
=======

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
>>>>>>> 10f1c76d4c87c59a0a60c624f088d1d75febb344
}

export default HomePage