import React from "react";
import "./Dashboard.scss";
import  Stock   from "../stock/Stock";
import Piechart from "./Piechart";
import { Card } from "./Card";
import { Row,Col } from 'react-bootstrap'
import MinimumStock from "../stockdetails/MinimumStock";
import OutofStock from "../stockdetails/OutofStock";
const Dashboard = () => {
  return (
    <div className="container dashbord">
      <h2 className="Title text-left my-2 mx-1">Dashboard</h2>
      <Row>
        <Col style={{padding:0}}>
        <div className="card-class"><Card/></div>
        </Col>
      </Row>
      {/* <Row className="d-flex justify-content-between mx-2 my-2">
        <Col lg={5} sm={12} style={{padding:0}} className="minimumstock ml-3">
        <h3 className="Title text-left my-2 mx-1">
        Minimum Stock</h3><MinimumStock />
        </Col>
        <Col lg={5} sm={12} style={{padding:0}} className="minimumstock ">
        <h3 className="Title text-left my-2 mx-1">
        Out Of Stock</h3>
        <OutofStock />
        </Col>
      </Row> */}
      {/* <div className="card-class"><Card/></div> */}
      <Row>
        <Col lg={8} sm={12} style={{padding:0}}>
        <div className="stocktable w-full m-0 mt-2"><Stock/></div>
        </Col>
        <Col lg={4} sm={12} style={{padding:0}}>
        <div className="piechart w-full mt-2 p-0"><Piechart/></div>
        </Col>
      </Row>
     
    </div>
  );
};

export default Dashboard;
