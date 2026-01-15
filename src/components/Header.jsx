import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-inner">
                <div className="logo" style={{ flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
                    <img src="/logo.jpg" alt="Elia Mimarlık" style={{ height: '50px', objectFit: 'contain' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <span className="brand-name" style={{ fontSize: '1.25rem' }}>Elia Mimarlık</span>
                        <span className="brand-suffix" style={{ fontSize: '0.7rem' }}>Dekorasyon</span>
                    </div>
                </div>

                <nav className={`desktop-nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <a href="#services" className="nav-link">Hizmetler</a>
                    <a href="#projects" className="nav-link">Projeler</a>
                    <a href="#process" className="nav-link">Süreç</a>
                    <a href="#about" className="nav-link">Hakkımızda</a>
                    <a href="#contact" className="nav-link">İletişim</a>

                    <div className="mobile-only-actions">
                        <a href="#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>Teklif Al</a>
                    </div>
                </nav>

                <div className="header-actions">
                    <a href="tel:+905412858763" className="phone-link">
                        <Phone size={20} />
                        <span className="phone-text">Bizi Arayın</span>
                    </a>
                    <a href="#contact" className="btn btn-primary d-none-mobile" style={{ textDecoration: 'none' }}>Teklif Al</a>
                    <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
