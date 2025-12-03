import React from "react";

const Achievements = () => {
  return (
    <div style={{ backgroundColor: "#191A23", color: "white", borderRadius: "30px", padding: "70px" }}>

    <div className="row align-items-center">
  
     
      <div className="col">
        <p>
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
        </p>
        <a style={{color:'#B9FF66 ' ,textDecoration:"none"}} href="#learn">Learn more</a><i style={{color:"#B9FF66"}} class="fa-solid fa-share"></i>
      </div>
  
 
      <div className="col-auto d-none d-md-flex">
        <div
          style={{
            borderLeft: "1px solid #fff",
            height: "80px",
            opacity: 0.6
          }}
        />
      </div>
  
      
      <div className="col">
        <p>
          For a B2B software company, we developed an SEO strategy that
          resulted in a first page ranking for key keywords and a 200%
          increase in organic traffic.
        </p>
        <a style={{color:'#B9FF66 ' ,textDecoration:"none"}} href="#learn">Learn more</a><i style={{color:"#B9FF66"}} class="fa-solid fa-share"></i>
      </div>
  
  
      <div className="col-auto d-none d-md-flex">
        <div
          style={{
            borderLeft: "1px solid #fff",
            height: "80px",
            opacity: 0.6
          }}
        />
      </div>
  
 
      <div className="col">
        <p>
          For a national retail chain, we created a social media marketing
          campaign that increased followers by 25% and generated a 20%
          increase in online sales.
        </p>
        <a style={{color:'#B9FF66 ' ,textDecoration:"none"}} href="#learn">Learn more</a><i style={{color:"#B9FF66"}} class="fa-solid fa-share"></i>
      </div>
  
    </div>
  </div>
  
  );
};

export default Achievements;
