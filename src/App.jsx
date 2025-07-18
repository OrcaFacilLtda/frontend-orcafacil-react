import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layout/header/Header'
import HeroSection from './components/section/hero-section/HeroSection';
import ServicesAreas from './components/section/services-areas/ServiceAreas';
import Categories from './components/section/categories/Categories';  
import HowItWorks from './components/section/how-it-works/HowItWorks';
import CustomerReviews from './components/section/customer-reviews/CustumerReviews';
import OurStory from './components/section/our-story/OurStory.jsx';
import ContactUs from './components/section/contact-us/ContactUs.jsx';
import Footer from './components/layout/footer/Footer.jsx';
function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <ServicesAreas></ServicesAreas>
      <Categories></Categories>
      <HowItWorks></HowItWorks>
      <CustomerReviews></CustomerReviews>
      <OurStory></OurStory>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  )
}

export default App
