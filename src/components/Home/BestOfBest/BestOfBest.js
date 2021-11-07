import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './BestOfBest.css';


const BestOfBest = () => {
    useEffect(() =>{
        AOS.init();
        },[]);
        
    return (
        <div>
            <div className="container" id="best-equipments">
            <h3 className="text-center mb-4 section-title"><span>Best</span> Of The Best</h3>
                <div className="row my-5">
                    <div className="col-12 col-md-6"  >
                        <div data-aos="fade-right" data-aos-delay="500">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbnRhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center">
                       
                           <div data-aos="fade-left" data-aos-delay="500">
                           <h2 className="mt-3">High Ends Equipments</h2>
                        <p>We have best equipments for our patient. we are focused on best service so we make sure the equipments are best to do the treatment</p>
                        <div className="mb-4">
                            <p><b>Endodontic Equipments</b></p>
                            <ProgressBar animated striped now={90} label={90} variant="progress-1"/>
                        </div>
                        <div className="mb-4">
                            <p><b>Operatory Cabinetry</b></p>
                            <ProgressBar animated striped now={86} label={86} variant="progress-1"/>
                        </div>
                        <div className="mb-4">
                            <p><b>Surgical Microscopes</b></p>
                            <ProgressBar animated striped now={87} label={87} variant="progress-1"/>
                        </div>
                        <div className="mb-4">
                            <p><b>Dental Operatory Light</b></p>
                            <ProgressBar animated striped now={93} label={93} variant="progress-1"/>
                        </div>
                          
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestOfBest;