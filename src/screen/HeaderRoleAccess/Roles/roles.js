// role Screen

import React, { Component } from "react";
import ListView from "../../../component/moduleListView";
import { Link } from "react-router-dom";
import './roles.css'

export default class Roles extends Component {
    render() {
        return (
            <div id="role" className="col-lg body" >
                <div className="container mt-4">
                    <p className="float-left role-text">
                        <b>Roles</b>
                    </p>
                    <Link to={"/addRole"}>
                        <p className="float-right ml-2 add-Text">Add Role</p>
                        <div className="float-right image-box">
                            <img src="assets/images/plus.png" alt="plus-sign" className="p-2" />
                        </div>
                    </Link>
                </div>
                <br />
                <div className="container moduleInputBox ">
                    <div className="inputBox-container">
                        <label htmlFor="fname" className="searchText"> Search Role </label>
                        <br />
                        <input type="text" className="inputText" placeholder="Enter role name to search" />
                        <br />
                    </div>
                </div>

                <div className="container mt-3">
                    <p className="float-right ml-2 add-Text">Download this List</p>
                    <div className="float-right image-box">
                        <img src="assets/images/download.png" alt="plus-sign" className="p-2" />
                    </div>
                </div>

                <div className="container row statusText">
                    <p className="col-lg-10 aggregateText float-left">Role</p>
                    <p className=" col-lg-2 aggregateText float-right ">Status</p>
                </div>

                <div className="container mb-4">
                    <ListView Name={"Master Admin"} noIcon />
                    <ListView Name={"Main Admin"} noIcon />
                    <ListView Name={"IT Admin"} noIcon />
                    <ListView Name={"Level 4"} noIcon />
                </div>
            </div>
        );
    }
}
