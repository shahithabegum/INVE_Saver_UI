import React,{useState} from 'react'
import SidenavData from './SidenavData'
import SideItem from './SideItem'
import MenuIcon from '@mui/icons-material/Menu';
import './side.css'
const SideNav = () => {
  const [open, setOpen] = useState(false)
  return (
  
    <div className='sidenavmain'>
        <div className='menu p-2 mt-2 mx-0 d-flex '>
      <span  className='icon ml-2 'onClick={e=>setOpen(!open)}><MenuIcon/></span>
        <div className='title ms-1 d-none d-sm-inline ml-3 '>Menu</div>
      </div>
        {SidenavData.map((item,index)=>(<SideItem item={item} />))}
    </div>
  )
}

export default SideNav