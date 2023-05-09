import React from 'react'
import schoolData from '../../../data/products/schoolSoftware.json';
const schData = schoolData
const Ourvalues = () => {
  return (
    <>
{
schData.map((schoolInfo)=>(
  <div className="section section-padding case-study-featured-area bg-color-dark text-white">
    <div className="container">
              <h3 className="title text-center">{schoolInfo.aboutUs.title}</h3>
              <p className="subtitle">{schoolInfo.aboutUs.description}</p>
      <div className="row mt-5 mb-5">
        {
       schoolInfo.ourValues.map((valuesData)=>(
        <>
          <div className="col-md-6">
            <div className="about-col">
            <img src={valuesData.image} alt={valuesData.title} />
            <h4 className="title">{valuesData.title}</h4>
              <p className="subtitle">{valuesData.description}</p>
            </div>
          </div>
       
          </>
       ))
        }
      </div>
    </div>
  </div>
))
}
    </>
  )
}

export default Ourvalues