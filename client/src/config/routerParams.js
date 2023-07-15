import CommonLayout from "../view/commonLayout/CommonLayout";
import PageNotFound from "../view/components/PageNotFound";
import Dashboard from "../view/components/dashboard/Dashboard";
import CreateDelivery from "../view/components/delivery/CreateDelivery";
import DeliverTable from "../view/components/delivery/DeliverTable";
import UpdateDelivery from "../view/components/delivery/UpdateDelivery";
import ViewDelivery from "../view/components/delivery/ViewDelivery";
import Login from "../view/components/login/Login";
import CreateMaterial from "../view/components/material/CreateMaterial";
import MaterialTable from "../view/components/material/MaterialTable";
import UpdateMaterial from "../view/components/material/UpdateMaterial";
import ViewMaterial from "../view/components/material/ViewMaterial";
import ChangePassword from "../view/components/password/ChangePassword";
import CreateUser from "../view/components/user/CreateUser";
import UpdateUser from "../view/components/user/UpdateUser";
import UserTable from "../view/components/user/UserTable";
import ViewUser from "../view/components/user/ViewUser";

export const pathRouter=[
    {
        path:'/login',
        DynComponent:Login
    },
    {
   
    path:'/',
    DynComponent:CommonLayout,
    isExact:false,
    childRoutes:[
        {
            path: "/dashboard",
            DynComponent: Dashboard
        },
        //---------Material------------
        {
            path:'/material',
            DynComponent: MaterialTable
        },
        {
            path:'/creatematerial',
            DynComponent: CreateMaterial
        },
        {
            path:'/updatematerial',
            DynComponent: UpdateMaterial
        },
        {
            path:'/viewmaterial',
            DynComponent: ViewMaterial
        },
         //---------Delivery------------
         {
            path:'/delivery',
            DynComponent: DeliverTable
        },
        {
            path:'/createdelivery',
            DynComponent: CreateDelivery
        },
        {
            path:'/updatedelivery',
            DynComponent: UpdateDelivery
        },
        {
            path:'/viewdelivery',
            DynComponent: ViewDelivery
        },
        //-------user----------
        {
            path:'/user',
            DynComponent: UserTable
        },
        {
            path:'/createuser',
            DynComponent: CreateUser
        },
        {
            path:'/updateuser',
            DynComponent: UpdateUser
        },
        {
            path:'/viewuser',
            DynComponent: ViewUser
        },
        //---------Changepassword--------
        {
            path:'/changepassword',
            DynComponent: ChangePassword
        }
    ]
},
{
    path: '*',
    isExact: false,
    DynComponent: PageNotFound
}]