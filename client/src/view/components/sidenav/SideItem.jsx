import React from "react";

import { NavLink } from "react-router-dom";
const SideItem = ({ item }) => {
  return (
    <div className="sidebar-item">
      <NavLink
        to={item.path || "#"}
        className="nav-link  p-2 mt-2 mx-0 d-flex"
        activeclassname="active"
      >
        <span className="icon ml-2">{item.icon}</span>
        <div className="title ms-1 d-none d-sm-inline ml-3 ">{item.title}</div>
      </NavLink>
    </div>
  );
};

export default SideItem;
