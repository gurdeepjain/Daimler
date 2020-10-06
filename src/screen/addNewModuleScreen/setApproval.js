// Component for Set Approval Screen
import React, { Component } from 'react';

class SetApprovalComponent extends Component {
    render() {
        return (
            <div className="row">
                <p className="col-lg-1.5 set-inputText ml-3"><b>Approver {this.props.index}</b></p>
                <div className=" col-lg-4 ml-5" >
                    <label htmlFor="fname" className="searchText">Approver Description <b style={{ color: 'red' }}>*</b></label>
                    <br />
                    <input type="text" id="fname" name="fname" className="set-inputField" placeholder="Project Name" autoComplete="off" required />
                    <br />
                </div>

                <div className="col-lg-4 ml-5">
                    <label htmlFor="fname" className="searchText">Short ID  <b style={{ color: 'red' }}>*</b></label>
                    <br />
                    <input type="text" id="fname" name="fname" className="set-inputField search-image mb-3" style={{ backgroundImage: 'url(assets/images/search.png)' }} placeholder="Enter Short Id to search" autoComplete="off" />
                </div>
            </div>
        );
    }
}




// Main Screen
export default class SetApproval extends Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: [],
            count: 1,
        }
        this.add = this.add.bind(this);
    }


    // Add Inputs 
    add() {
        const documents = this.state.documents.concat(SetApprovalComponent);
        this.setState({ documents });
    }

    render() {
        const documents = this.state.documents.map((Element, index) => {
            return <Element key={index} index={index + 5} />
        });
        return (
            <div className="container containerColor py-2">
                <SetApprovalComponent index={this.state.count + 0} />
                <SetApprovalComponent index={this.state.count + 1} />
                <SetApprovalComponent index={this.state.count + 2} />
                <SetApprovalComponent index={this.state.count + 3} />
                { documents}
                <div className="row">
                    <button onClick={this.add} className="set-AddInput" >
                        <img src="assets/images/plus.png" alt="plus-sign" className="image-box p-2" />
                    </button>
                    <p className=".set-addText mt-4" ><b>Add Input</b></p>
                </div>
            </div>
        );
    }
}
