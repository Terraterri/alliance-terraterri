import React from 'react'

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="fantasytitle">Terra Terri</div>
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img src="../../assets/images/step-wise-2.png" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-img">
                            <div className="">
                                {/* <img src="/assets/images/expo-img.png" alt="expo" /> */}
                                <video autoPlay loop muted>
                                    {/* <source src="../../assets/images/terraterri-expo.mp4" type="video/mp4" /> */}
                                    <source
                                        src="../../assets/images/ttv-builder.mp4"
                                        type="video/mp4"
                                    />
                                    {/* <!-- <source src="./images/terraterri-expo.mp4" type="video/ogg"> --> */}
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
