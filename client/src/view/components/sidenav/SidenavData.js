import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GroupIcon from '@mui/icons-material/Group';
import LockResetIcon from '@mui/icons-material/LockReset';
const SidenavData =[
    {
        path:"/dashboard",
        title:"Dashboard",
        icon:<DashboardIcon/>
    },
    {
        path:"/material",
        title:"Material",
        icon:<ProductionQuantityLimitsIcon/>
    },
    {
        path:"/delivery",
        title:"Delhivery",
        icon:<LocalShippingIcon/>
    },
    {
        path:"/user",
        title:"User Details",
        icon:<GroupIcon/>
    },
    {
        path:"/changepassword",
        title:"Change Password",
        icon:<LockResetIcon/>
    },
]

export default SidenavData