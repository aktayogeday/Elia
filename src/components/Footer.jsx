import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                            <img src="/logo.jpg" alt="Elia Mimarlık" style={{ height: '60px', objectFit: 'contain' }} />
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.3rem', lineHeight: '1.1' }}>ELIA MIMARLIK</h3>
                                <span style={{ fontSize: '0.75rem', opacity: 0.7, letterSpacing: '0.2em', display: 'block' }}>DEKORASYON</span>
                            </div>
                        </div>
                        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Lüleburgaz ve çevresinde modern, estetik ve fonksiyonel yaşam alanları tasarlıyoruz.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://www.instagram.com/eliadesign.arc/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Hızlı Linkler</h4>
                        <nav className="footer-nav">
                            <a href="#services">Hizmetler</a>
                            <a href="#projects">Projeler</a>
                            <a href="#process">Süreç</a>
                            <a href="#about">Hakkımızda</a>
                        </nav>
                    </div>

                    <div className="footer-col">
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Hizmetler</h4>
                        <nav className="footer-nav">
                            <a href="#">Mimari Tasarım</a>
                            <a href="#">İç Mimarlık</a>
                            <a href="#">Anahtar Teslim</a>
                            <a href="#">Danışmanlık</a>
                        </nav>
                    </div>

                    <div className="footer-col">
                        <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>İletişim</h4>
                        <p>Lüleburgaz, Kırklareli</p>
                        <p>info@eliamimarlik.com</p>
                        <p>0542 228 84 90 (Barış Sinan)</p>
                        <p>0541 285 87 63 (Kenan Sil)</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 Elia Mimarlık Dekorasyon. Tüm hakları saklıdır.</p>
                    <img src="/logo.jpg" alt="Elia Mimarlık" style={{ height: '30px', opacity: 0.8 }} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
