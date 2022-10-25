import Accomodation from "../components/Accomodation";
import Hotelfiller from "../components/Hotelfiller";
import Parkfiller from "../components/Parkfiller";
import Casourel from "../components/Casourel";
import Footer from "../components/Footer";
import School from "../components/School";
import Parks from "../components/Parks";
import About from "../components/About";
import News from "../components/News";

import React from 'react'

function Homepage() {
  return (
    <div className="main-home">
        <Casourel/>
        <About/>
        <News/>
        <Parkfiller/>
        <Parks/>
        <School/>
        <Hotelfiller/>
        <Accomodation/>
        <Footer/>
    </div>
  )
}

export default Homepage