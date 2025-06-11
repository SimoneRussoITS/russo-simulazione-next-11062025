import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"
import Header from "/components/Header"
import Footer from "/components/Footer"

export const metadata = {
    title: "TechFlow Solutions - Consulenza Tecnologica",
    description: "TechFlow Solutions è una società di consulenza tecnologica specializzata in trasformazione digitale, innovazione e sviluppo software. Offriamo soluzioni personalizzate per aiutare le aziende a ottimizzare i processi e raggiungere i loro obiettivi.",
}

export default function RootLayout({children}) {
    return (
        <html lang="it">
        <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    )
}