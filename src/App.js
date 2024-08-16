import React from 'react'
import Navbar from './component/Navbar'

import Heroo from './component/Heroo'


import Skillss from './component/Skillss'
import AboutMe from './component/AboutMe'
import MyWork from './component/MyWork'
import Contact from './component/Contact'
import Footer from './component/Footer'
import 'intersection-observer';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Heroo/>
      <Skillss/>
      <AboutMe/>
      <MyWork/>
      <Contact/>
      <Footer/>
    
      
      
    </div>
  )
}

export default App