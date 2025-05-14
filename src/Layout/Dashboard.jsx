import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero from '../Pages/Hero'
import ProductCards from '../Pages/ProductCard'
import InquiryBox from '../Components/Inquiry'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Hero />


      <ProductCards />
      <InquiryBox/>

      <Footer />
      
    </div>
  )
}

export default Dashboard;