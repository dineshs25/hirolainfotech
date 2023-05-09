import React from 'react'
import homeData from '../../data/home/homedata.json';
import SectionTitle from '../../elements/section-title/SectionTitle';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
const allHomedata = homeData;
console.log(allHomedata)
const IndustriesWeServe = () => {
  return (
   
    <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
   {
    allHomedata.map((homeData)=>(
        <div className="container">
        <SectionTitle
            subtitle="Industries We Serve"
            title={homeData.industriesWeServe.title}
            description={homeData.industriesWeServe.description}
            textAlignment="heading-left heading-light-left mb--100 text-white"
            textColor=""
        />

        <div className="row">
            {homeData.industriesWeServe.industriesServices.map((data) => (
                <div className="col-lg-4" key={data.id}>
                <Link to={process.env.PUBLIC_URL + `/industries/${slugify(data.title)}`} className="more-btn">
                    <div className="about-quality about-home-quality">
                        <img src={data.image} alt={data.title} />
                        <h5 className="title">{data.title}</h5>
                        <p>{data.description}</p>
                    </div>
                    </Link>
                </div>
            ))}
            

        </div>
    </div>
    ))
   }
    <ul className="list-unstyled shape-group-10">
        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
    </ul>
</div>
  )
}

export default IndustriesWeServe