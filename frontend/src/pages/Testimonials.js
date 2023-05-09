import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SectionTitle from '../elements/section-title/SectionTitle';
import TestimonialPropTwo from '../component/testimonial/TestimonialPropTwo';
import TestimonialData from "../data/testimonial/TestimonialData.json";
import { slugify } from '../utils';
import FooterCta from '../component/cta/FooterCta';
const allData = TestimonialData;

const Testimonials = () => {

    const googleData = allData.filter(data => slugify(data.fromtext) === "google");



    return (
        <>
        <SEO title="Testimonials" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Customer Reviews"
                page="Reviews"
                />
                
               <div className="section section-padding customer-review-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            <SectionTitle 
                                subtitle=""
                                title="What Our Client's Say's"
                                description="At Hirola InfoTech Solutions, we pride ourselves on delivering exceptional digital marketing services that help businesses thrive in the online world. Don't just take our word for it—here are some testimonials from our satisfied clients who have experienced great results through our services."
                                textAlignment="heading-left"
                                textColor=""
                            />
                            </div>
                            <div className="col-lg-4">
                                <div className="review-site-logo">
                                    <a href="https://www.google.com/"><img src={process.env.PUBLIC_URL + "/images/icon/google.png"} alt="Google" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <TestimonialPropTwo colSize="col-lg-4" itemShow="3" testimonialData={googleData} />

                        </div>
                    </div>
                </div>

           

               \<FooterCta/>
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default Testimonials;