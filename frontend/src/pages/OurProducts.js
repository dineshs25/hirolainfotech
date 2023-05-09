import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import SectionTitle from '../elements/section-title/SectionTitle';

import ProductData from "../data/products/ProductsMain.json";
import ProductPropOne from '../component/product/ProductPropOne';
import FooterCta from '../component/cta/FooterCta';

const allData = ProductData;


const OurProducts = () => {

    // const productData = allData.filter(data => slugify(data.cate ? data.cate : "") === "products");




    return (
        <>
        <SEO title="Service One" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Software Development Services in Bangalore"
                paragraph ="Hirola Infotech Solutions software development services in Bangalore are known for their expertise in various technologies and programming languages, such as Java, Python, .NET, PHP, JavaScript, and more. We stay updated with the latest trends in software development, ensuring that we deliver innovative and cutting-edge solutions. "
                styleClass=""
                mainThumb="/images/banner/banner-thumb-4.png"
            />
            <div className="service-scroll-navigation-area">

             

                <div className="section section-padding" id="section1">
                    <div className="container">
                        <SectionTitle 
                            title="Design"
                            description=""
                            textAlignment="heading-left"
                            textColor=""
                        
                        />
                        <div className="row">
                            <ProductPropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={allData}/>
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

export default OurProducts;