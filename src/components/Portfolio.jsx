import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Kahve Köşesi & Mutfak',
        caption: 'Ritüeller için ayrılmış bir alan.',
        category: 'Dekorasyon & İç Mimarlık',
        location: 'Lüleburgaz, Kırklareli',
        cover: '/project-1.jpg',
        images: ['/project-1.jpg', '/project-2.jpg']
    },
    {
        id: 2,
        title: 'Küçükkarıştıran Tiny House',
        caption: 'Doğayla iç içe, modern ve kompakt yaşam.',
        category: 'Mimari Tasarım & Uygulama',
        location: 'Küçükkarıştıran, Kırklareli',
        cover: '/tiny-1.jpg',
        images: ['/tiny-1.jpg', '/tiny-2.jpg', '/tiny-3.jpg', '/tiny-4.jpg', '/tiny-5.jpg']
    }
];

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeLightbox = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    return (
        <section id="projects" className="section portfolio-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-kicker">Projeler</span>
                    <h2 className="section-title">İmzamızı Taşıyan İşler</h2>
                </div>

                <div className="portfolio-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            key={project.id}
                            className="project-card"
                            onClick={() => openLightbox(project)}
                        >
                            <img src={project.cover} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-location">{project.location}</p>
                                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>+ {project.images.length} Fotoğraf</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.95)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                color: 'white',
                                zIndex: 2001,
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={40} />
                        </button>

                        <button
                            onClick={prevImage}
                            style={{
                                position: 'absolute',
                                left: '2rem',
                                color: 'white',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            <ChevronLeft size={30} />
                        </button>

                        <motion.img
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            src={selectedProject.images[currentImageIndex]}
                            alt={selectedProject.title}
                            style={{
                                maxHeight: '90vh',
                                maxWidth: '90vw',
                                objectFit: 'contain',
                                borderRadius: '4px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />

                        <button
                            onClick={nextImage}
                            style={{
                                position: 'absolute',
                                right: '2rem',
                                color: 'white',
                                background: 'rgba(255,255,255,0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            <ChevronRight size={30} />
                        </button>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                position: 'absolute',
                                bottom: '4rem',
                                left: '0',
                                width: '100%',
                                textAlign: 'center',
                                color: 'white',
                                padding: '0 2rem',
                                pointerEvents: 'none'
                            }}
                        >
                            <h3 style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1.5rem',
                                fontStyle: 'italic',
                                height: 'auto',
                                marginBottom: '0.5rem',
                                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                            }}>
                                {selectedProject.caption}
                            </h3>
                        </motion.div>

                        {/* Pagination dots */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            display: 'flex',
                            gap: '0.5rem'
                        }}>
                            {selectedProject.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        background: idx === currentImageIndex ? 'white' : 'rgba(255,255,255,0.3)',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
