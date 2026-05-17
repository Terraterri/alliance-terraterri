import React from "react";
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";



const WhyVisit = () => {
  return (
    <>
      <main className="main specl_pro">


        <div className="py-120 bg-metavr">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="property-single-content property-single-contentt2">
                  <h2 className="whyexTitle brline">
                    Why Visit
                  </h2>
                  <div className="property-single-description">

                    <p>
                      Property buyers can visit the AirPropX Expo to explore a diverse range of properties through immersive 3D and metaverse experiences, making property selection seamless and engaging. They can interact directly with builders, agents, and experts to get personalized insights, clarify doubts, and negotiate deals in real-time.
                    </p>
                  </div>
                  <div className="text-center tagline_txt">

                    <Carousel>
                      <Carousel.Item>
                        <p className="slid_clr_meta1">"Step into the future of real estate – explore, experience, and find your dream home at AirPropX!"</p>
                      </Carousel.Item>
                      <Carousel.Item>
                        <p className="slid_clr_meta2">"Discover properties like never before – immerse yourself in the metaverse with AirPropX!"</p>
                      </Carousel.Item>
                    </Carousel>


                  </div>
                </div>




              </div>
            </div>

            <div className="col-md-12 text-center">
              <h2 className="whyexTitle">
                Why Property Buyers Should Visit AirPropX
              </h2>
            </div>
            <div className="row flex-rev">
              <div className="col-lg-6 col-md-12">
                <div className="overFsrol">
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Explore Properties Anytime, Anywhere</h3>
                    <h5>Experience the convenience of viewing multiple properties from the comfort of your home, eliminating the need for physical travel.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Immersive Virtual Tours</h3>
                    <h5>Take lifelike 3D walkthroughs of properties, giving you a realistic sense of architectural design, interiors, and layout before making a visit.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Global Access</h3>
                    <h5>Discover properties from across the country or globe, breaking geographical barriers to find the perfect match for your needs.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Connect with Builders Directly</h3>
                    <h5>Interact with developers in real-time to ask questions, clarify doubts, and negotiate terms easily.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Save Time and Effort</h3>
                    <h5>Compare multiple projects in one place without spending days traveling between sites or meeting different builders individually.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Detailed Project Insights</h3>
                    <h5>Access comprehensive project information, including floor plans, brochures, approvals, and pricing details, all in one platform.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Personalized Experience</h3>
                    <h5>Get tailored property recommendations based on your preferences and explore options at your own pace.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Collaborative Decision-Making</h3>
                    <h5>Invite family, friends, or advisors to join you in the virtual expo, helping you make well-informed and collective decisions.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Cost-Effective Exploration</h3>
                    <h5>Avoid travel costs while still getting a thorough understanding of your options through a rich, virtual experience.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Exclusive Offers and Deals</h3>
                    <h5>Take advantage of special discounts or early-bird offers often available exclusively to expo attendees.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Eco-Friendly Choice</h3>
                    <h5>Participate in an environmentally sustainable alternative to traditional property expos.</h5>
                  </div>

                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="spcil_ot_meta">
                  {/* <Image src={"/assets/img/airpropx-la1.png"} width={600}
                        height={300} /> */}
                  <img src="assets/images/whyEx.jpg" alt="image" width={600}
                    height={300} />
                  <div className="imageLineC"></div>
                  <Link to={"/"}>
                    <button>Register for expo</button></Link>

                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </>
  )
}
export default WhyVisit