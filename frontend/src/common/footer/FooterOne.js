import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedin, FaInstagram, FaDribbble, FaBehance, FaEnvelopeOpen, FaYoutube } from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import Logo from '../../elements/logo/Logo';

const getServiceData = ServiceData;

const FooterOne = ({parentClass, limage, dimage, simage}) => {
    
    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/Hirolagroups"><FaFacebookF /></a></li>
                            <li><a target='_blank' rel="noopener noreferrer" href="https://twitter.com/HirolaInfotech"><FaTwitter /></a></li>
                            <li><a target='_blank' rel="noopener noreferrer" href="https://in.pinterest.com/hirolainfotechsolutions/"><FaPinterestP /></a></li>
                            <li><a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/company/74702072/admin/"><FaLinkedin /></a></li>
                            <li><a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/hirolainfotechsolutions/"><FaInstagram /></a></li>
                            <li><a target='_blank' rel="noopener noreferrer" href="https://www.youtube.com/channel/UC08x8FXOmwXGCy3HX575K7Q/"><FaYoutube /></a></li>
                            <li><a target='_blank' rel="noopener noreferrer" href="https://dribbble.com/Hirola_InfoTech_Solutions"><FaDribbble /></a></li>
                            <li><a target='_blank' rel="noopener noreferrer" href="https://www.behance.net/Hirolainfotech2022/"><FaBehance /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="row">
                        {/* <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Get in touch!</h2>
                                    <p>Hirola Infotech Solutions has established a strong reputation for delivering high-quality digital marketing services that drive results to clients.We want to hear from you. Let us know how we can help.</p>
                                    <form>
                                        <div className="input-group">
                                            <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                            <input type="email" className="form-control" placeholder="Email address" />
                                            <button className="subscribe-btn" type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-12">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        {/* <h6 className="widget-title">About Us</h6> */}
                                        <div className="header-logo w-75 w-sm-100">

                                        <Link to={process.env.PUBLIC_URL + "/"}>
                                        <img className="light-version-logo light-version-logo1" src='/images/logo.svg' alt="logo" />
            <img className="dark-version-logo dark-version-logo1" src='/images/logo-3.svg' alt="logo" />
        </Link>
 
</div>
                                    <p>Hirola Infotech Solutions has established a strong reputation for delivering high-quality digital marketing services that drive results to clients.We want to hear from you. Let us know how we can help.</p>
                                       
                                            <h6>#7, 4th Floor, 1st Cross Rd, Balaji Layout, AMCO Colony, Koti Hosahalli, Bengaluru, Karnataka-560092</h6>
                                      
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="footer-widget">
                                        <h5 className="widget-title">Digital Marketing Companies In India</h5>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/digital-marketing-agency-in-bangalore"}>Digital Marketing Company In Bangalore</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/digital-marketing-agency-in-hyderabad"}>Digital Marketing Company In Hyderabad</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/digital-marketing-agency-in-delhi"}>Digital Marketing Company In Delhi</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/digital-marketing-agency-in-pune"}>Digital Marketing Company In Pune</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/digital-marketing-agency-in-kolkata"}>Digital Marketing Company In Kolkata</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/digital-marketing-agency-in-chennai"}>Digital Marketing Company In Chennai</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/digital-marketing-agency-in-mumbai"}>Digital Marketing Company In Mumbai</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h5 className="widget-title">Seo Companies In India</h5>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                            <li><Link to={process.env.PUBLIC_URL + "/search-engine-optimization"}>Seo Company In Bangalore</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/seo-company-in-delhi"}>Seo Company In Delhi</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/seo-company-in-chennai"}>Seo Company In Chennai</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/seo-company-in-hyderabad"}>Seo Company In Hyderabad</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/seo-company-in-kolkata"}>Seo Company In Kolkata</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/seo-company-in-mumbai"}>Seo Company In Mumbai</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/seo-company-in-pune"}>Seo Company In Pune</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <div className="footer-widget">
                                        <h5 className="widget-title">Support</h5>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/contact-us"}>Contact Us</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/services"}>Services</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/products"}>Products</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/portfolio"}>Portfolio</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/blog"}>Blogs</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/case-studies"}>Case-Studies</Link></li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://hirolainfotech.com/">Hirola Infotech Solutions</a>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms and Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne;