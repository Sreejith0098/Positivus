import React from "react";
import img2 from "../assets/img2.png"
const ProposalSection = () => {
  return (
    <>
      <div style={{backgroundColor:'#f3f3f3'}} className="row mt-5 p-3 rounded-5 ">
        <div className="col pt-5">
          <h2>Let's make things happen</h2>
          <p>
            contact us today to lern more about how our digital marketing
            services can help your business grow and succeed online
          </p>
          <button className="btn text-white btn-dark">Get your free proposal</button>
        </div>
        <div className="col">
            <img style={{height:'250px', paddingLeft:"160px"}} src={img2} alt="img2" />
        </div>
      </div>
    </>
  );
};

export default ProposalSection;
