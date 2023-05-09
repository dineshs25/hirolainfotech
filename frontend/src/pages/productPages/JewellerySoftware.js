import React from 'react'
import HeaderOne from '../../common/header/HeaderOne';
import BcrumbBannerTwo from '../../elements/breadcrumb/BcrumbBannerTwo';
import FooterCta from '../../component/cta/FooterCta';
import FooterOne from '../../common/footer/FooterOne';
import JwelleryFeatures from '../../component/product/jewellery/JwelleryFeatures';
import KnowMore from '../../component/product/jewellery/KnowMore';
import OurValuedServices from '../../component/product/jewellery/OurValuedServices';
import WhyUs from '../../component/product/jewellery/WhyUs';
import jwellRollData from '../../data/products/jewewlerySoftware.json';
import Accordion from 'react-bootstrap/Accordion';
// import FaqOne from '../../component/faq/FaqOne'
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
import SEO from '../../common/SEO';
const rollData = jwellRollData

const JewellerySoftware = () => {
  return (
    <>
     <SEO title="title" />
            <ColorSwitcher />
  {
    rollData.map((jwellData)=>(
      <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerTwo 
            title={jwellData.bannerTitle}
            paragraph ={jwellData.description}
            mainThumb={jwellData.aboutProduct.image}
            />
        <JwelleryFeatures/>
        <WhyUs/>
        <KnowMore/>
        <OurValuedServices/>

           <FooterCta/>
          
           <div className="faq mt--80 mb--80 d-none">
        <h3 className='subtitle text-center' >FAQ'S</h3>
        <div className="container">
        <div className="row">
            <div className="container">
            <div className="col-lg-12 col-xl-10 m-auto ">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="1">
                               {
                                jwellData.KnowMOre.knowMoreList.map((faqData)=>(
                                  <Accordion.Item eventKey={faqData.id} key={faqData.id}>
                                        <Accordion.Header><span>{`${faqData.id}.`}</span>{faqData.title}</Accordion.Header>
                                        <Accordion.Body>
                                        {faqData.body.map((data, i) =>(
                                            <div  key={i} dangerouslySetInnerHTML={{__html: data}}></div>
                                            
                                        ))}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                               }
                            </Accordion>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      </div>
        <FooterOne parentClass="" />
        </main>
    ))
  }
    </>
  )
}

export default JewellerySoftware