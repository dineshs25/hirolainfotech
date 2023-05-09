import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';



const ServiceProp = ({colSize, serviceStyle, serviceData}) => {

    return (
		<>
			{serviceData.map((data, index) => (
				<div className={colSize} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} alt="icon" className='icon-img' />
						</div>
						<div className="content">
							<h5 className="title"> 
								<Link to={process.env.PUBLIC_URL + `/services/${slugify(data.title)}`}>{data.new}</Link>
							</h5>
							<p>{data.description}</p>
							<Link to={process.env.PUBLIC_URL + `/services/${slugify(data.title)}`} className="more-btn">Find out more</Link>
						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default ServiceProp;