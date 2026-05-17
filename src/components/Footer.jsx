import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import { Country, City } from 'country-state-city';
// import { Globe2, MapPin, Phone } from 'lucide-react';
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';



const Footer = () => {

  // const [selectedCountry, setSelectedCountry] = useState(null);
  // const [selectedCity, setSelectedCity] = useState(null);
  // const [cities, setCities] = useState([]);

  // const countries = Country.getAllCountries().map((country) => ({
  //   value: country.isoCode,
  //   label: country.name,
  //   flag: country.flag,
  //   phoneCode: country.phonecode
  // }));

  // useEffect(() => {
  //   if (selectedCountry) {
  //     const countryCities = City.getCitiesOfCountry(selectedCountry.value) || [];
  //     setCities(countryCities.map((city) => ({
  //       value: city.name,
  //       label: city.name
  //     })));
  //     setSelectedCity(null);
  //   }
  // }, [selectedCountry]);

  // const selectStyles = {
  //   control: (base) => ({
  //     ...base,
  //     paddingLeft: '2rem',
  //     borderRadius: '0.5rem',
  //     borderColor: '#e2e8f0',
  //     '&:hover': {
  //       borderColor: '#cbd5e1'
  //     }
  //   })
  // };

  return (
    <>
      {/* <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Globe2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Select
            className="pl-10"
            options={countries}
            value={selectedCountry}
            onChange={(option) => setSelectedCountry(option)}
            placeholder="Select a country..."
            formatOptionLabel={country => (
              <div className="flex items-center gap-3">
                <span className="text-xl">{country.flag}</span>
                <span>{country.label}</span>
                {country.phoneCode && (
                  <span className="text-gray-500 text-sm">+{country.phoneCode}</span>
                )}
              </div>
            )}
            styles={selectStyles}
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Select
            className="pl-10"
            options={cities}
            value={selectedCity}
            onChange={(option) => setSelectedCity(option)}
            placeholder="Select a city..."
            isDisabled={!selectedCountry}
            styles={selectStyles}
          />
        </div>

        {selectedCountry && (
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <Phone className="text-gray-400 h-5 w-5" />
            <span className="text-gray-600">Country Code:</span>
            <span className="font-semibold text-gray-900">+{selectedCountry.phoneCode}</span>
          </div>
        )}
      </div>

      {selectedCountry && selectedCity && (
        <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Selected Location</h3>
          <div className="space-y-2 text-gray-600">
            <p className="flex items-center gap-2">
              <Globe2 className="h-4 w-4" />
              Country: <span className="font-medium">{selectedCountry.label}</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              City: <span className="font-medium">{selectedCity.label}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Code: <span className="font-medium">+{selectedCountry.phoneCode}</span>
            </p>
          </div>
        </div>
      )}
    </div> */}

      <div className="section footer-classic context-dark pt-0 pb-0">
      
        <footer className="footer-area pt-3">
        <div className="footer-widget pt-20 pb-4">
          <div className="container">
            <div className="row footer-widget-wrapper ">
              <div className="col-lg-5 col-md-6 ">
                <div className="footer-widget-box about-us">
                 
                  <h4 className="footer-widget-title text-start">Reach Us</h4>
                  <div className=" padin-lef">
                    <Link href="mainto:info@terraterri.com">
                      <div className="link-icons">
                        <IoIosMail className="contact-icon" />

                       
                      </div>
                      info@terraterri.com{" "}
                    </Link>
                  </div>
                  
                  <div>
                   
                  </div>
                  <ul className="footer-social ps-0">
                    <li>
                      <Link
                        to="https://www.facebook.com/terraterriproptech/"
                        target="_blank"
                      >
                        <BiLogoFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/terraterri_proptech/"
                        target="_blank"
                      >
                        <FaXTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/company/terraterri/"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/terraterri_proptech/"
                        target="_blank"
                      >
                        <BsInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/channel/UCHRWsU3s6wpgj979heLTPNw"
                        target="_blank"
                      >
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                  <div className="d-flex mt-3 app_icons">
                   
                    <img src="/assets/images/app-store.png"   width={200}
                      height={200}
                      alt="quote" />
                      <img src="/assets/images/google-store.png"  width={200}
                      height={200}
                      alt="quote" />
                    
                  </div>
                </div>
              </div>
            
              <div className="col-lg-7 col-md-6 ">
                <div className="footer-widget-box list">
                 
                  <div className="row">
                    <div className="col-md-8 pr-0 text-start pt-0">
                    <h4 className="footer-widget-title text-start">Quick Links</h4>
                    <div className="row p-0 m-0">
                      <div className="col-md-6 pt-0 ps-0">
                      <ul className="footer-list ps-0 mb-0">
                        <li>
                          <Link to="/airPropxSub">About Air PropiX</Link>
                        </li>
                        <li>
                          <Link to="https://terraterri.com/privacy-policy" target='blank'>Privacy Policy</Link>
                          {/* <Link to="http://localhost:3000/privacy-policy" target='blank'>Privacy Policy</Link> */}
                        </li>
                        <li>
                          {/* <Link to="http://localhost:3000/contact">Get In Touch</Link> */}
                          <Link to="https://terraterri.com/contact">Get In Touch</Link>
                        </li>
                        <li>
                          <Link href="/">Blog</Link>
                        </li>
                      </ul>
                      </div>
                      <div className="col-md-6 pt-0 ps-0">
                      <ul className="footer-list ps-0">
                        <li>
                          <Link href="/">Careers</Link>
                        </li>
                        <li>
                          {/* <Link href="http://localhost:3000/feedback">Feed Back</Link> */}
                          <Link href="https://terraterri.com/feedback">Feed Back</Link>
                        </li>
                        <li>
                          <Link href="/">Help Center</Link>
                        </li>
                        <li>
                          {/* <Link to="http://localhost:3000/terms-and-conditions">
                            Terms & Conditions
                          </Link> */}
                          <Link to="https://terraterri.com/terms-and-conditions">
                            Terms & Conditions
                          </Link>
                        </li>
                      </ul>
                      </div>
                    </div>
                     
                      
                    </div>
                    
                  </div>
                </div>
              </div>
             
             

           </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 align-item-center pt-0">
                <p className="copyright-text mb-0">
                  © Copyright <span id="date" />{" "}
                  <Link href="#"> Terraterri.com </Link> All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}

export default Footer