import React,{useEffect, useState} from 'react';
import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { SmallInput } from '../../../shared/SmallInput';
import {update_Delivery} from '../../../service/DeliveryService';
import {useNavigate,useLocation } from 'react-router-dom'
const UpdateDelivery = () => {
  const location =useLocation();
  let navigate= useNavigate()
  const [state, setstate] = useState([])
   const formik = useFormik({
    initialValues:{
      materialname:location.state.materialname,
    description:location.state.description,
    vasselname:location.state.vasselname,
    month:location.state.month,
    quantity:location.state.quantity,
    date:location.state.date
      
    },
    //validationSchema:ValidationAmendments,
    onSubmit: values => {
        console.log(values)
        
      },
   })
   const updateDelivery=()=>{
    update_Delivery(location.state._id,formik.values).then(res=>{
      console.log(res.data.result)
      navigate('/delivery')
    })
   }
   const handleCancle =()=>{
     navigate('/delivery')
   }
    return (
      <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
            
      <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
      <h2 className=' Title my-1 p-0 text-center'>Update delivery Report</h2>  
      <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="materialname"
            id="materialname"
            label="Material Name :"
            span="*"
            placeholder="Enter Material Name"
            isTouched={formik.touched.materialname}
            error={formik.errors.materialname}
            {...formik.getFieldProps("materialname")}
            />
                
            </Col>
           </Row>
           <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="description"
            id="description"
            label="Description :"
            placeholder="Enter Description"
            isTouched={formik.touched.description}
            error={formik.errors.description}
            {...formik.getFieldProps("description")}
            />
                
            </Col>
           </Row>
           <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="date"
            id="date"
            label="Date :"
            type="date"
            span="*"
            placeholder="Enter Date"
            isTouched={formik.touched.date}
            error={formik.errors.date}
            {...formik.getFieldProps("date")}
            />
                
            </Col>
           </Row>
           <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="month"
            id="month"
            label="Month :"
            type="month"
            span="*"
            placeholder="Enter month"
            isTouched={formik.touched.month}
            error={formik.errors.month}
            {...formik.getFieldProps("month")}
            />
                
            </Col>
           </Row>
           <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="quantity"
            id="quantity"
            label="Quantity :"
            type="Number"
            span="*"
            placeholder="Enter Quantity"
            isTouched={formik.touched.quantity}
            error={formik.errors.quantity}
            {...formik.getFieldProps("quantity")}
            />
                
            </Col>
           </Row>
           <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="vasselname"
            id="vasselname"
            label="vasselname :"
            span="*"
            placeholder="Enter vassel Name"
            isTouched={formik.touched.vasselname}
            error={formik.errors.vasselname}
            {...formik.getFieldProps("vasselname")}
            />
                
            </Col>
           </Row>
         
          
          <Row className='my-3 mx-1'>
          <Col m={6} sm={12} ml-0 lg={6}>
          <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right' onClick={()=>updateDelivery()}>Submit</button>
          
          </Col>
          <Col m={6} sm={12} ml-0 lg={6}>
          <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
            </Col>
          </Row>
      </form>
         
          </div>
    )
}

export default UpdateDelivery