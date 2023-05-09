import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import SectionTitle from '../elements/section-title/SectionTitle';
import citiesData from '../data/cities/citiesWeAre.json';
import { slugify } from '../utils';
import { Link } from 'react-router-dom';
import FooterCta from '../component/cta/FooterCta';



const CitiesWeAre = () => {

    // const designData = allData.filter(data => slugify(data.cate ? data.cate : "") === "citiesData");
    // const developmentData = allData.filter(data => slugify(data.cate ? data.cate : "") === "Mumbai");
    // const marketingData = allData.filter(data => slugify(data.cate ? data.cate : "") === "Kolkata");
    // const businessData = allData.filter(data => slugify(data.cate ? data.cate : "") === "Chennai");
    // const technologyData = allData.filter(data => slugify(data.cate ? data.cate : "") === "Hyderabad");
    // const strategyData = allData.filter(data => slugify(data.cate ? data.cate : "") === "Pune");
    // const strategyDataa = allData.filter(data => slugify(data.cate ? data.cate : "") === "Bangalore");



    return (
        <>
        <SEO title="Service One" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Best solutions for your business"
                paragraph ="A group of tech-savvy individuals came together to form a company that would revolutionize the world of digital marketing - Hirola InfoTech Solutions. With a mission to provide top-notch services to businesses across India, Hirola InfoTech Solutions set out to establish a strong presence in major cities such as Bangalore, Chennai, Hyderabad, Delhi, Kolkata, Mumbai, and Pune.
                "
                styleClass=""
                mainThumb="/images/banner/banner-thumb-4.png"
            />
            <div className="service-scroll-navigation-area">

     

                <div className="section section-padding" id="section1">
                    <div className="container">
                        <SectionTitle 
                            subtitle="Cities We Are"
                            title="Our Branches/ Locations"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                    
                           
                        <div className="row">
                            {citiesData.slice(0,7).map((data, index)=>(
        <>
            <div key={index} className='col-lg-4 col-md-6' >
                       
                        <div className='services-grid service-style-2'>
                        <div className="thumbnail">
							{/* <img src={process.env.PUBLIC_URL + data.image} alt="icon" /> */}
						</div>
						<div className="content">
							<h5 className="title"> 
                            
								<Link to={process.env.PUBLIC_URL + `/cities-we-are/${slugify(data.title)}`}>{data.new}</Link>
							</h5>
							<p>{data.description}</p>
							<Link to={process.env.PUBLIC_URL + `/cities-we-are/${slugify(data.title)}`} className="more-btn">Find out more</Link>
						</div>
                        </div>                            
                      

            </div>
        </>
    ))
}
</div>
                       
                    </div>
                </div>

             
              

              

               
               
              
            </div>
           <FooterCta/>
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default CitiesWeAre;