import { useFormik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import { SmallInput } from '../../../shared/SmallInput';
import React,{useEffect, useState} from 'react';
import {update_User} from '../../../service/UserService';
import {useNavigate,useLocation } from 'react-router-dom'
import {Uservalidation} from './Uservalidation'

const UpdateUser = () => {
  const location =useLocation();
    let navigate= useNavigate()
   const formik = useFormik({
    initialValues:{
      username:location.state.username,
      email:location.state.email,
      phoneno:location.state.phoneno,
      employeeid:location.state.employeeid,
      role:location.state.role,
    },
    validationSchema:Uservalidation,
    onSubmit: values => {
        console.log(values)
        
      },
   })
   const updateUser=()=>{
    update_User(location.state._id,formik.values).then(res=>{
      console.log(res.data.result)
      navigate('/user')
    })
   }
   const handleCancle =()=>{
     navigate('/user')
   }
   const isEnable=formik.values.password===formik.values.confirmpassword

    return (
      <div className='container p-2 col-11 col-sm-10 col-lg-12 mt-5'>
            
      <form id="formik-form" onSubmit={formik.handleSubmit} className="ml-2 p-2 mt-2 m-auto col-lg-7">
      <h2 className=' Title my-1 p-0 text-center'>Update User</h2>  
      <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="username"
            id="username"
            label="User Name :"
            span="*"
            placeholder="Enter User Name"
            isTouched={formik.touched.username}
            error={formik.errors.username}
            {...formik.getFieldProps("username")}
            />
                
            </Col>
           </Row>
           <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="employeeid"
            id="employeeid"
            label="Employee Id :"
            span="*"
            disabled="true"
            placeholder="Enter Employee Id"
            isTouched={formik.touched.employeeid}
            error={formik.errors.employeeid}
            {...formik.getFieldProps("employeeid")}
            />
                
            </Col>
           </Row>
           <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="email"
            id="email"
            label="Email :"
            placeholder="Enter Email"
            isTouched={formik.touched.email}
            error={formik.errors.email}
            {...formik.getFieldProps("email")}
            />
                
            </Col>
           </Row>
           <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="phoneno"
            id="phoneno"
            label="Phone Number :"
            span="*"
            placeholder="Enter phoneno"
            isTouched={formik.touched.phoneno}
            error={formik.errors.phoneno}
            {...formik.getFieldProps("phoneno")}
            />
                
            </Col>
           </Row>
           <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="role"
            id="role"
            label="Role :"
            span="*"
            placeholder="Enter Role"
            isTouched={formik.touched.role}
            error={formik.errors.role}
            {...formik.getFieldProps("role")}
            />
                
            </Col>
           </Row>
           {/* <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="password"
            id="password"
            label="Password :"
            type="password"
            span="*"
            placeholder="Enter Password"
            isTouched={formik.touched.password}
            error={formik.errors.password}
            {...formik.getFieldProps("password")}
            />
                
            </Col>

           </Row>
           <Row className='my-3 mx-1' >
            <Col m={6} sm={12} lg={12} ml-0>
            <SmallInput 
            name="confirmpassword"
            id="confirmpassword"
            label="Confirm Password :"
            type="password"
            span="*"
            placeholder="Enter Confirm Password"
            isTouched={formik.touched.confirmpassword}
            error={formik.errors.confirmpassword}
            {...formik.getFieldProps("confirmpassword")}
            />
                
            </Col>
            </Row> */}
           
     
          
         
          
          <Row className='my-3 mx-1'>
          <Col m={6} sm={12} ml-0 lg={6}>
          <button type="submit" className='btn  btn-outline-info ml-0 col-sm-10 col-lg-4 my-1 float-right'disabled={!isEnable} onClick={()=>updateUser()}>Submit</button>
          
          </Col>
          <Col m={6} sm={12} ml-0 lg={6}>
          <button type="submit" className='btn  btn-outline-danger ml-0 col-sm-10 col-lg-4 my-1'  onClick={()=>handleCancle()}>Cancel</button>
            </Col>
          </Row>
      </form>
         
          </div>
    )
}

export default UpdateUser