import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import SVGComponent from '../svg/SvgComponent';
const BannerOne = () => {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6 or-1">
                        <div className="banner-content">
                        {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2 bg-transparent border-0 text-black -xl h3 p-0" onClick={() => handleShow(v)}>
          <img src='/images/banner/icons8-play-button-circled-96.png' alt='circle' / >Play
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal className='bg-color-dark' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/C18BuBr7A6g?autoplay=1" title="Digital Marketing Services To Grow Your Business | SEO | PPC | Hirola Infotech Solutions Pvt Ltd" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                                <h1 className="title">
                        
Let’s Make <br/>  Amazing Together
</h1>
                                <span className="subtitle">Join the digital revolution today and grow your business with Hirola InfoTech Solutions - the best digital marketing agency in Bangalore. Let our talented team of experts take care of your SEO, SMO, web design, and PPC needs and many .</span>
                                <Link to={process.env.PUBLIC_URL + "/contact-us"} className="axil-btn btn-fill-primary btn-large">Get Started </Link> <span className='sp-btn' >Digital Marketing Agency</span>
                            </AnimationOnScroll>
                          
                        </div>
                    </div>
                    <div className="col-lg-6 or-2">
                        <div className="banner-thumbnail">
                            {/* <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                <div className="large-thumb">
                                    <img src={process.env.PUBLIC_URL + "/images/banner/window.png"} alt="Laptop" />
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="slideInRight" duration={2} delay={300} animateOnce={true}>
                            <div className="large-thumb-2">
                                <img src={process.env.PUBLIC_URL + "/images/banner/laptop-poses.png"} alt="Laptop" />
                            </div>
                            </AnimationOnScroll> */}
                            <ul className="list-unstyled shape-group">
                                <li className="shape shape-1">
                                    {/* <AnimationOnScroll animateIn="slideInLeft" duration={1} delay={800} animateOnce={true}> */}
                                        {/* <img src={process.env.PUBLIC_URL + "/images/banner/chat-group.png"} alt="chat" /> */}
                                        {/* <img src='images/banner/Final1.gif'/> */}
                                       <SVGComponent/>
                                    {/* </AnimationOnScroll> */}
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-21">
                <li className="shape shape-1">
                    {/* <img src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"} alt="Bubble" /> */}
                </li>
                <li className="shape shape-2">
                    {/* <img src={process.env.PUBLIC_URL + "/images/others/bubb0le-38.png"} alt="Bubble" /> */}
                </li>
                {/* <li className="shape shape-3">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li> */}
                <li className="shape shape-4">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-6">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default BannerOne;