import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import AboutOne from '../component/about/AboutOne';
import BannerOne from '../component/banner/BannerOne';
import BlogOne from '../component/blog/BlogOne';
import BrandItem from '../component/brand/BrandItem';
// import CounterUpTwo from '../component/counterup/CounterUpTwo';
// import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import HowWeCanHelp from '../component/home/HowWeCanHelp';
import IndustriesWeServe from '../component/home/IndustriesWeServe';
import Mission from '../component/home/Mission';
import OurPatners from '../component/home/OurPatners';
import ProjectOne from '../component/project/ProjectOne';
import ServicePropOne from '../component/service/ServicePropOne';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import CounterUp from '../component/counterup/CounterUp';
// import FormOne from '../component/contact/FormOne';
// import Accordion from 'react-bootstrap/Accordion';
// import { FaCompress } from 'react-icons/fa';
import FooterCta from '../component/cta/FooterCta';
import ScrollToTop from '../component/scrollToTop/ScrollToTop';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import BlogData from "../data/blog/BlogData.json";
import { slugify } from '../utils';
import BlogListOne from '../component/blog/BlogListOne';
import BlogDataHome from '../component/blog/BlogDataHome';

import { Helmet } from 'react-helmet-async';
// import Reveal from 'react-reveal/Reveal';

const allBlogData = BlogData;
// const allData = HomeData;

const DigitalAgency = () => {

    return (
        <>
        {/* <SEO
         title="Hirola Infotech Solutions | Best Digital Marketing Agency Bangalore"
            description="Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth."
         /> */}
         <Helmet>
<title>Hirola Infotech Solutions | Best Digital Marketing Agency Bangalore</title>
<meta name='description' content='Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.'data-rh="true" />

</Helmet>
        <ColorSwitcher />
        <main className="main-wrapper">
        {/* <Reveal effect="fadeInUp" duration={900}> */}
            <HeaderOne />
            <BannerOne />
           
            <ScrollToTop/>
            <OurPatners/>
            <div className="section section-padding-2 bg-color-light">
                <div className="container">
                    <SectionTitle 
                        subtitle="For Rankings, Sales And More"
                        title="Grow Your Client Base With Data-Driven and Targeted Strategies"
                        description="Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location."
                        textAlignment="heading-light-left text-white"
                        textColor=""
                    />
                    <div className='row'>
                        <ServicePropOne colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="9" />
                    </div>
                </div>
                {/* <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
                </ul> */}
            </div>
            <AboutOne />
            
            <Mission/>
            <IndustriesWeServe/>
            <HowWeCanHelp/>
            <ProjectOne />
            <div className="section section-padding expert-counterup-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-heading heading-left">
                            <span className="subtitle">About Us</span>
                            <h2>What makes us special?</h2>
                            <p className="mb--50">Hirola InfoTech Internet Marketing Agency is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Hirola InfoTech trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website. We’re not a static company. We don’t limit ourselves to specific industries. Hirola InfoTech has the experience and professionals to build a custom website and use multiple digital marketing services to assist any size company in any industry.</p>
                            <Link to={process.env.PUBLIC_URL + "/contact-us"} className="axil-btn btn-large btn-fill-primary">Careers</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <div className="row">
                            <CounterUp colSize="col-sm-6" layoutStyle="counterup-style-2" evenTopMargin="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <TestimonialOne />
            

          <div className='container'>
          <div className='row clients-row'>
                        <BrandItem/>
                        </div>
          </div>
          <div className="section section-padding-equal">
            <div className="container">
                <SectionTitle 
                    subtitle="What's Going On"
                    title="Our Latest Blogs"
                    description="News From Hirola Infotech And Around The World Of Web Design And Complete Solution of Online Digital Marketing"
                    textAlignment=""
                    textColor=""
                />
                <div className="row g-0 blog-home  justify-content-between">
                    <BlogDataHome colSize="col-xl-6 col-md-5 col-xl-6 col-xxl-6" itemShow="2" />
                </div>
            </div>
            <ul className="shape-group-1 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-1.png"} alt="bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-2.png"} alt="bubble" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="bubble" /></li>
            </ul>
        </div>
            {/* <CtaLayoutOne />  */}

{/* contact form with newwletter section */}

    {/* <section id="news-letter" className='pt--80 pb--80 bg-color-light ' >
    <div className="container">
        <div className="row">
            <div className="col-md-6">
      {
        allData.map((homeData)=>(
            <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">About Us</span>
                                <h3 className="title">{homeData.strategy.title}</h3>
                                <p>{homeData.strategy.description}</p>
                            </div>
                            <Accordion defaultActiveKey="1">
                               {
                                homeData.strategy.strategiesOf.map((strategyData)=>(
                                     <Accordion.Item eventKey={strategyData.id}>
                                     <Accordion.Header><FaCompress /> {strategyData.title}</Accordion.Header>
                                    <Accordion.Body>
                                    {strategyData.description}
                                    </Accordion.Body>
                                </Accordion.Item>
                                ))
                               }
                           
                            </Accordion>
                        </div>
        ))
      }
            </div>
            <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Get a free Hirola quote now</h3>
                            <FormOne />
                        </div>
                    </div>
        </div>
    </div>
    </section> */}
<FooterCta/>  


{/* contact form with newwletter section */}

        <FooterOne parentClass="" />
        <ScrollToTop/>
       {/* </Reveal> */}
        </main>
        </>
    )
}

export default DigitalAgency;

