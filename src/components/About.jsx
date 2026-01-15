import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-kicker">Hakkımızda</span>
                        <h2 className="section-title" style={{ marginBottom: '2rem' }}>
                            Mekânlara Ruh, <br />Yaşama Değer Katıyoruz.
                        </h2>
                        <p style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Elia Mimarlık Dekorasyon olarak, Lüleburgaz ve Trakya bölgesinde estetik, fonksiyonel ve sürdürülebilir yaşam alanları tasarlıyoruz.
                        </p>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                            Her proje bizim için yeni bir hikaye. Müşterilerimizin hayallerini mimari disiplin ve teknik mükemmellikle harmanlıyor; tasarım sürecinden anahtar teslime kadar titizlikle çalışıyoruz. Modern çizgilerimiz ve premium malzeme anlayışımızla bölgede fark yaratıyoruz.
                        </p>
                        <div style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: '1.5rem' }}>
                            <p style={{ fontStyle: 'italic', fontWeight: '500' }}>
                                "Mimarlık sadece bina yapmak değil, yaşam biçimi kurgulamaktır."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <img
                            src="/logo.jpg"
                            alt="Elia Mimarlık Logo"
                            style={{ width: '100%', height: '500px', objectFit: 'contain' }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: '-2rem',
                            left: '-2rem',
                            background: 'white',
                            padding: '2rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-accent)' }}>3+</span>
                            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Yıllık Deneyim</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
