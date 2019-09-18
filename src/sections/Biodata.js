import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Biodata extends Component {
    render() {
       let candidatedata = this.props.candidatedata;
        return (
            <div className="biodata-section">
            <div className="nine columns">
              <h1>Resume: Candidate Data</h1>
              <ul>
                <li><h2>Full Name:</h2> <h4>{candidatedata.name}</h4></li>
                <li><h2>Residency:</h2> <h4>{candidatedata.residency}</h4></li>
                <li><h2>Related Studies:</h2> <h4>{candidatedata.relatedstudies}</h4></li>
                <li><h2>Address:</h2> <h4>{candidatedata.address}</h4></li>
                <li><h2>E-mail:</h2> <h4>{candidatedata.email}</h4></li>
                <li><h2>Skype ID:</h2> <h4>{candidatedata.skype}</h4></li>
                <li><h2>Mobile:</h2> <h4>{candidatedata.mobile}</h4></li>
              </ul>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    candidatedata: state[0].candidatedata
  }
}
export default connect(mapStateToProps, null)(Biodata);