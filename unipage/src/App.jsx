import React from 'react'
import Navbar from './components/common/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/common/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our program' title='what we offer' />
        <Programs />
        <About />
        <Title subTitle='gallery' title='campus photos' />
        <Campus />
        <Title subTitle='testimonials' title='what student says' />
        <Testimonials />
      </div>

    </>
  )
}

export default App