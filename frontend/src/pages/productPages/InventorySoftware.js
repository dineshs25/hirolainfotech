import React from 'react'
import HeaderOne from '../../common/header/HeaderOne';
import BcrumbBannerTwo from '../../elements/breadcrumb/BcrumbBannerTwo';
import FooterCta from '../../component/cta/FooterCta';
import FooterOne from '../../common/footer/FooterOne';
import AutomatedInventory from '../../component/product/inventory/AutomatedInventory';
// import InventoryFeaturedTab from '../../component/product/inventory/InventoryFeaturedTab';
import InventoryFeatures from '../../component/product/inventory/InventoryFeatures';
import InventoryOne from '../../component/product/inventory/InventoryOne';
import InventoryTwo from '../../component/product/inventory/InventoryTwo';
import InventoryServices from '../../component/product/inventory/InventoryServices';
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
import SEO from '../../common/SEO';
import inventoryData from '../../data/products/inventorySoftware.json'
import Accordion from 'react-bootstrap/Accordion';
const inventData  = inventoryData;

const InventorySoftware = () => {
  return (
    <>
     <SEO title="title" />
            <ColorSwitcher />
{
  inventData.map((inventoryInfo)=>(
    <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerTwo 
            title={inventoryInfo.title}
            paragraph ={inventoryInfo.description}
            mainThumb={inventoryInfo.mainImage}
            />
            <InventoryFeatures/>
            <InventoryOne/>
            <InventoryServices/>
            <InventoryTwo/>
            {/* <InventoryFeaturedTab/> */}
            <AutomatedInventory/>
        
            <div className="faq mt--80 mb--80">
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
      </div>
           <FooterCta/>
        <FooterOne parentClass="" />
        </main>
  ))
}
    </>
  )
}

export default InventorySoftware