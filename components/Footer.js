export default function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-4 mt-5">
            <div className="container">
                <div className="row gy-4">
                    {/* Branding & Contatti */}
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-2">TechFlow Solutions</h5>
                        <p className="mb-2 small">
                            Via Innovazione 123, 20100 Milano (MI)
                        </p>
                        <p className="mb-2 small">
                            Tel: <a href="tel:+390212345678" className="text-light text-decoration-none">+39 02 1234
                            5678</a>
                        </p>
                        <p className="mb-2 small">
                            Email: <a href="mailto:info@techflowsolutions.it"
                                      className="text-light text-decoration-none">info@techflowsolutions.it</a>
                        </p>
                    </div>

                    {/* Navigazione */}
                    <div className="col-lg-2 col-md-4">
                        <h6 className="fw-bold mb-2">Navigazione</h6>
                        <ul className="list-unstyled small">
                            <li><a href="/" className="text-light text-decoration-none">Chi Siamo</a></li>
                            <li><a href="/" className="text-light text-decoration-none">Servizi</a></li>
                            <li><a href="/" className="text-light text-decoration-none">Tecnologie</a></li>
                            <li><a href="/" className="text-light text-decoration-none">Carriere</a></li>
                            <li><a href="/" className="text-light text-decoration-none">Contatti</a></li>
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div className="col-lg-3 col-md-4">
                        <h6 className="fw-bold mb-2">Seguici</h6>
                        <div className="d-flex gap-3 mb-3">
                            <a href="/" aria-label="LinkedIn" className="fs-4 text-light">🔗</a>
                            <a href="/" aria-label="Twitter" className="fs-4 text-light">🐦</a>
                            <a href="/" aria-label="Instagram" className="fs-4 text-light">📷</a>
                        </div>
                        <form className="d-flex flex-column gap-2" autoComplete="off">
                            <label htmlFor="newsletter" className="small">Iscriviti alla newsletter</label>
                            <div className="d-flex">
                                <input
                                    type="email"
                                    id="newsletter"
                                    className="form-control form-control-sm me-2"
                                    placeholder="La tua email"
                                    aria-label="Email per newsletter"
                                />
                                <button type="submit" className="btn btn-accent btn-sm">Iscriviti</button>
                            </div>
                        </form>
                    </div>

                    {/* Link legali */}
                    <div className="col-lg-3 col-md-4">
                        <h6 className="fw-bold mb-2">Legal</h6>
                        <ul className="list-unstyled small">
                            <li>
                                <a href="/privacy-policy" className="text-light text-decoration-none">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/cookie-policy" className="text-light text-decoration-none">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4 border-secondary"/>

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <p className="mb-0 small">
                        © 2025 TechFlow Solutions. Tutti i diritti riservati.
                    </p>
                    <div className="d-flex gap-3 mt-2 mt-md-0">
                        <a href="/privacy-policy" className="text-light text-decoration-none small">Privacy Policy</a>
                        <a href="/cookie-policy" className="text-light text-decoration-none small">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
