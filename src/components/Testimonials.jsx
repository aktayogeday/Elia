import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        text: "Evimize yaptırdığımız TV ünitesi tam hayal ettiğimiz gibi oldu. Barış ve Kenan abinin ilgisi, işçiliği ve detaylara verdiği önem gerçekten fark yaratıyor. Baştan sona çok profesyonel bir süreçti. Gönül rahatlığıyla tavsiye ederim.",
        name: "Buse Özgelen",
        location: "Lüleburgaz"
    },
    {
        text: "Ofisimizin renovasyonu için çalıştık. Hem modern hem de çok kullanışlı bir alan yarattılar. Ekipleri çok profesyonel.",
        name: "Mehmet Demir",
        location: "Kırklareli Merkez"
    },
    {
        text: "3D tasarım aşamasında ne göreceğimizi tam olarak anladık. Uygulama aşamasında hiçbir sürpriz yaşamadık. Teşekkürler Elia.",
        name: "Selin Kaya",
        location: "Çorlu"
    }
];

const Testimonials = () => {
    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-kicker">Referanslar</span>
                    <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
                </div>

                <div style={{ display: 'flex', overflowX: 'auto', paddingBottom: '2rem', gap: '1rem' }}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="quote">"{item.text}"</p>
                            <div className="client-info">
                                <div>
                                    <div className="client-name">{item.name}</div>
                                    <div className="client-location">{item.location}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
