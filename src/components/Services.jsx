import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, DraftingCompass, Home, PaintBucket, Hammer, X } from 'lucide-react';

const services = [
    {
        icon: <DraftingCompass size={32} />,
        title: "Mimari Tasarım",
        desc: "Fonksiyonel, estetik ve sürdürülebilir yapı tasarımları. Konseptten ruhsat projesine kadar tüm süreç.",
        details: "Her proje, sizin hayalinizle başlar. Elia Mimarlık olarak, sadece bir yapı değil, yaşam senaryonuzu tasarlıyoruz. Konsept aşamasından ruhsat ve uygulama projelerine kadar, mühendislik hassasiyeti ve sanatsal dokunuşu birleştiriyoruz. Hedefimiz; çevresiyle uyumlu, zamansız ve sizi yansıtan, güvenle yaşayacağınız yapılar inşa etmektir."
    },
    {
        icon: <Home size={32} />,
        title: "İç Mimarlık",
        desc: "Yaşam alanlarınızı kişiselleştiren, ergonomik ve şık iç mekan çözümleri.",
        details: "Mekanlarınızın sadece güzel görünmesi değil, aynı zamanda size hizmet etmesi gerektiğine inanıyoruz. İç mimari projelerimizde, ergonomi ve estetiği 'lüks' kavramıyla harmanlıyoruz. Işık kullanımından mobilya seçimine, akustik konfordan doku uyumuna kadar her detayı, günlük yaşam kalitenizi artırmak ve size özel hissettirmek için kurguluyoruz."
    },
    {
        icon: <PaintBucket size={32} />,
        title: "Dekorasyon",
        desc: "Trend malzemeler ve renk paletleriyle mekanın ruhunu yenileyen dekorasyon uygulamaları.",
        details: "Küçük dokunuşlar, büyük farklar yaratır. Dekorasyon hizmetimizde, mekanın ruhunu ortaya çıkaran renk paletleri, dokular ve tamamlayıcı aksesuarlarla çalışıyoruz. Trendleri takip ederken, modası geçmeyecek klas bir çizgi yakalıyoruz. Size huzur veren, misafirlerinizi ise hayran bırakan, karakterli ve davetkar atmosferler oluşturuyoruz."
    },
    {
        icon: <Hammer size={32} />,
        title: "Anahtar Teslim",
        desc: "Tasarım, uygulama, şantiye takibi ve teslim. Tüm süreci tek elden profesyonelce yönetiyoruz.",
        details: "İnşaat süreci yorucu olabilir; ancak sizin için değil. 'Anahtar Teslim' hizmetimizle, tasarımın ilk çizgisinden son temizliğe kadar tüm sorumluluğu üstleniyoruz. Bütçe yönetimi, malzeme tedariği, ekip koordinasyonu ve kalite kontrol süreçlerini profesyonelce yönetiyoruz. Size kalan tek şey, söz verdiğimiz tarihte kapınızı açıp, kusursuzca tamamlanmış yeni yaşam alanınızın keyfini çıkarmak."
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="section-kicker"
                    >
                        Hizmetlerimiz
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="section-title"
                    >
                        Tasarım Odaklı Çözümler
                    </motion.h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="service-card"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <button
                                className="service-link"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                                onClick={() => setSelectedService(service)}
                            >
                                Detaylı Bilgi <ArrowUpRight size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
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
                            background: 'rgba(0,0,0,0.8)',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem',
                            backdropFilter: 'blur(5px)'
                        }}
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            style={{
                                background: 'var(--color-bg)',
                                padding: '3rem',
                                borderRadius: '8px',
                                maxWidth: '600px',
                                width: '100%',
                                position: 'relative',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--color-text)'
                                }}
                            >
                                <X size={24} />
                            </button>

                            <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                                {selectedService.icon}
                            </div>

                            <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                                {selectedService.title}
                            </h3>

                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: 'var(--color-text)',
                                opacity: 0.9
                            }}>
                                {selectedService.details}
                            </p>

                            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem' }}>
                                <a href="#contact"
                                    onClick={() => setSelectedService(null)}
                                    className="btn btn-primary"
                                    style={{ width: '100%', textAlign: 'center' }}
                                >
                                    Teklif Al
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
