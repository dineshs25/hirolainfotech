import React from "react";
import schoolData from "../../../data/products/schoolSoftware.json";
const schData = schoolData
const OurValuedServices = () => {
  return (
    <>
      {schData.map((schoolInfo) => (
        <div className="section section-padding case-study-featured-area ">
        <div className="container">
          <h4 className="title text-center">
            {schoolInfo.stakeList.title}
          </h4>
          <p className="subtitle text-center">
            {schoolInfo.stakeList.description}
          </p>
       
           <div className="parent row">
           {
            schoolInfo.stakeList.stakeListInfo.map((stakeListData)=>(
              <div className=" valued-service mt-5 mb-5">
              <div className="row abcd">
                <div className="col-md-6">
                  <h3 className="title" >{stakeListData.title}</h3>
                  <p>{stakeListData.description}</p>
               
                </div>
                <div className="col-md-6">
                  <img src={stakeListData.image} alt={stakeListData.title} />
                </div>
              </div>
            </div>
            ))
           }
           </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OurValuedServices;
