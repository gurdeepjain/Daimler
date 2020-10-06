// component for set il gates
import React from "react";
import { Checkbox } from "@material-ui/core";

class SetIlGatesComponent extends React.Component {
  render() {
    return (
      <div className="row ">
        <p className="set-inputText pl-3 col-lg-1.5">
          <b> IL Gate {this.props.index} </b>
        </p>
        <div className="inputBoxContainer col-lg-4">
          <label htmlFor="ilGates" className="searchText">
            IL Gate Description <b style={{ color: "red" }}>*</b>
          </label>
          <br />
          <input type="text" name={`document-${this.props.index}-document`} className="il-input" placeholder="Project Name" autoComplete="off" required />
          <br />
        </div>
        <div className="col-lg-6.5 li-checkBoxMargin">
          <Checkbox style={{ color: "#343A52", marginLeft: 10 }} />
          <label className="li-checkBoxText ">Start Date</label>
          <Checkbox style={{ color: "#343A52", marginLeft: 10 }} />
          <label className="li-checkBoxText ">End Date</label>
          <Checkbox style={{ color: "#343A52", marginLeft: 10 }} />
          <label className="li-checkBoxText ">Document Upload</label>
          <Checkbox style={{ color: "#343A52", marginLeft: 10 }} />
          <label className="li-checkBoxText ">Deviation/Approval</label>
        </div>
      </div>
    );
  }
}


// Main Screen

class SetIlGates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
      count: 1,
    }
    this.add = this.add.bind(this);
  }

  add() {
    const documents = this.state.documents.concat(SetIlGatesComponent);
    this.setState({ documents });
  }

  // Add Input
  render() {
    const documents = this.state.documents.map((Element, index) => {
      return <Element key={index} index={index + 5} />
    });

    return (
      <div className="container containerColor  py-2">
        <SetIlGatesComponent index={this.state.count + 0} />
        <SetIlGatesComponent index={this.state.count + 1} />
        <SetIlGatesComponent index={this.state.count + 2} />
        <SetIlGatesComponent index={this.state.count + 3} />
        { documents}
        <div className="row">
          <button onClick={this.add} className="set-AddInput" >
            <img src="assets/images/plus.png" alt="plus-sign" className="image-box p-2" />
          </button>
          <p className=".set-addText mt-4" ><b>Add Input</b></p>
        </div>
      </div>
    )
  }
}
export default SetIlGates
