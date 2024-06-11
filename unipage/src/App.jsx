import React from 'react'
import Navbar from './components/common/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/common/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our program' title='what we offer' name='program' />
        <Programs />
        <About />
        <Title subTitle='gallery' title='campus photos' />
        <Campus />
        <Title subTitle='testimonials' title='what student says' />
        <Testimonials />
        <Title subTitle='concact us' title='get in touch' />
        <Contact />
        <Footer />
      </div>

    </>
  )
}

export default App