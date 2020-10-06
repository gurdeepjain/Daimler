import React, { Component } from 'react';
import SideNavBar from '../../../../component/sideNavBar';
import './accessAddRole.css'

export default class AccessAddRole extends Component {
    render() {
        return (
            <div className="row" id="accessAdd" >
                <SideNavBar />
                <div className="containerView col-lg">
                    <p className="role-text" >Add Role</p>
                    <div className="container moduleInputBox mb-2">
                        <div className="row">
                            <div className="inputBox-container col-lg">
                                <label htmlFor="fname" className="searchText"> First Name </label>
                                <br />
                                <input type="text" className="inputText" placeholder="Enter First name " />
                                <br />
                            </div>
                            <div className="inputBox-container col-lg mr-2">
                                <label htmlFor="fname" className="searchText"> Last Name </label>
                                <br />
                                <input type="text" className="inputText" placeholder="Enter Last name " />
                                <br />
                            </div>
                            <div className="inputBox-container col=lg">
                                <label htmlFor="fname" className="searchText"> Short ID  </label>
                                <br />
                                <input type="text" className="inputText" placeholder="Enter short id " />
                                <br />
                            </div>
                        </div>

                        <div className="row">
                            <div className="inputBox-container col-lg">
                                <label htmlFor="fname" className="searchText"> E-Mail ID </label>
                                <br />
                                <input type="text" className="inputText" placeholder="Enter e-mail id " />
                                <br />
                            </div>
                            <div className="inputBox-container col-lg mr-2">
                                <label htmlFor="fname" className="searchText"> Company  </label>
                                <br />
                                <input type="text" className="inputText" placeholder="Enter company name " />
                                <br />
                            </div>
                            <div className="inputBox-container col=lg">
                                <label htmlFor="fname" className="searchText"> Department </label>
                                <br />
                                <input type="text" className="inputText" placeholder="Enter department name " /> 
                                <br />
                            </div>
                        </div>

                        <div className="row pb-3" >
                            <div className="inputBox-container col-lg">
                                <label htmlFor="fname" className="searchText"> Function </label>
                                <br />
                                <input type="text" className="inputText" placeholder="Enter function " />
                                <br />
                            </div>
                            <div className="inputBox-container col-lg mr-2">
                                <label htmlFor="fname" className="searchText"> Module</label>
                                <br />
                                <input type="text" className="inputText" placeholder="Enter module name " />
                                <br />
                            </div>
                            <div className="inputBox-container col=lg">
                                <label htmlFor="fname" className="searchText"> Role </label>
                                <br />
                                <input type="text" className="inputText" placeholder="Enter role name " />
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="buttonAlign mb-4">
                        <button className="buttonUpdate"> Create User</button>
                        <button className="buttonCancel">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}
