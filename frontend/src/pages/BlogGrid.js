import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import BlogSidebar from '../component/blog/BlogSidebar';
import BlogGridOne from '../component/blog/BlogGridOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import FooterCta from '../component/cta/FooterCta';
import { Link } from 'react-router-dom';


const BlogGridView = ({title, }) => {

    return (
        <>
            <SEO title="Blog Grid" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                {/* <BreadCrumbOne 
                // title="Blogs"
                page="Blog"
                /> */}
                <div className="breadcrum-area">
            <div className="container">
                <div className="breadcrumb">
                    <ul className="list-unstyled">
                        <li>
                            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
                        </li>
                        
                        <Link to={process.env.PUBLIC_URL + "/blog"}><li className="" >Blog</li></Link>
                        <li className="active" dangerouslySetInnerHTML={{__html: title}}></li>
                    </ul>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-9.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-11.png"} alt="Bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
            </ul>
        </div>
                <div className="section-padding-equal">
                    <div className="container">
                       <div className="row row-40">
                            <div className="col-lg-8">
                                <BlogGridOne />
                            </div>
                            <div className="col-lg-4">
                                <BlogSidebar />
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

export default BlogGridView;