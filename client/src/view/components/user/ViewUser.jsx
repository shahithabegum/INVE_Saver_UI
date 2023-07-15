import React from 'react'

const ViewUser = (item) => {
  return (
   
    <div className="wrappview">
      <div  className="w-full mx-2 my-2 text-center ">
        <h6 className="mx-2" ><b>User Name : </b>{item.item.username}</h6>
        <h6 className="mx-2" ><b>Employee Id : </b> {item.item.employeeid}</h6>
    
        <h6 className="mx-2" ><b>Email Id : </b> {item.item.email}</h6>
        <h6 className="mx-2" ><b>Phone Number : </b> {item.item.phoneno}</h6>
        <h6 className="mx-2" ><b>Role : </b>{item.item.role}</h6>
      </div>
    </div>
 
);
}

export default ViewUser