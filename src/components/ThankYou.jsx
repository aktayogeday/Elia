import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
    return (
        <section className="highlight-section" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-bg)',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'white',
                    padding: '3rem',
                    borderRadius: '4px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    maxWidth: '500px'
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}
                >
                    <CheckCircle size={80} color="var(--color-accent)" strokeWidth={1.5} />
                </motion.div>

                <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    Teşekkürler
                </h2>

                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--color-text-light)',
                    lineHeight: '1.6',
                    marginBottom: '2rem'
                }}>
                    Başvurunuz bize ulaştı. Projenizle ilgili detayları inceleyip size en kısa sürede dönüş yapacağız.
                </p>

                <a href="/" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    Ana Sayfaya Dön
                </a>
            </motion.div>
        </section>
    );
};

export default ThankYou;
