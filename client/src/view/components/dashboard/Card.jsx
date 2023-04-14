import React, { useEffect, useState } from "react";
import { getStock } from "../../../service/StockService";
import { Row, Col } from "react-bootstrap";
export const Card = () => {
  const [stockdata, setStockdata] = useState([]);
  const [instock, setInstock] = useState([]);
  const [outstock, setOutstock] = useState([]);
  useEffect(() => {
    Stock();
    //   stockdetails()
  }, []);
  const Stock = () => {
    getStock().then((res) => {
      setStockdata(res.data.result);
      let instacks = res.data.result
        .filter((item) => item.stock > 0)
        .map((i) => i.stock);
      let outstacks = res.data.result
        .filter((item) => item.stock === 0)
        .map((i) => i.stock);
      setInstock(instacks);
      setOutstock(outstacks);
    });
  };

  console.log("instock", instock);
  return (
    <div className="container">
      <Row>
        <Col lg={4}>
          <div class="card  bg-success my-2 mx-2">
            <div class="card-body">
              <h4 class="card-title">Total Material</h4>
              <p class="card-text">{stockdata.length}</p>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div class="card  bg-primary my-2 mx-2">
            <div class="card-body">
              <h4 class="card-title">In Stock</h4>
              <p class="card-text">{instock.length}</p>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div class="card  bg-danger my-2 mx-2">
            <div class="card-body">
              <h4 class="card-title">Out of Stock</h4>
              <p class="card-text">{outstock.length}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
