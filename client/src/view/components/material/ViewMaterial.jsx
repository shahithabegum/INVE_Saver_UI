import React from "react";
import "./material.scss"
const ViewMaterial = (item) => {
  return (
   
      <div className="wrappview">
        <div  className="w-full mx-2 my-2 text-center ">
          <h6 className="mx-2" ><b>Material Name : </b>{item.item.materialname}</h6>
          <h6 className="mx-2" ><b>Description : </b> {item.item.description}</h6>
      
          <h6 className="mx-2" ><b>Month : </b> {item.item.month}</h6>
          <h6 className="mx-2" ><b>Date :</b> {new Date(item.item.date).toLocaleDateString()}</h6>
          <h6 className="mx-2" ><b>Quantity : </b> {item.item.quantity}</h6>
          <h6 className="mx-2" ><b>Amount : </b>{item.item.amount}</h6>
        </div>
      </div>
   
  );
};

export default ViewMaterial;
