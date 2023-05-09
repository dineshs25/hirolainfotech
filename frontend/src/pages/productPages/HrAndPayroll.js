import React from 'react'
import HeaderOne from '../../common/header/HeaderOne'
import BcrumbBannerTwo from '../../elements/breadcrumb/BcrumbBannerTwo'
import FooterCta from '../../component/cta/FooterCta'
import FooterOne from '../../common/footer/FooterOne';
import PayrollAbout from '../../component/product/payroll/PayrollAbout';
import FeaturesPayroll from '../../component/product/payroll/FeaturesPayroll';
import PayrollBenefits from '../../component/product/payroll/PayrollBenefits';
import PayrollWork from '../../component/product/payroll/PayrollWork';
import Reports from '../../component/product/payroll/Reports';
import payRollData from '../../data/products/payrollSoftware.json';
import Accordion from 'react-bootstrap/Accordion';
// import FaqOne from '../../component/faq/FaqOne'
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
import SEO from '../../common/SEO';
const rollData = payRollData

const HrAndPayroll = () => {
  return (
    <>
     <SEO title="title" />
            <ColorSwitcher />
  {
    rollData.map((payData)=>(
      <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerTwo
            title={payData.banner.title}
            paragraph ={payData.banner.description}
            mainThumb={payData.banner.bannerImg}
            />
        <PayrollAbout/>
    <PayrollWork/>
    <FeaturesPayroll/>
    <PayrollBenefits/>
    <Reports/>
           <FooterCta/>
      <div className="faq mt--80 mb--80">
        <h3 className='title text-center faq-title' >Frequently asked questions</h3>
        <div className="container">
        <div className="row">
            <div className="container">
            <div className="col-lg-12 col-xl-10 m-auto ">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="1">
                               {
                                payData.faq.map((faqData)=>(
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

export default HrAndPayroll