import React from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';
const detailsService = ServiceData;

console.log(   detailsService);
const OffcanvasMenu = ({offcanvasShow, offcanvasHide}) => {
    // const designData = detailsService.filter(data => slugify(data.cate ? data.cate : "") === "design");
    // const developmentData = detailsService.filter(data => slugify(data.cate ? data.cate : "") === "development");
    // const marketingData = detailsService.filter(data => slugify(data.cate ? data.cate : "") === "online-marketing");
    // const businessData = detailsService.filter(data => slugify(data.cate ? data.cate : "") === "business");
    // const technologyData = detailsService.filter(data => slugify(data.cate ? data.cate : "") === "technology");
    // const strategyData = detailsService.filter(data => slugify(data.cate ? data.cate : "") === "content-strategy");
    // const testingData = detailsService.filter(data => slugify(data.cate ? data.cate : "") === "testing");
    // const cloudData = detailsService.filter(data => slugify(data.cate ? data.cate : "") === "cloud-computing");
    // const consultantData = detailsService.filter(data => slugify(data.cate ? data.cate : "") === "consultant-services");
    return (
        <Offcanvas show={offcanvasShow} onHide={offcanvasHide} placement="end" className="header-offcanvasmenu">
            <Offcanvas.Header closeButton>
                <img src="/images/logo.svg" alt='menu-logo'/>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {/* <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder="Search..." />
                        <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form> */}
                <div className="row ">
                    <div className="col-lg-12 col-xl-12">
                        <ul className="main-navigation list-unstyled">
                            <li><Link to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/portfolio"}>Portfolio</Link>
                           
                            </li>
                            <li  ><Link to={process.env.PUBLIC_URL + "/services"}>Services
                            <div className='mob-menu' >
                            
                            <ul className=''>
                            {/* <li><Link to={process.env.PUBLIC_URL + "/creative-agency"}>Creative Agency</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/personal-portfolio"}>Personal Portfolio</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/home-startup"}>Home Startup</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/corporate-agency"}>Corporate Agency</Link></li> */}
                            <li>                         
{
    detailsService.slice(9,44).map((data)=>(
       
            <Link to={process.env.PUBLIC_URL + `/services/${slugify(data.title)}`}>
{data.title}
            </Link>
       
    ))
}
</li>
                            </ul>
                            </div>
                            </Link>
                          
                            </li>
                            <li><Link to={process.env.PUBLIC_URL + "/products"}>Our Products</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/industries"}>Industries</Link></li>
                            <li><Link to={process.env.PUBLIC_URL + "/case-study"}> Case Studies</Link></li>
                        
                            <li><Link to={process.env.PUBLIC_URL + "/cities-we-are"}>Cities We Are</Link></li>
                         
                            <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact Us</Link></li>
                        </ul>
                    </div>
                    {/* <div className="col-lg-7 col-xl-6">
                        <div className="contact-info-wrap">
                            <div className="contact-inner">
                                <address className="address">
                                    <span className="title">Contact Information</span>
                                    <p>Theodore Lowe, Ap #867-859 <br /> Sit Rd, Azusa New York</p>
                                </address>
                                <address className="address">
                                    <span className="title">We're Available 24/7. Call Now.</span>
                                    <a href="tel:8884562790" className="tel"><FaPhone /> (888) 456-2790</a>
                                    <a href="tel:12125553333" className="tel"><FaFax /> (121) 255-53333</a>
                                </address>
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">Find us here</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        <li>
                                            <a href="https://facebook.com/"><FaFacebookF /></a>
                                        </li>

                                        <li>
                                            <a href="https://twitter.com/"><FaTwitter /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.behance.net/"><FaBehance /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
          
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffcanvasMenu;
