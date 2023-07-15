import React,{useEffect, useMemo, useState} from 'react'

import MaterialReactTable from 'material-react-table';
import { getStock } from '../../../service/StockService';

 const Stock = () => {
     
      const [stockdata, setStockdata] = useState([])
      useEffect(() => {
        Stock()
      }, [])
      const Stock = ()=>{
        getStock().then((res)=>setStockdata(res.data.result))
      }
      const columns = useMemo(
        () => [
          {
            accessorKey: 'materialname', //access nested data with dot notation
            header: 'Material Name',
            Cell: ({ cell, row }) => (
              <div>
                {row.original.stock ===0
                  ?<div style={{color:"red"}}>{cell.getValue()}</div> 
                  : cell.getValue()}
              </div>
            ),
          },
          {
            accessorKey: 'stock',
            header: 'Total No Of Stock',
            Cell: ({ cell, row }) => (
              <div>
                {row.original.stock === 0
                  ?<div style={{color:"red"}}>Out Of Stock</div> 
                  : cell.getValue()}
              </div>
            ),
          },
         
        
        ],
        [],
      );
     console.log("stockdata",stockdata)
  return (
    <div className='container'>
         <h3 className="Title text-left my-2 mx-1">Stock Details</h3>
        <MaterialReactTable columns={columns} data={stockdata}
         enableStickyHeader
      muiTableContainerProps={{ sx: { maxHeight: '500px' } }}
      
      
    //   muiSelectCheckboxProps={({ row }) => ({
    //     color: '#8186D5',
       
    //   })}
  
      muiTableBodyProps={{
        sx: {
          '& tr:nth-of-type(odd)': {
            backgroundColor: '#C6CBEF',
          },
        },
      }}
      muiTableHeadCellProps={{
        sx:{
          backgroundColor: '#494CA2',
          color:"white"
        }
      }}
        />
      
        </div>
  )
}
export default Stock;