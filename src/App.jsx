import React from 'react'
import Navbar from '../src/component/Navbar'
import HeroSection from '../src/component/HeroSection'
import FeatureSection  from './component/FeatureSection'
import Workflow from './component/Workflow'
import Pricing from '../src/component/Pricing'
import Testimonials from './component/Testimonials'
import Footer from './component/Footer'


function App() {
  return (
  
   <>
<Navbar/>
<div className="max-w-7xl mx-auto pt-20 px-6">
<HeroSection/>
<FeatureSection/>
<Workflow/>
<Pricing/>
<Testimonials/>
<Footer/>
</div>




   </>
  )
}

export default App


