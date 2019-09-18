import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Activities extends Component {
    render() {
        let otheractivities = this.props.otheractivities;
        const listItems = otheractivities.map((item, i) => {
            return <li key={i}><h2>{item}</h2></li>
          });
        return (
            <div className="highlight-section">
                <div className="twelve columns">
                    <h1>Other Activities...</h1>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        otheractivities: state[0].otheractivities
    }
  }
  export default connect(mapStateToProps, null)(Activities);