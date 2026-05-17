import React from "react";
import { Carousel } from 'react-bootstrap';


const Solutions = () =>{
    return(
        <>
           <main className="main specl_pro">
        <div
          className="site-breadcrumb"
          
        >
          
          <div className="container">
            <div className="text-right tagline_txt">

              <Carousel>
                <Carousel.Item>
                <p className="slid_clr_meta1">"AirPropX: Redefining Real Estate Expos in<br></br> the Metaverse."</p>
                </Carousel.Item>
                <Carousel.Item>
                <p className="slid_clr_meta2">"Explore, Engage, and Experience the Future of <br></br>Real Estate with AirPropX"</p>
                </Carousel.Item>
              </Carousel>
              
              
              </div>
            <h2 className="breadcrumb-title ">
              <span>AirProp<label>X</label></span><br></br>
              The Metaverse Realestate Expo
            </h2>
          </div>
        </div>

        <div className="py-120 bg-metavr">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="property-single-content property-single-contentt2">
                  
                  <div className="property-single-description">
                    <p>
                    AirPropX is a virtual real estate expo platform that redefines the traditional real estate expo experience by leveraging the capabilities of the metaverse. It offers a dynamic and immersive environment where exhibitors can showcase projects and properties, and attendees can explore, interact, and engage with builders and developers. 
                    </p>
                  </div>
                </div>
                
                <div className="row align-items-center">
                  <div className="col-md-6">
                <div className="property-single-content">
                  
                  <div className="property-single-description metaver_out">

                  
                  <h3>Benefits to builders using AirPropX:</h3>

                    <ul>
                          <li><span>»</span> Cost-effective showcase of projects without travel or logistical expenses.</li>
                          <li><span>»</span> Access to a global audience, increasing exposure and reach.</li>
                          <li><span>»</span> Interactive virtual booths to effectively present properties.</li>
                          <li><span>»</span> Customer analytics to gain insights into buyer interests and preferences.</li>
                        
                    </ul>
                    
                  </div>
                    </div>

                  </div>
                  <div className="col-md-6">

                    <div className="spcil_ot_meta">
                      {/* <Image src={"/assets/img/airpropx-la1.png"} width={600}
                        height={300} /> */}
                        <img src="assets/images/airpropx-la1.png" alt="image"  width={600}
                        height={300} />
                    </div>
                    
                  </div>
                  </div>
                  <div className="row align-items-center">
                  <div className="col-md-6">

                  <div className="spcil_ot_meta">
                   
                        <img src="assets/images/airpropx-la.png" alt="image" width={500} height={500} />
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                <div className="property-single-content">
              
                  <div className="property-single-description metaver_out">
               

<ul>
      <li><span>»</span> Opportunities for networking with potential buyers and industry professionals.</li>
      <li><span>»</span> Ability to participate in real estate expos without the limitations of physical events.</li>
      <li><span>»</span> AirPropX serves as a lead generation platform for builders by capturing quality prospects</li>
      
</ul>

                  </div>
                    </div>
                  
               
                  
                  </div>
                </div>


              </div>
            </div>
          </div>
         
        </div>
      </main>
        </>
    )
}
export default Solutions