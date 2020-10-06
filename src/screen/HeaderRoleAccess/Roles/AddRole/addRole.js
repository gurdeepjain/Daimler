// Add new role screen 

import React, { Component } from 'react';
import SideNavBar from '../../../../component/sideNavBar'
import './addRole.css'
import { Checkbox } from "@material-ui/core";

export default class AddRole extends Component {
    render() {
        return (
            <div className="row" id="addRole" >
                <SideNavBar />
                <div className="containerStyle col-lg">
                    <p className="roleText">New Role</p>
                    <div>
                        <label htmlFor="fname" className="searchText"> Role Title </label>
                        <br />
                        <input type="text" className="inputText" placeholder="Enter Role Title " />
                        <br />
                    </div>
                    <p className="permissionText">Set Permission Panel</p>
                    <div className="row">
                        <div className="col-md ml-2">
                            <p className="listHeader" >User Function</p>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">Dashboard</label>
                            <br></br>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">Projects</label>
                            <br></br>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">User Status Update</label>
                            <br></br>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">Management Approval</label>
                        </div>
                        <div className="col-md ml-2">
                            <p className="listHeader" >System IT Setting</p>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">Display Setting</label>
                            <br></br>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">Projects</label>
                            <br></br>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">Outgoing Server</label>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md ml-2" >
                            <p className="listHeader" >Roles & Access</p>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">Roles</label>
                            <br></br>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">Access Credential</label>
                        </div>
                        <div className="col-md ml-2">
                            <p className="listHeader" >Module Setup</p>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">New Module</label>
                            <br></br>
                            <Checkbox className="CheckBox" />
                            <label className="li-checkBoxText ">Existing Module</label>
                        </div>
                    </div>
                    <div className="buttonAlign">
                        <button className="buttonUpdate"> Update</button>
                        <button className="buttonCancel">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}
