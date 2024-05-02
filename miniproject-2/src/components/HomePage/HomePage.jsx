import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { Route, Routes } from "react-router-dom"
import DashboardPage from "../DashboardPage/DashboardPage"

import './HomePage.css'
import AboutPage from "../AboutPage/AboutPage"
import ItemDetailsPage from "../ItemDetailsPage/ItemDetailsPage"
import NotFound from "../NotFound/NotFound"

const HomePage = () => {


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
}

export default HomePage