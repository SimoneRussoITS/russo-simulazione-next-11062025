"use client"

import Hero from "/components/Hero"
import {useState, useEffect} from "react"

// Mock dati servizi
const services = [
    {
        icon: "☁️",
        title: "Cloud Migration",
        desc: "Sposta i tuoi sistemi nel cloud in modo sicuro, scalabile e senza interruzioni.",
        link: "/"
    },
    {
        icon: "⚡",
        title: "Digital Transformation",
        desc: "Rinnova i processi aziendali con soluzioni digitali su misura.",
        link: "/"
    },
    {
        icon: "🔧",
        title: "DevOps",
        desc: "Automatizza il ciclo di sviluppo e migliora la collaborazione tra team.",
        link: "/"
    },
    {
        icon: "🛡️",
        title: "Cybersecurity",
        desc: "Proteggi i dati e le infrastrutture della tua azienda con tecnologie avanzate.",
        link: "/"
    }
]

// Mock loghi tecnologie
const techLogos = [
    {name: "Microsoft", src: "/logos/microsoft.png"},
    {name: "AWS", src: "/logos/aws.png"},
    {name: "Google Cloud", src: "/logos/google-cloud.png"},
    {name: "Docker", src: "/logos/docker.png"},
    {name: "Kubernetes", src: "/logos/kubernetes.png"}
]

// Mock testimonial
const testimonials = [
    {
        name: "Sara Bianchi",
        role: "IT Manager, Innovatech",
        text: " TechFlow Solutions ha rivoluzionato la nostra infrastruttura cloud. Supporto impeccabile e risultati concreti! ",
    },
    {
        name: "Luca Rossi",
        role: "CEO, DigitalWorks",
        text: " Grazie al loro team DevOps, abbiamo ridotto i tempi di rilascio del 40%. Consigliatissimi. ",
    },
    {
        name: "Elena Verdi",
        role: "CTO, NextGen",
        text: " Competenza e affidabilità: la collaborazione perfetta per la nostra trasformazione digitale. ",
    }
]

// Mock punti di forza
const strengths = [
    {icon: "🚀", label: "Progetti completati", value: "150+"},
    {icon: "🌟", label: "Soddisfazione clienti", value: "98%"},
    {icon: "👨‍💻", label: "Esperti certificati", value: "35+"},
    {icon: "⏱️", label: "Tempo medio di delivery", value: "2 settimane"}
]

export default function Home() {
    // Carousel testimonials
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    // Cambia automaticamente il testimonial attivo ogni 2 secondi
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
    }, [testimonials.length]);

    return (
        <>
            <Hero/>

            {/* Sezione "I Nostri Servizi" */}
            <section className="py-5 bg-light" id="servizi">
                <div className="container">
                    <h2 className="fw-bold text-center mb-5">I Nostri Servizi</h2>
                    <div className="row g-4">
                        {services.map((s, idx) => (
                            <div className="col-12 col-md-6 col-lg-3" key={s.title}>
                                <div className="card card-hover h-100 text-center shadow-sm border-0">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <div className="service-icon mb-3" style={{fontSize: "2.5rem"}}>{s.icon}</div>
                                        <h5 className="card-title fw-bold">{s.title}</h5>
                                        <p className="card-text mb-3">{s.desc}</p>
                                        <a href={s.link} className="btn btn-accent mt-auto">Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sezione "Tecnologie e Partnership" */}
            <section className="py-5" id="tecnologie">
                <div className="container">
                    <h2 className="fw-bold text-center mb-4">Tecnologie & Partnership</h2>
                    <div className="row justify-content-center mb-5 g-3">
                        {techLogos.map((t) => (
                            <div className="col-4 col-md-2 text-center" key={t.name}>
                                <img
                                    src={t.src}
                                    alt={t.name}
                                    className="tech-logo mb-2"
                                    style={{
                                        maxWidth: 100,
                                        maxHeight: 68,
                                        transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
                                        cursor: "pointer"
                                    }}
                                    onMouseOver={e => e.currentTarget.style.transform = "scale(1.12)"}
                                    onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                                />
                                <div className="small text-muted">{t.name}</div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial Carousel */}
                    <div className="py-5"
                         style={{background: "var(--secondary-color, #0D9488)", transition: "background 0.3s"}}>
                        <div className="container">
                            <h2 className="fw-bold text-center text-white mb-5">
                                Cosa dicono i nostri clienti
                            </h2>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-8">
                                    <div
                                        className="text-center p-4 rounded-4 position-relative bg-white shadow fade-in"
                                        key={activeTestimonial}
                                        style={{
                                            minHeight: 260,
                                            border: "none"
                                        }}
                                    >
                                        <div className="mb-3">
                                            <i className="bi bi-person-circle text-secondary"
                                               style={{fontSize: 56}}></i>
                                        </div>
                                        <blockquote
                                            className="mb-4 fs-4 fst-italic lh-base text-dark position-relative">
                                        <span className="text-accent-custom"
                                              style={{fontSize: 36, verticalAlign: "top"}}>&ldquo;</span>
                                            {testimonials[activeTestimonial].text}
                                            <span className="text-accent-custom"
                                                  style={{fontSize: 36, verticalAlign: "bottom"}}>&rdquo;</span>
                                        </blockquote>
                                        <hr className="w-25 mx-auto my-3 opacity-50"/>
                                        <div
                                            className="fw-bold text-primary mb-0">{testimonials[activeTestimonial].name}</div>
                                        <div className="text-muted small">{testimonials[activeTestimonial].role}</div>
                                    </div>
                                    {/* Dot navigation */}
                                    <div className="d-flex justify-content-center gap-2 mt-4">
                                        {testimonials.map((_, idx) => (
                                            <button
                                                key={idx}
                                                className={`rounded-pill border-0 ${idx === activeTestimonial ? "bg-accent-custom" : "bg-light"}`}
                                                style={{
                                                    width: idx === activeTestimonial ? 24 : 12,
                                                    height: 12,
                                                    transition: "all 0.2s",
                                                    opacity: idx === activeTestimonial ? 1 : 0.5,
                                                    outline: idx === activeTestimonial ? "2px solid var(--accent-color, #F59E0B)" : "none"
                                                }}
                                                aria-label={`Vai alla testimonianza ${idx + 1}`}
                                                onClick={() => setActiveTestimonial(idx)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sezione "Perché Sceglierci" */}
            <section className="py-5 bg-light" id="perche-sceglierci">
                <div className="container">
                    <h2 className="fw-bold text-center mb-5">Perché Sceglierci</h2>
                    <div className="row g-4 justify-content-center">
                        {strengths.map((s, idx) => (
                            <div className="col-6 col-md-3 text-center" key={s.label}>
                                <div className="p-4 bg-white rounded shadow stat-card fade-in">
                                    <div className="stat-number mb-2" style={{fontSize: "2.5rem"}}>{s.value}</div>
                                    <div className="stat-label mb-1">{s.label}</div>
                                    <div className="stat-icon"
                                         style={{fontSize: "1.5rem", color: "#0D9488"}}>{s.icon}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
