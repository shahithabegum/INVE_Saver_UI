import CommonLayout from "../view/commonLayout/CommonLayout";
import PageNotFound from "../view/components/PageNotFound";
import Dashboard from "../view/components/dashboard/Dashboard";

export const pathRouter=[{
   
    path:'/',
    DynComponent:CommonLayout,
    isExact:false,
    childRoutes:[
        {
            path: "/dashboard",
            DynComponent: Dashboard
        },
    ]
},
{
    path: '*',
    isExact: false,
    DynComponent: PageNotFound
}]