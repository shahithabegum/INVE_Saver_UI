import React,{useEffect, useMemo, useState} from 'react'
import MaterialReactTable from 'material-react-table';
import {getallUsers,delete_User} from '../../../service/UserService'
import { Box, IconButton } from '@mui/material';
import {useNavigate } from 'react-router-dom'
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { Model } from '../../../shared/Model';
 import ViewUser from './ViewUser';
import { Button } from 'react-bootstrap';

const UserTable = () => {
    let navigate =useNavigate()
    const [userdata, setUserdata] = useState([])
    const [show, setShow] = useState(false);
    const [value, setValue] = useState([]);
    useEffect(() => {
      User()
    }, [])
    const User = ()=>{
        getallUsers().then((res)=>setUserdata(res.data.result))
    }
    const columns = useMemo(
      () => [
        {
          accessorKey: 'username', //access nested data with dot notation
          header: 'User Name',
        },
       
        {
          accessorKey: 'email',
          header: 'Email',
      },
        {
            accessorKey: 'role',
            header: 'Role',
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
      navigate('/updateuser',{state:item})
    }
    const goDelete =(item)=>{
      console.log("item2",item)
      console.log(item._id)
      delete_User(item._id).then(console.log("deleted"))
    }
   console.log("userdata",userdata)
   console.log("value",value)
   const handleClick = ()=>{
    navigate('/createuser')
   }
return (
  <div className='container'>
       <h3 className="Title text-left my-2 mx-1">User Details</h3>
       <Button className='btn btn-info my-2' onClick={()=>{handleClick()}}>Add</Button>
      <MaterialReactTable columns={columns} data={userdata}
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
     <ViewUser onHide={()=>{setShow(false)}}  item={value}/>

    </Model>
      </div>
)
}

export default UserTable