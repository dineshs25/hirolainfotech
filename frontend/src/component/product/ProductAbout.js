import React from 'react'
import FormOne from '../contact/FormOne';

const ProductAbout = () => {
  return (
    <>
       <section className="section section-padding-equal bg-color-light about-sec">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">TO TELL STORIES THAT
INSPIRE TRUST AND AUTHORITY</span>
                                <h3 className="title mb--40">BEST DIGITAL MARKETING SERVICES IN BANGALORE</h3>
                                <p>Hirola InfoTech works with you to produce customized internet marketing services and a plan that aligns with your unique business needs. We become an extension of your team, a partner that understands your market and goals, rather than just an agency that executes strategies blindly.</p>
                                <p>Unlike so many other agencies that use glitz and glamor to close sales and then fail to execute, Hirola InfoTech focuses on client relationships and results. We always deliver substance, not false promises, ensuring we maximize your budget, so you get the most return on investment (ROI). Our reviews and testimonials speak volumes. We earn your business every day with month-to-month contracts. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">Get a free Keystroke quote now</h3>
                           <FormOne />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="line" /></li>
            </ul>
        </section>
    </>
  )
}

export default ProductAbout