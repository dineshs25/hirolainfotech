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
import { Helmet } from 'react-helmet-async';
// import Reveal from 'react-reveal/Reveal';
const rollData = payRollData

const HrAndPayroll = () => {
  return (
    <>
    <Helmet>
<title>Discover the Best HR & Payroll Management System Software | Streamline Your HR Processes</title>
<meta name='description' content='Streamline your HR processes with the best HR & Payroll Management System Software. Simplify payroll management, track employee attendance, manage leave requests, and automate HR tasks effortlessly.'data-rh="true" />
</Helmet>
            <ColorSwitcher />
  {
    rollData.map((payData)=>(
      <main className="main-wrapper">
            <HeaderOne />
            {/* <Reveal effect="fadeInUp" duration={900}> */}
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
       {/* </Reveal> */}
        </main>
    ))
  }
    </>
  )
}

export default HrAndPayroll