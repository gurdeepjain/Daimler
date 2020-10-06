// Main screen render in role and access

import React, { Component } from 'react';
import SideNavBar from '../../../component/sideNavBar';
import Roles from '../Roles/roles'

export default class RoleAndAccess extends Component {
    render() {
        return (
            <div >
                <div className="row">
                    <SideNavBar />
                    <Roles /> 
                </div>
            </div>
        );
    }
}


