import React from "react";
import Header from "../components/Header";
import img1 from "../assets/img1.png";
import Services from "../components/Services";
import Brands from "../components/Brands";
import BoxSection from "../components/BoxSection";
import ProposalSection from "../components/ProposalSection";
import CaseStudies from "../components/CaseStudies";
import AccordianSection from "../components/AccordianSection";
import Team from "../components/Team";
import Reviews from "../components/Reviews";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (

    <div style={{ marginLeft: "60px", marginRight: "70px" }}>
      <Header />
      <div  className="d-flex justify-content-between align-items-center mt-5">
  <div>
    <h1 style={{ fontSize: "80px", lineHeight: "1.1" }}>
      Navigating the <br /> digital landscape <br />
      for success
    </h1>

    <p className="mt-4 mb-4">
      Our digital marketing agency helps businesses <br />
      grow and succeed online through a range of <br />
      services including SEO, PPC, social media marketing, <br />
      and content creation.
    </p>

    <button className="btn btn-dark text-white">
      Book a Consultation
    </button>
  </div>

  <div>
    <img
      src={img1}
      alt="Digital marketing illustration"
      className="img-fluid"
      style={{ width: "660px" }}
    />
  </div>
</div>

      {/* brand-logos */}
      <Brands />
      {/* services-section */}
      <Services />

      {/* box-section */}
      <BoxSection />
      <ProposalSection />
      <div className="d-flex mt-5 ">
        <h2 className="rounded" style={{backgroundColor:'#B9FF66'}} >Case Studies</h2>
        <p className="ps-3">Explore Real Life Examples of Our Proven Digital Marketing Success</p>
      </div>
      <Achievements/>
      <CaseStudies />
    
      <AccordianSection />
      <Team/>
      <Reviews/>
      <button style={{marginLeft:"1180px"}} className="btn ps-4 pe-4 btn-dark color-light">See all team</button>
   

    {/* testimonials-section */}

    <div className="d-flex mt-5">
       <h2 className="rounded" style={{backgroundColor:'#B9FF66'}}>Testimonials</h2>
       <p  className="ps-4">Hear from our satisfied clients : Read Our Testimonials <br />to Mearn More About Our Digital Marketing Services</p>
    </div>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </div>
 
  );
};

export default Home;
