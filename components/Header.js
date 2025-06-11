"use client"
import {useState} from "react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Chiude il menu quando si clicca su una voce (mobile UX)
    const handleLinkClick = () => setIsMenuOpen(false)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <div className="container">
                <a className="navbar-brand fw-bold fs-3" href="/">
                    <img
                        src="/img/Logo.png"
                        alt="Logo TechFlow Solutions"
                        width="40"
                        height="40"
                        className="d-inline-block align-text-top me-2"
                    />
                    TechFlow Solutions
                </a>

                {/* Hamburger button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navbar"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation links */}
                <div
                    className={`collapse navbar-collapse${isMenuOpen ? " show" : ""}`}
                    id="main-navbar"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={handleLinkClick}>
                                Chi Siamo
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={handleLinkClick}>
                                Servizi
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={handleLinkClick}>
                                Tecnologie
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={handleLinkClick}>
                                Carriere
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={handleLinkClick}>
                                Contatti
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
