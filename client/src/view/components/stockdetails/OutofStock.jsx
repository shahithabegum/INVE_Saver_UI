import React, { useEffect, useState } from "react";
import { getStock } from "../../../service/StockService";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const OutofStock = () => {
    const [stockdata, setStockdata] = useState([]);

    useEffect(() => {
      Stock();
     
    }, []);
    const Stock = () => {
  
      getStock().then((res)=>
  
         setStockdata(res.data.result)
         
      
      )
    };
 
    return (
        <div className="mstyle ">
            <List>
           {stockdata.map((item,index)=>(  <ListItem>
              <ListItemText key={index} className="text-center text-danger">{item.stock === 0 ?item.materialname : ""}  {item.stock === 0 ? item.stock : ''}</ListItemText>
            </ListItem>))}
          </List>
         
        </div>
  )
}

export default OutofStock