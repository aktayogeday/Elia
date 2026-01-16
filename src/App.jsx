import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
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
    // Intro Animation State
    const [showIntro, setShowIntro] = useState(true);

    // Prevent scrolling while intro is playing
    useEffect(() => {
        if (showIntro) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showIntro]);

    return (
        <div className="app-wrapper">
            <AnimatePresence>
                {showIntro && (
                    <IntroAnimation onComplete={() => setShowIntro(false)} />
                )}
            </AnimatePresence>

            {/* Header hidden initially or fades in can be added later, keeping simple for now */}
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
