import React from 'react'
import "../components/BoxSection.css"
import illustration1 from "../assets/illustration1.png";
import illustration2 from "../assets/illustration2.png"
import illustration3 from "../assets/illustration3.png"
import illustration4 from "../assets/illustration4.png"
import illustration5 from "../assets/illustration5.png"
import illustration6 from "../assets/illustration6.png"
const BoxSection = () => {
  return (
    <>
 {/* first-row */}
      <div  className="d-flex justify-content-between box-section mb-4">
        <div style={{backgroundColor:'#f3f3f3'}} className="border box border-dark d-flex">
          <div>
            <h2 style={{backgroundColor:'white',marginTop:'30px'}}>Search engine optimization</h2>
<div style={{marginTop:"190px"}}>
            <i  class="fa-solid fa-share"></i>  <a style={{color:'black' ,textDecoration:"none"}} href="#learn">Learn more</a>
            </div>
            </div>
          <div>
            <img style={{ width:"400px", height:'300px'}} src={illustration1} alt="" />
          </div>
        </div>
        <div style={{backgroundColor:'#B9FF66'}} className="border box border-dark d-flex">
          <div>
            <h2 style={{backgroundColor:"white",marginTop:'30px'}}>Pay-per-click <br />advertising</h2>

            <div style={{marginTop:"180px"}}>
            <i  class="fa-solid fa-share"></i>  <a style={{color:'black' ,textDecoration:"none"}} href="#learn">Learn more</a>
            </div>            </div>
          <div>
            <img style={{ width:"400px", height:'300px'}} src={illustration2} alt="" />
          </div>
        </div>
      </div>


  {/* second-row */}
      <div className="d-flex justify-content-between box-section mb-4 ">
        <div style={{backgroundColor:'black'}} className="border   box border-dark d-flex">
          <div>
            <h2 style={{backgroundColor:'white',marginTop:'30px'}} >Social media marketing</h2>

            <div style={{marginTop:"180px"}}>
            <i  class="fa-solid text-light fa-share"></i>  <a style={{color:'white' ,textDecoration:"none"}} href="#learn">Learn more</a>
            </div>             </div>
          <div>
            <img style={{ width:"400px", height:'300px'}} src={illustration3} alt="" />
          </div>
        </div>
        <div style={{backgroundColor:'#f3f3f3'}} className="border box border-dark d-flex">
          <div>
            <h2 style={{backgroundColor:'#B9FF66',marginTop:'30px'}}>Email marketing</h2>

            <div style={{marginTop:"180px"}}>
            <i  class="fa-solid fa-share"></i>  <a style={{color:'black' ,textDecoration:"none"}} href="#learn">Learn more</a>
            </div>             </div>
          <div>
            <img style={{ width:"400px", height:'300px'}} src={illustration4} alt="" />
          </div>
        </div>
      </div>

        {/* third row */}
            <div className="d-flex justify-content-between box-section mb-4">
              <div style={{backgroundColor:'#B9FF66'}}  className="border box border-dark d-flex">
                <div>
                  <h2 style={{marginTop:'30px'}} > Content creation</h2>
      
                  <div style={{marginTop:"180px"}}>
            <i  class="fa-solid fa-share"></i>  <a style={{color:'black' ,textDecoration:"none"}} href="#learn">Learn more</a>
            </div>                   </div>
                <div>
                  <img style={{ width:"400px", height:'300px'}} src={illustration5} alt="" />
                </div>
              </div>
              <div style={{backgroundColor:'black'}}  className="border box border-dark d-flex">
                <div>
                  <h2 style={{backgroundColor:'#B9FF6',marginTop:'30px'}}>Analytics and tracking</h2>
      
                  <div style={{marginTop:"180px"}}>
            <i  class="fa-solid text-light fa-share"></i>  <a style={{color:'white' ,textDecoration:"none"}} href="#learn">Learn more</a>
            </div>                    </div>
                <div>
                  <img style={{ width:"400px", height:'300px'}} src={illustration6} alt="" />
                </div>
              </div>
  
            </div>
    </>
  )
}

export default BoxSection