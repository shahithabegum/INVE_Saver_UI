import React,{useEffect, useMemo, useState} from 'react'
import MaterialReactTable from 'material-react-table';
import {getAllDelivery,delete_Delivery} from '../../../service/DeliveryService'
import { Box, IconButton } from '@mui/material';
import {useNavigate } from 'react-router-dom'
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { Model } from '../../../shared/Model';
import ViewDelivery from './ViewDelivery';
import { Button } from 'react-bootstrap';

const DeliverTable = () => {
    let navigate =useNavigate()
    const [deliverydata, setDeliverydata] = useState([])
    const [show, setShow] = useState(false);
    const [value, setValue] = useState([]);
    useEffect(() => {
      delivery()
    }, [])
    const delivery = ()=>{
        getAllDelivery().then((res)=>setDeliverydata(res.data.result))
    }
    const columns = useMemo(
      () => [
        {
          accessorKey: 'materialname', //access nested data with dot notation
          header: 'Material Name',
        },
        {
            accessorKey: 'vasselname', //access nested data with dot notation
            header: 'Vassel Name',
          },
        {
          accessorKey: 'date',
          header: 'Purchase Date',
          Cell:({cell})=>{
            return <div>{new Date(cell.getValue()).toLocaleDateString()}</div>
          },
      },
        {
            accessorKey: 'quantity',
            header: 'Quantity',
          },
      
      ],
      [],
    );
    // const goView =(item)=>{
    //   console.log("item",item)
    //   navigate('/viewmaterial',{state:item})
    // }
    const goEdit =(item)=>{
      console.log("item",item)
      navigate('/updatedelivery',{state:item})
    }
    const goDelete =(item)=>{
      console.log("item2",item)
      console.log(item._id)
      delete_Delivery(item._id).then(console.log("deleted"))
     // navigate('/viewmaterial',{state:item})
    }
   console.log("stockdata",deliverydata)
   console.log("value",value)
   const handleClick = ()=>{
    navigate('/createdelivery')
   }
return (
  <div className='container'>
       <h3 className="Title text-left my-2 mx-1">Material Delivery Details</h3>
       <Button className='btn btn-info my-2' onClick={()=>{handleClick()}}>Add</Button>
      <MaterialReactTable columns={columns} data={deliverydata}
       enableStickyHeader
    muiTableContainerProps={{ sx: { maxHeight: '500px' } }}
    
  //   enableRowSelection
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
    enableRowActions
    renderRowActions={({ row, table }) => (
      <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
        <IconButton
          color="primary"
          onClick={()=>{
           setValue(row.original)
           setShow(true)
          }}
        >
          <VisibilityIcon />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={()=>{
            goEdit(row.original)
        }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="error"
          onClick={()=>{
            goDelete(row.original)
        }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    )}
      />
    <Model  show={show}
     onHide={()=>{setShow(false)}}
     title={<h2 className=" Title ml-2">View Product</h2>}
     >
     <ViewDelivery onHide={()=>{setShow(false)}}  item={value}/>

    </Model>
      </div>
)
}

export default DeliverTable