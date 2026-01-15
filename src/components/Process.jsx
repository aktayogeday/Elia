import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: '01',
        title: 'Keşif & İhtiyaç',
        desc: 'Mekanı ve sizi anlıyoruz. Beklentilerinizi dinleyip, potansiyeli değerlendiriyoruz.',
        details: 'Her şey doğru sorularla başlar. Mekanınızı ziyaret ederek teknik analizlerimizi (rölöve) yapıyor, ışık yönünden tesisat altyapısına kadar her detayı inceliyoruz. Daha da önemlisi; yaşam alışkanlıklarınızı, zevklerinizi ve bu mekandaki hayallerinizi dinliyoruz. Bu aşama, projenin "sizi yansıtması" için en kritik adımdır.'
    },
    {
        id: '02',
        title: 'Konsept & Moodboard',
        desc: 'Hayalinizdeki atmosferi görselleştiriyor, malzeme ve renk paletini oluşturuyoruz.',
        details: 'Fikirleri somutlaştırma zamanı. Belirlediğimiz stil doğrultusunda renk paletleri, doku örnekleri ve mobilya tarzlarını içeren ilham panoları (moodboard) hazırlıyoruz. Bu aşamada, mekanın ruhunu birlikte şekillendiriyor, size "işte bu!" dedirtecek atmosferi yakalıyoruz.'
    },
    {
        id: '03',
        title: '3D Tasarım',
        desc: 'Projenin bitmiş halini gerçekçi 3D görsellerle sunuyoruz. Sürprizlere yer yok.',
        details: 'Hayallerinizi sanal dünyada gerçeğe dönüştürüyoruz. Hazırladığımız fotogerçekçi 3D renderlar sayesinde, mekanın bittiğinde tam olarak nasıl görüneceğini en ince detayına kadar göreceksiniz. Duvar renginden aydınlatma etkisine kadar her şeye bu aşamada karar veriyor, uygulama sırasında yaşanabilecek belirsizlikleri ortadan kaldırıyoruz.'
    },
    {
        id: '04',
        title: 'Uygulama',
        desc: 'Titiz işçilik ve kaliteli malzeme ile tasarımı gerçeğe dönüştürüyoruz.',
        details: 'Kağıt üzerindeki mükemmelliği sahada da yakalıyoruz. Deneyimli usta kadromuz ve teknik ekibimizle, şantiye sürecini titizlikle yönetiyoruz. Malzeme tedariğinden montaja kadar her aşamada kalite kontrolü yapıyor, iş programına sadık kalarak, tasarımı milimi milimine hayata geçiriyoruz.'
    },
    {
        id: '05',
        title: 'Teslim',
        desc: 'Son kontrolleri yapıp, anahtarınızı teslim ediyoruz. Güle güle oturun.',
        details: 'Ve mutlu son. İnşaat atıklarından arındırılmış, derinlemesine temizliği yapılmış ve tüm fonksiyonları test edilmiş şekilde mekanınızı size teslim ediyoruz. Size sadece valizinizi alıp gelmek ve yeni yaşam alanınızın keyfini sürmek kalıyor.'
    }
];

const Process = () => {
    const [selectedStep, setSelectedStep] = useState(null);

    return (
        <section id="process" className="section process-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-kicker">Süreç</span>
                    <h2 className="section-title">Nasıl Çalışıyoruz?</h2>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="process-step"
                            onClick={() => setSelectedStep(step)}
                            style={{ cursor: 'pointer' }}
                            whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        >
                            <div className="step-number" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                {step.id}
                                <ArrowRight size={20} style={{ opacity: 0.5 }} />
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                            <span style={{ fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: '500', marginTop: '1rem', display: 'block' }}>Detayları Gör</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedStep && (
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
                        onClick={() => setSelectedStep(null)}
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
                                onClick={() => setSelectedStep(null)}
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

                            <div style={{ color: 'var(--color-accent)', fontSize: '4rem', fontFamily: 'var(--font-heading)', opacity: 0.2, lineHeight: 1, marginBottom: '0.5rem' }}>
                                {selectedStep.id}
                            </div>

                            <h3 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                                {selectedStep.title}
                            </h3>

                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: 'var(--color-text)',
                                opacity: 0.9
                            }}>
                                {selectedStep.details}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Process;
