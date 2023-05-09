import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import CounterUpTwo from '../component/counterup/CounterUpTwo';
import TeamOne from '../component/team/TeamOne';
import VideoTwo from '../component/video/VideoTwo';
import Teamdata from '../data/team/TeamData.json'
import { slugify } from '../utils';
import FooterCta from '../component/cta/FooterCta';
const allData = Teamdata;
const Team = () => {
    const indianTeam = allData.filter(data => slugify(data.category ? data.category : "") === "india");
    const dubaiTeam = allData.filter(data => slugify(data.category ? data.category : "") === "dubai");
    console.log(indianTeam)
    console.log(dubaiTeam)
    return (
        <>
        <SEO title="Team" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne 
                title="Meet talent &amp; experience"
                paragraph ="Our team members are experienced professionals in various areas of digital marketing, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and website development. With their expertise and passion for staying up-to-date with the latest industry trends, our team is equipped to tackle even the most complex digital marketing challenges."
                styleClass="thumbnail-2"
                mainThumb="/images/banner/banner-thumb-2.png"
                />
                <CounterUpTwo />
                <TeamOne />
                   {/* <div className="row">
                            <TeamPropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={indianTeam}/>
                        </div>
                   <div className="row">
                            <TeamPropOne colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={dubaiTeam}/>
                        </div> */}
                <VideoTwo />
               <FooterCta/>
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default Team;