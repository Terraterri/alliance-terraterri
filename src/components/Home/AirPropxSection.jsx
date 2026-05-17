import React from 'react'
import { IoMdPlay } from "react-icons/io";
const AirPropxSection = ({ city }) => {
    return (
        <section className="parallax-container section">
            <div className="parallax-content section-lg context-dark text-center">
                <div className="container">
                    <h4 className="text-secondary wow text-left mb-0" data-splitting>
                        click here and Explore Airpropx
                    </h4>
                    <div className="row mt-3 row-30 justify-content-center">
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="play_otr">
                                <img
                                    src="../../assets/images/videos-thum.png"
                                    alt="sponsor image"
                                />
                                <a
                                    className="video-link wow fadeScale"
                                    href="https://youtu.be/eXUq5jnDTa0?si=0H7kXKhbQYzJR5_m"
                                    data-lightgallery="item"
                                >
                                    <div
                                        className="video-link-bg"
                                        data-triangle=".video-link-overlay"
                                    >
                                        <span className="video-link-overlay"></span>
                                    </div>
                                    <IoMdPlay />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            <div className="play_otr">
                                <img
                                    src="../../assets/images/videos-thum.png"
                                    alt="sponsor image"
                                />
                                <a
                                    className="video-link wow fadeScale"
                                    href="https://youtu.be/eXUq5jnDTa0?si=0H7kXKhbQYzJR5_m"
                                    data-lightgallery="item"
                                >
                                    <div
                                        className="video-link-bg"
                                        data-triangle=".video-link-overlay"
                                    >
                                        <span className="video-link-overlay"></span>
                                    </div>
                                    <IoMdPlay />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-12">
                        <h3 className="wow" data-splitting>
                            Discover Your Dream Property at <br /> {city}
                            <span>  {''}</span>Mega Virtual Property Expo
                        </h3>
                        <a href="#register_id">
                            <button
                                href="#register_id"
                                className=" mt-4 button button-primary scroll-to-registration"
                            >
                                Register Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AirPropxSection
