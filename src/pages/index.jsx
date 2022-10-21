import Accomodation from "../components/Accomodation";
import Casourel from "../components/Casourel";
import Footer from "../components/Footer";
import School from "../components/School";
import Parks from "../components/Parks";
import About from "../components/About";
import News from "../components/News";

import React from 'react'

function Homepage() {
  return (
    <div>
        <Casourel/>
        <About/>
        <News/>
        <Parks/>
        <School/>
        <Accomodation/>
        <Footer/>
    </div>
  )
}

export default Homepage