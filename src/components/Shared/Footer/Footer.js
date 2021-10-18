import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section py-5" id="footer-section">
           <div className="container">
               <div className="row ">
                   <div className="col-12 col-md-6 col-lg-3 ">
                       <h5>Our Services</h5>
                      <div className="footer-text">
                      <p>Teeth Whitening</p>
                       <p>Gum Treatment</p>
                       <p>Sleep Apnea</p>
                       <p>Restorations</p>
                       <p>Smile Design</p>
                       <p>Root Canal</p>
                      </div>
                   </div>
                   <div className="col-12 col-md-6 col-lg-3 ">
                       <h5>Our Doctors</h5>
                       <div className="footer-text">
                      <p>Ismail Haque</p>
                       <p>Amdadul Haque Arif</p>
                       <p>Abdul Hye Zebon</p>
                       <p>Maruf Khan Masum</p>
                       <p>Minhaj Shishir</p>
                       <p>Jaber Hossain</p>
                      </div>
                   </div>
                   <div className="col-12 col-md-6 col-lg-3 ">
                   <h5>About Clinic</h5>
                       <div className="footer-text">
                      
                       <p>Total Cabins</p>
                       <p>Nurses</p>
                       <p>Equipments</p>
                    </div>
                       
                   </div>
                   <div className="col-12 col-md-6 col-lg-3">
                       <h5>Business Hours</h5>
                       <div className="footer-text">
                      
                       <p>Monday : 8:30 - 9:00</p>
                       <p>Friday : 10:00 - 4:00</p>
                       <p>Sunday : Closed</p>
                    </div>
                   </div>
                   
                   
               </div>
               <div className="row mt-3">
                   <h5>Contact Us</h5>
                   <div className="col-12 col-md-6 col-lg-3">
                   <div className="footer-text">
                       <p><i className="fas fa-map-marker-alt me-2"></i> 46 Motijheel, Dhaka 1200</p>
                    </div>
                   </div>

                   <div className="col-12 col-md-6 col-lg-3">
                   <div className="footer-text">
                       <p><i className="fas fa-phone-alt me-2"></i> 01423232132</p>
                    </div>
                   </div>

                   <div className="col-12 col-md-6 col-lg-3">
                   <div className="footer-text">
                       <p><i className="fas fa-envelope"></i> bestsmile@gmail.com</p>
                    </div>
                   </div>

                  
               </div>
           </div>
        </div>
    );
};

export default Footer;