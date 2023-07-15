import React, { useEffect, useState } from "react";
import { getStock } from "../../../service/StockService";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const MinimumStock = () => {
  const [stockdata, setStockdata] = useState([]);

  useEffect(() => {
    Stock();
   
  }, []);
  const Stock = () => {

    getStock().then((res)=>

       setStockdata(res.data.result)
       
    
    )
  };
 
  console.log("mstock",stockdata)
  return (
    <div className="mstyle ">
        <List>
       {stockdata.map((item,index)=>(  <ListItem>
          <ListItemText key={index} className="text-center text-warning">{item.stock > 0 && item.stock <=25 ?item.materialname : ""}  {item.stock > 0 && item.stock <=25 ?item.stock : ''}</ListItemText>
        </ListItem>))}
      </List>
     
    </div>
  );
};

export default MinimumStock;
