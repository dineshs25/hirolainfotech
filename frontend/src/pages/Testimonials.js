import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import { Helmet } from 'react-helmet-async';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SectionTitle from '../elements/section-title/SectionTitle';
import TestimonialPropTwo from '../component/testimonial/TestimonialPropTwo';
import TestimonialData from "../data/testimonial/TestimonialData.json";
import { slugify } from '../utils';
import FooterCta from '../component/cta/FooterCta';
// import Reveal from 'react-reveal/Reveal';
const allData = TestimonialData;

const Testimonials = () => {

    const googleData = allData.filter(data => slugify(data.fromtext) === "google");



    return (
        <>
       


<Helmet>
<title>Hirola Infotech Testimonials - Client Experiences with Exceptional IT Solutions</title>
<meta name='description' content='Read testimonials from satisfied clients who have experienced exceptional IT solutions with Hirola Infotech. Our clients share their experiences and insights about our top-notch software development, web development, and digital marketing services.'data-rh="true" />
</Helmet>
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                {/* <Reveal effect="fadeInUp" duration={900}> */}
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
               {/* </Reveal> */}
            </main>
        </>
    )
}

export default Testimonials;