import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ModuleScreen from './component/moduleSetup'
import Header from './component/header';
import AddNewModule from './component/addNewModule'
import RoleAndAccess from './screen/HeaderRoleAccess/RoleAndAccess/roleAndAccess'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddRole from './screen/HeaderRoleAccess/Roles/AddRole/addRole';
import Roles from './screen/HeaderRoleAccess/Roles/roles';
import AccessCredential from './screen/HeaderRoleAccess/AccessCredential/accessCredential';
import AccessAddRole from './screen/HeaderRoleAccess/AccessCredential/AccessAddRole/accessAddRole'




function App() {
    return (
      <div>  
        <Router>
        <Header />
          <Switch>
            <Route exact path="/ModuleScreen" component={ModuleScreen} />
            <Route exact path="/" component={RoleAndAccess} />
            <Route exact path="/AddNewModule" component={AddNewModule} />
            <Route exact path="/AddRole" component={AddRole} />
            <Route exact path="/Role" component={Roles} />
            <Route exact path="/AccessCredential" component={AccessCredential} />
            <Route exact path="/AccessAddRole" component={AccessAddRole} />
          </Switch>
        </Router>
      </div>
    );
  }

  export default App;
