import React from 'react'
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Event';
import Contact from './Contact';
export default function LandingRoute() {
    return (
        <div>
            <Header/>
            <About/>
            <Resume/>
            <Contact/>
            <Footer/>
        </div>
    )
}
