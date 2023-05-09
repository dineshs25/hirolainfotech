import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedin, FaInstagram, FaDribbble, FaBehance, FaEnvelopeOpen, FaYoutube } from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";

const getServiceData = ServiceData;

const FooterOne = ({parentClass}) => {
    
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
                        <div className="col-xl-6 col-lg-5">
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
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link to={process.env.PUBLIC_URL + "/services/"}>{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Resourses</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/case-studies"}>Case Studies</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/portfolio"}>Portfolio</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/cities-we-are"}>Cities We Are</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/team"}>Our Team</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/contact-us"}>Contact</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms of Use</Link></li>
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
                                    <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms of Use</Link></li>
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