import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsData from './components/StatsData';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
    // Smooth scroll logic could go here or in a wrapper

    return (
        <div className="app-wrapper">
            <Header />
            <main>
                <Hero />
                <StatsData />
                <Services />
                <Portfolio />
                <Process />
                <About />
                <Testimonials />
                <ContactCTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;
