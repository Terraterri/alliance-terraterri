import React, { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { OtpInput } from '../pages/OtpInput';
import { Modal } from '../pages/Model';
import { PopupButton } from "react-calendly";
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import axios from 'axios';
import { expoAdminClient } from '../utils/httpClient';
import Swal from 'sweetalert2';
import { toastSuccess, toastError, toastWarning } from '../utils/toast';
import { Helmet } from "react-helmet-async";
import { Country, State, City } from "country-state-city";



const Phygiverse = () => {

  const [contactForm, setContactForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('idle');
  const [country, setCountry] = useState('India');
  const initialFormState = {
    name: '',
    number: '+91',
    country: 'India',
    city: '',
    email: '',
    message: '',
    type: "Physiverse Expos",
    countryCode: '+91',
  };
  // const [formData, setFormData] = useState(initialFormState);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [phoneCode, setPhoneCode] = useState("+91");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [errors, setErrors] = useState({});
  const [otpTimer, setOtpTimer] = useState(60); // seconds
  const [canResend, setCanResend] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const [isNumberVerified, setIsNumberVerified] = useState(false);

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  useEffect(() => {
    let timer;
    if (isModalOpen && verificationStatus === "idle" && otpTimer > 0) {
      timer = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }

    if (otpTimer === 0) {
      setCanResend(true);
    }

    return () => clearInterval(timer);
  }, [isModalOpen, otpTimer, verificationStatus]);

  const handleCountryChange = (e) => {
    const selectedIsoCode = e.target.value;
    const selected = countries.find((c) => c.isoCode === selectedIsoCode);
    setSelectedCountry(selected);

    // Extract phone code and currency from selected country
    const phoneCode = selected.phonecode ? `+${selected.phonecode}` : "";
    const currency = selected.currency || "";

    // Set form data
    setFormData((prev) => ({
      ...prev,
      country: selected.name,
      state: "",
      city: "",
      number: "",
      countryCode: phoneCode,
      currency: currency,
    }));

    // Set states
    const statesData = State.getStatesOfCountry(selectedIsoCode);
    setStates(statesData);
    setCities([]);

    // Set phone code for display
    setPhoneCode(phoneCode);
  };

  const handleStateChange = (e) => {
    const selectedIso = e.target.value;
    const selected = states.find((s) => s.isoCode === selectedIso);
    setSelectedState(selected);

    setFormData((prev) => ({
      ...prev,
      state: selected.name,
      city: "",
    }));

    const cityData = City.getCitiesOfState(
      selectedCountry.isoCode,
      selectedIso
    );
    setCities(cityData);
  };

  const handleCityChange = (e) => {
    const selectedCityName = e.target.value;
    setSelectedCity(selectedCityName);
    setFormData((prev) => ({ ...prev, city: selectedCityName }));
  };

  const [formData, setFormData] = useState(initialFormState);

  // Handle change
  const handleChange = (e) => {
    // console.log(e.target);

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOtpVerified) {
      Swal.fire({
        title: "Error!",
        text: "Please Verify Your Mobile Number.",
        icon: "error",
        position: 'right',
        showConfirmButton: false,
        timer: 3800,
        // confirmButtonText: 'OK',
        customClass: {
          container: 'my-custom-container', // For the swal2-container
          popup: 'my-custom-popup',         // For the modal content
          backdrop: 'my-custom-backdrop',   //For the backdrop
        },
      });
      return
    }

    // Basic validation - ensures each field is a non-empty string
    //  const isValid = Object.values(formData).every(
    //   (field) => typeof field === 'string' && field.trim() !== ''
    // );

    // if (!isValid) {
    //   alert("Please fill in all required fields.");
    //   return;
    // }
    try {
      // API call to submit the form
      const response = await expoAdminClient.post(
        "connectForm/create.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSelectedCountry(""); // Reset country
      setSelectedState(""); // Reset state
      setSelectedCity(""); // Reset city
      setStates([]); // Clear states list
      setCities([]); // Clear cities list
      setPhoneCode("+91"); // Optional: reset phone code if needed
      setErrors({});

      if (response?.data?.status) {
        // toastSuccess("Form Submitted Successfully");
        Swal.fire({
          title: 'Connecting Successfully!',
          html: `
          <h5>Thank you for reaching out to us!</h5>
          <p>Our dedicated sales team will reach out to you shortly</p>
        `,
          icon: 'success',
          position: 'right',
          showConfirmButton: false,
          timer: 7800,
          // confirmButtonText: 'OK',
          customClass: {
            container: 'my-custom-container', // For the swal2-container
            popup: 'my-custom-popup',         // For the modal content
            backdrop: 'my-custom-backdrop',
          },
        });
        console.log("Form Submitted: ", formData);
        setFormData(initialFormState); // Reset form

      } else {
        // toastError("Failed to submit the form");
        Swal.fire({
          title: 'Error!',
          text: response.data.message || 'Something went wrong, please try again.',
          icon: 'error',
          showConfirmButton: false,
          timer: 3800,
        });
        console.log("Error: ", response.data.message);



      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // toastError("An error occurred while submitting the form.");
      Swal.fire({
        title: 'Error!',
        text: 'An unexpected error occurred. Please try again.',
        icon: 'error',
        showConfirmButton: false,
        timer: 3800,
      });

    }
    setContactForm(false);

  };

  const handleContactForm = () => setContactForm(true);

  const handleContactColse = () => {
    setContactForm(false);
  }

  const handleOtpComplete = async (otp) => {
    setLoading(true)
    const payload = {
      phone: formData?.number,
      otp: otp
    }
    try {
      let res = await expoAdminClient.post("Otp/verify-otp.php", payload);
      if (res?.data?.success) {
        setVerificationStatus("success");
        setIsOtpVerified(true);
        setIsNumberVerified(true); // Add this line
      } else {
        setVerificationStatus("error");
      }
    } catch (err) {
      toastError("Error Verifying OTP Please try after sometime")
      console.log(`Error Verifying OTP`, err)
    } finally {
      setLoading(false)
    }
  };

  const handleResendOtp = async () => {
    setOtpTimer(60);
    setCanResend(false);
    await requestOtp(); // Reuse the existing requestOtp function
  };

  const requestOtp = async () => {
    setLoading(true)
    const payload = {
      phone: formData?.number,

    }
    try {
      let res = await expoAdminClient.post('Otp/request-otp.php', payload);
      if (res?.data?.success) {
        toastSuccess('otp Sent to the Mobile Number')
        setIsModalOpen(true)
      } else {
        console.log(res?.data?.message);
        Swal.fire({
          title: "Error!",
          text:
            res?.data?.message || "Something went wrong, please try again.",
          icon: "error",
          showConfirmButton: false,
          timer: 3800,
        });
      }
    } catch (err) {
      toastError('Something went wrong! Please try after sometime');
      console.log(`Error requesting OTP`, err)
    } finally {
      setLoading(false)
    }
  }

  const handleStartOver = () => {
    setVerificationStatus("idle");
    setIsModalOpen(false);
    setIsNumberVerified(true); // Add this line
  };

  return (
    <>

      <Helmet>
        <title>AirPropX | Virtual Real Estate Expo | Metaverse Property Showcase</title>
        <meta name="description" content="AirPropX" />
        <meta name="keywords" content="AirPropX" />
      </Helmet>

      <main className="main specl_pro">


        <div className="py-120 bg-metavr">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="property-single-content property-single-contentt2">
                  <h2 className="whyexTitle brline">
                    Physiverse Expos
                  </h2>
                  <div className="property-single-description">

                    <p>
                      At Terraterri, we're revolutionizing real estate expos by offering both Physical and Metaverse Expos simultaneously. This unique combination ensures builders can reach a wider audience, allowing prospective buyers the flexibility to choose how they engage with your properties. Whether they prefer the in-person experience or the convenience of virtual tours, we provide both options within the same budget, maximizing your exposure and leads.
                    </p>
                  </div>
                  <div className="text-center tagline_txt">

                    <Carousel>
                      <Carousel.Item>
                        <p className="slid_clr_meta1">"Reach More Buyers, Physically and Virtually"</p>
                      </Carousel.Item>
                      <Carousel.Item>
                        <p className="slid_clr_meta2">"Two Worlds, One Expo – Physiverse Experience"</p>
                      </Carousel.Item>
                    </Carousel>


                  </div>
                </div>




              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="whyexTitle">
                  Benefits to Builders
                </h2>
              </div>
              <div className="col-md-6">
                <div className="overFsrol">
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Wider Audience Reach</h3>
                    <h5>Engage both local and global buyers with the flexibility of attending physical or virtual expos.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Maximized Lead Generation</h3>
                    <h5>Attract more leads by offering dual participation options, ensuring no potential buyer is missed.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Enhanced Brand Visibility</h3>
                    <h5>Promote your properties effectively through two simultaneous platforms, broadening your brand’s reach.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Cost-Effective</h3>
                    <h5>Get the best of both worlds — physical and virtual exposure — at the same budget, saving on logistics and travel costs.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Flexibility for Buyers</h3>
                    <h5>Meet customers where they are — in-person or online — and provide them with the convenience to explore your offerings.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Real-Time Engagement</h3>
                    <h5>Connect with visitors through live chats and video calls, fostering immediate interaction and decision-making.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Immersive Virtual Experience</h3>
                    <h5>For online visitors, provide them with an immersive, 3D metaverse walkthrough of your properties, enhancing their experience.</h5>
                  </div>
                  <div className="whySubTitle">
                    <h3 className=""><span>»</span>Environmental Benefits</h3>
                    <h5>Reduce the environmental impact associated with travel and physical infrastructure by integrating metaverse experiences.</h5>
                  </div>
                </div>
              </div>


              <div className="col-md-6">
                <div className="spcil_ot_meta">
                  {/* <Image src={"/assets/img/airpropx-la1.png"} width={600}
                        height={300} /> */}
                  <img src="assets/images/whyEx.jpg" alt="image" width={600}
                    height={300} />
                  <div className="imageLineC"></div>

                  {/* <button onClick={handleRequestForm} className="reBtn">Request A Demo</button> */}
                  <PopupButton
                    className="reBtn"
                    url="https://calendly.com/terraterri-gcloud/30min"
                    rootElement={document.getElementById("root")}
                    text="Request A Demo"
                  />



                  <button onClick={handleContactForm}>Connect With us</button>

                </div>
              </div>


              {/* Contact us Popup */}
              {contactForm && (
                <div className="overlay" >
                  <div className="popup">

                    <form id="contactForm" className="form" onSubmit={handleSubmit}>

                      <div className="form-container">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h2>Connect With us</h2>
                          <img src="../../assets/images/TT_200x50.webp" alt="image" className="conLogo" />
                          <button type="button" className="clBtn" onClick={handleContactColse}>
                            X
                          </button>
                        </div>
                        <div className="form-fields">
                          <div className="row">
                            <div className="col-md-6 pt-0">
                              <div className="">
                                <input type="text" name="name" value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className="form-input"
                                  placeholder="Your Name" />
                              </div>
                            </div>
                            <div className="col-md-6 pt-0">
                              <div className="">
                                <input type="text" name="email" value={formData.email}
                                  onChange={handleChange} required
                                  className="form-input"
                                  placeholder="Your Email" />
                              </div>
                            </div>

                            <div className="col-md-4 ">
                              <div className="">


                                <select
                                  className="form-input"
                                  name="country"
                                  value={selectedCountry?.isoCode || ""}
                                  onChange={handleCountryChange}
                                  required
                                >
                                  <option value="">Select Country</option>
                                  {countries.map((c) => (
                                    <option key={c.isoCode} value={c.isoCode}>
                                      {c.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="col-md-4 ">
                              <div className="">

                                <select
                                  className="form-input"
                                  name="state"
                                  value={selectedState?.isoCode || ""}
                                  onChange={handleStateChange}
                                  required
                                >
                                  <option value="">Select State</option>
                                  {states.map((s) => (
                                    <option key={s.isoCode} value={s.isoCode}>
                                      {s.name}
                                    </option>
                                  ))}
                                </select>

                              </div>
                            </div>

                            <div className="col-md-4 ">
                              <div className="form-group ">

                                <select
                                  className="form-input"
                                  name="city"
                                  value={selectedCity || ""}
                                  onChange={handleCityChange}
                                  required
                                >
                                  <option value="">Select City</option>
                                  {cities.map((city) => (
                                    <option key={city.name} value={city.name}>
                                      {city.name}
                                    </option>
                                  ))}
                                </select>

                              </div>
                            </div>

                            <div className="col-md-12 pt-0">
                              <div className="row mb-3">
                                <div className="col-md-2 pt-0 pe-0">
                                  <div className="form-wrap topp postion-relative">
                                    {/* Display the full country name */}


                                    <input
                                      type="text"
                                      className="form-input phone-cod"
                                      id="countryCode"
                                      name="countryCode"
                                      value={formData.countryCode}
                                      readOnly
                                    />


                                  </div>
                                </div>

                                <div className="col-md-6 pt-0 ps-0">
                                  <div className="form-wrap topp postion-relative">
                                    <input
                                      type="number"
                                      className="form-input phone-num"
                                      id="number"
                                      name="number"
                                      placeholder="Enter your number"
                                      value={formData.number}
                                      required
                                      onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^\d{0,10}$/.test(value)) {
                                          handleChange(e);
                                        }
                                      }}
                                      disabled={isNumberVerified} // Disable input after verification
                                    />




                                    {errors.number && (
                                      <div className="error">{errors.number}</div>
                                    )}


                                  </div>
                                </div>


                                <div className="col-md-4 pt-1 d-flex align-items-center justify-content-center">
                                  {isNumberVerified ? (
                                    <div className="verified-message">
                                      <span>✓ Verified</span>
                                      <p className="conte">Great! Your number is verified. Go ahead and complete the form.</p>
                                    </div>
                                  ) : (
                                    <div className="d-flex justify-content-end align-items-center" w-100>
                                      <button
                                        className="kave-btn"
                                        type="button"
                                        disabled={loading || !formData.number || formData.number.length < 10}
                                        onClick={requestOtp}
                                      >
                                        Get OTP
                                      </button>
                                    </div>

                                  )}
                                </div>
                              </div>


                            </div>
                            <div className="col-md-12 pt-0">
                              <div className="">
                                <textarea name="message" required
                                  className="form-input" value={formData.message}
                                  onChange={handleChange}
                                  placeholder="Your Message"></textarea>
                              </div>
                            </div>
                          </div>

                          <button type="submit" className="submit-button kave-btn">
                            <span>Connect</span>
                            <i data-lucide="send" className="icon-send"></i>
                          </button>
                        </div>
                      </div>
                    </form>



                  </div>
                </div>
              )}


              <Modal
                isOpen={isModalOpen}
                onClose={() => verificationStatus === 'idle' && setIsModalOpen(false)}
                title="Verify"
              >
                <div className="text-center">
                  {verificationStatus === 'idle' && (
                    <>
                      <p className="text-gray-600 mb-6">
                        Please enter the 6-digit verification code sent to your Register whatsapp number
                      </p>
                      <OtpInput onComplete={handleOtpComplete} />
                      <div className="d-flex">
                        <h6>

                        </h6>
                      </div>
                      <p className="text-sm text-gray-500 mt-4 verfi">
                        {canResend ? (
                          <button className="kave-btn small-btn" onClick={handleResendOtp}>
                            Resend OTP
                          </button>
                        ) : (
                          <p className="text-sm text-muted">
                            Resend available in <strong>{otpTimer}s</strong>
                          </p>
                        )}
                      </p>

                    </>
                  )}

                  {verificationStatus === 'success' && (
                    <div className="text-center optSuAlret">
                      <h3 className="text-xl font-semibold text-success mb-2">Verification Successful!</h3>
                      <p className="text-gray-600 verfi verrortext">You can now submit the form.</p>
                      <button className="kave-btn" onClick={handleStartOver}>Continue</button>
                    </div>
                  )}

                  {verificationStatus === 'error' && (
                    <div className="text-center optSuAlret">
                      <h3 className="text-xl font-semibold text-danger mb-2">Verification Failed</h3>
                      <p className="text-gray-600  verfi verrortext">Incorrect OTP. Please try again.</p>
                      <button className="kave-btn" onClick={() => setVerificationStatus('idle')}>Try Again</button>
                    </div>
                  )}
                </div>
              </Modal>


            </div>
          </div>

        </div>
      </main>
    </>
  )
}
export default Phygiverse