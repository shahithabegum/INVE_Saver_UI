import React from "react";
import { Route, Routes } from "react-router-dom";
import {pathRouter} from "./routerParams"
export const renderRoutes=(pathRouter)=>{
    return pathRouter.map((route,index)=>{
        const { path, DynComponent, isExact = true, childRoutes = [] } = route;
        return(
            <Route
            key={route.key || index}
            path={path}
            exact={isExact}
             element ={<DynComponent/>}>
                  {childRoutes.map((childroutes,i)=>{
           
           const { path, DynComponent, isExact = true} = childroutes;
          return <Route    
          key={ i}
          path={path}
           element ={<DynComponent/>}/>
        })}
            </Route>
        )
    })
}
export function RootRoutes(props) {
    return (
      <React.Fragment>
        <Routes>{renderRoutes(pathRouter)}</Routes>
      </React.Fragment>
    );
  }