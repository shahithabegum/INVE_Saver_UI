import React from 'react'
import './Layout.scss'
import Topbar from '../components/tobpar/Topbar'
import SideNav from '../components/sidenav/SideNav'
import { Outlet,Navigate} from 'react-router-dom'
import { Row } from 'react-bootstrap'
const CommonLayout = () => {
  return (
    <div className='commonlayout'>
      <Topbar/>
<div className="containe">
    <div className="nav"><SideNav/></div>
    <div className="others">  
      <Row className="p-0 m-0 main-content"> 
                            {/* {childRoutes.length > 0 && renderRoutes(childRoutes)} */}
                            <Outlet />
                            
                        </Row> 
                        </div>
</div>
    </div>
  )
}

export default CommonLayout