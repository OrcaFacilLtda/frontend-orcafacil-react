import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layout/header/Header'
import HeroSection from './components/section/HeroSection/heroSection'

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
    </>
  )
}

export default App
