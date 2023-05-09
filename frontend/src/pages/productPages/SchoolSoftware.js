import React from 'react'
import HeaderOne from '../../common/header/HeaderOne';
import BcrumbBannerTwo from '../../elements/breadcrumb/BcrumbBannerTwo';
import FooterCta from '../../component/cta/FooterCta';
import FooterOne from '../../common/footer/FooterOne';
import AboutSchool from '../../component/product/school/AboutSchool';
import OurServices from '../../component/product/school/OurServices';
import Ourvalues from '../../component/product/school/Ourvalues';
import StakeList from '../../component/product/school/StakeList';
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
// import Accordion from 'react-bootstrap/Accordion';
import SEO from '../../common/SEO';
import schoolData from '../../data/products/schoolSoftware.json';
const schData = schoolData

const SchoolSoftware = () => {
  return (
    <>
     
{
  schData.map((schoolInfo)=>(
<>
<SEO title={schoolInfo.title} />
            <ColorSwitcher />
    <main className="main-wrapper">
             <HeaderOne />
             <BcrumbBannerTwo 
             title={schoolInfo.title}
             paragraph ={schoolInfo.description + schoolInfo.descriptionTwo}
             mainThumb={schoolInfo.mainImage}
             />
         <AboutSchool/>
         <Ourvalues/>
         <OurServices/>
         <StakeList/>
         {/* <div className="faq mt--80 mb--80">
        <h3 className='title text-center' >{inventoryInfo.faq.title}</h3>
        <div className="container">
        <div className="row">
            <div className="container">
            <div className="col-lg-12 col-xl-10 m-auto ">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="1">
                               {
                                inventoryInfo.faq.faqList.map((faqData)=>(
                                  <Accordion.Item eventKey={faqData.id} key={faqData.id}>
                                        <Accordion.Header><span>{`${faqData.id}.`}</span>{faqData.title}</Accordion.Header>
                                        <Accordion.Body>
                                       <p>{faqData.description}</p>
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
      </div> */}
            <FooterCta/>
         <FooterOne parentClass="" />
         </main>
</>
  ))
}
     </>
  )
}

export default SchoolSoftware