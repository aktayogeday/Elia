import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "30+", label: "Tamamlanan Proje" },
    { value: "3", label: "Yıl Deneyim" },
    { value: "7+", label: "Devam Eden Şantiye" },
    { value: "%100", label: "Müşteri Memnuniyeti" }
];

const StatsData = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="stat-item"
                        >
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsData;
