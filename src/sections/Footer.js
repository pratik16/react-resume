import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Footer extends Component {
    render() {
        let candidatedata = this.props.candidatedata;
        return (
            <div className="footer-section">
                {candidatedata.fname} {candidatedata.lname} | {candidatedata.email} | {candidatedata.mobile}
              </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        candidatedata: state[0].candidatedata
    }
  }
  export default connect(mapStateToProps, null)(Footer);