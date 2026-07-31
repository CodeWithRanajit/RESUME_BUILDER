
import Banner from "../components/home/Banner"
import Feature from "../components/home/Features";
import Hero from "../components/home/Hero";
import Ats from "../components/home/Ats";
import Template from "../components/home/Template";
import Testimonial from "../components/home/Testimonial";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";


const Home = () => {
  return (
    <>
      <Banner />
      <Hero />
      <Feature />
      <Ats />
      <Template />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer/>
    </>
  )
}

export default Home;