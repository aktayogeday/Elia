import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

const ContactCTA = () => {
    // Removed formData state and handleChange/handleSubmit functions as FormSubmit handles submission directly

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-kicker">İletişim</span>
                    <h2 className="section-title">Projenizi Başlatalım</h2>
                    <p style={{ maxWidth: '500px', opacity: 0.8, marginTop: '1rem' }}>
                        Hayalinizdeki mekan için ilk adımı atın. Formu doldurun, sizi arayalım ve projenizi 15 dakikada netleştirelim.
                    </p>
                </div>

                <div className="contact-form">
                    <form
                        className="form-group"
                        action="https://formsubmit.co/aktayogeday@gmail.com"
                        method="POST"
                    >
                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="Yeni Web Sitesi Başvurusu (Elia Mimarlık)" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        {/* Redirect to thank you page after submit */}
                        <input type="hidden" name="_next" value="http://localhost:7070/thank-you" />

                        <div className="form-group">
                            <label>Ad Soyad</label>
                            <input
                                type="text"
                                name="Name"
                                className="form-input"
                                placeholder="İsim Soyad"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Telefon</label>
                            <input
                                type="tel"
                                name="Phone"
                                className="form-input"
                                placeholder="0555 ..."
                                required
                            />
                        </div>
                        <div className="form-group" style={{ gridColumn: 'span 2' }}>
                            <label>Proje Tipi</label>
                            <select
                                name="ProjectType"
                                className="form-select"
                            >
                                <option>Konut Tasarımı</option>
                                <option>İç Mimarlık</option>
                                <option>Ofis / Ticari</option>
                                <option>Renovasyon</option>
                                <option>Diğer</option>
                            </select>
                        </div>
                        <div className="form-group" style={{ gridColumn: 'span 2' }}>
                            <label>Mesajınız</label>
                            <textarea
                                name="Message"
                                className="form-textarea"
                                placeholder="Projenizden kısaca bahsedin..."
                            ></textarea>
                        </div>
                        <button type="submit" className="btn submit-btn">Teklif Al</button>
                    </form>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
                        <h3>Hızlı İletişim</h3>
                        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>Doğrudan görüşmek isterseniz:</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                            <a href="tel:+905422288490" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
                                <Phone color="var(--color-accent)" />
                                <span>0542 228 84 90 <span style={{ fontSize: '0.9rem', opacity: 0.8, marginLeft: '0.5rem' }}>(Barış Sinan)</span></span>
                            </a>
                            <a href="tel:+905412858763" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
                                <Phone color="var(--color-accent)" />
                                <span>0541 285 87 63 <span style={{ fontSize: '0.9rem', opacity: 0.8, marginLeft: '0.5rem' }}>(Kenan Sil)</span></span>
                            </a>
                        </div>
                        <a href="https://wa.me/905422288490" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem' }}>
                            <MessageSquare color="var(--color-accent)" /> WhatsApp'tan Yazın
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
