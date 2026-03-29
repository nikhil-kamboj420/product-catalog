import { CompanyDetailsHome } from "../components/CompanyDetailsHome"
import { CompanyHighlights } from "../components/CompanyHighlights"
import { EnquiryHome } from "../components/EnquiryHome"
import { Footer } from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import { OurClients } from "../components/OurClients"
import { ProductRange } from "../components/ProductRange"


export const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <CompanyDetailsHome />
    <ProductRange/>
    <OurClients/>
    <CompanyHighlights/>
    <EnquiryHome/>
    <Footer/>
    </>
  )
}
