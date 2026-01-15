import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section className="hero" ref={ref}>
            <motion.div style={{ y, opacity }} className="hero-bg">
                {/* Placeholder for high-res architectural image */}
                <div className="hero-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2600&auto=format&fit=crop"
                    alt="Modern Architecture"
                    className="hero-image"
                />
            </motion.div>

            <div className="container hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-title"
                >
                    Hissinizi Mekâna <br />
                    <span className="serif-italic">Yansıtıyoruz.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-subtitle"
                >
                    Lüleburgaz ve Trakya’da estetik ve konforu birleştiren modern yaşam alanları.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-actions"
                >
                    <a href="#projects" className="btn btn-outline-light" style={{ textDecoration: 'none' }}>
                        Projeleri İncele
                    </a>
                    <a href="#contact" className="btn btn-primary-light" style={{ textDecoration: 'none' }}>
                        Teklif Al <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="mouse"></div>
                <span className="scroll-text">Kaydır</span>
            </motion.div>
        </section>
    );
};

export default Hero;
