export default function Hero() {
    return (
        <section className="hero-section bg-gradient-primary text-white py-5"
                 aria-label="Hero section TechFlow Solutions">
            <div className="container">
                <div className="row align-items-center min-vh-75">
                    <div className="col-lg-6">
                        <header>
                            <h1 className="display-3 fw-bold mb-4">
                                Acceleriamo la tua Trasformazione Digitale
                            </h1>
                            <p className="lead mb-4 fs-4">
                                Soluzioni innovative di consulenza tecnologica per potenziare il tuo business,
                                ottimizzare processi e guidare l’innovazione.
                            </p>
                        </header>
                        <nav aria-label="Hero primary actions" className="d-flex gap-3 flex-wrap mt-4">
                            <a
                                href="/"
                                className="btn btn-accent btn-lg px-4 py-3"
                                aria-label="Richiedi una consulenza personalizzata"
                            >
                                💡 Richiedi Consulenza
                            </a>
                            <a
                                href="/"
                                className="btn btn-outline-light btn-lg px-4 py-3"
                                aria-label="Scopri i nostri servizi"
                            >
                                🔍 Scopri i Servizi
                            </a>
                        </nav>
                    </div>
                    <div className="col-lg-6 text-center">
                        <figure className="hero-card-container" aria-label="Illustrazione trasformazione digitale">
                            <img
                                src="/img/Logo.png?height=500&width=350"
                                alt="Illustrazione di trasformazione digitale"
                                className="img-fluid hero-card"
                                style={{maxWidth: "350px"}}
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}
