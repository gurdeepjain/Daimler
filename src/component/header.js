// Header Component

import React, { Component } from "react";
import { Badge, Avatar } from "@material-ui/core";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-light headerBorder px-5">
        <Link className="navbar-brand" to="/">
        <img src="assets/images/logo.png" width="40" height="35" className="d-inline-block align-top" alt="Daimler logo" />
        </Link>      
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">  
            <li className="nav-item  ml-4">
                <Link className="nav-link headerFont px-3" to="/">Roles Access</Link>
            </li>
            <li className="nav-item ml-2" >
              <Link className="nav-link headerFont px-3" to="/ModuleScreen" >Module Setup </Link>
            </li>
            <li className="nav-item ml-2">
            <a className="nav-link headerFont px-3" href="#SystemITSetting">System IT Setting</a>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <Badge badgeContent={4} color="secondary" overlap="circle"> 
              <NotificationsNoneOutlinedIcon style={{height:30, width:25}} />
            </Badge>
            <Avatar className="avatarIcon">G</Avatar>
            <p className="profileText pt-3">Gurdeep Jain <br /><p className="viewText"> View Profile</p></p>
            <ArrowDropDownIcon className="dropdownIcon mb-3"/>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}
