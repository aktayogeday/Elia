import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
    return (
        <motion.div
            className="intro-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100dvh', // Modern mobile viewport unit
                background: '#1a1a1a',
                zIndex: 99999, // Ensure it's on top of everything
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                touchAction: 'none' // Prevent scrolling attempts on overlay
            }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 1, ease: "easeOut" }
                }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <motion.img
                    src="/logo.jpg"
                    alt="Elia Mimarlık"
                    initial={{ width: '150px' }}
                    animate={{
                        width: '150px', // Keep size, just fade out container
                        transition: { duration: 0.8, delay: 1.5 }
                    }}
                    style={{ objectFit: 'contain' }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{
                        color: 'white',
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '0.2em',
                        fontSize: '1.2rem',
                        textTransform: 'uppercase'
                    }}
                >
                    Elia Mimarlık
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default IntroAnimation;
