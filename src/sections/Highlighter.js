import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Highlighter extends Component {
  render() {
    let careerhighlight = this.props.careerhighlight;
    const listItems = careerhighlight.map((item, i) => {
      return <li key={i}><h2>{item}</h2></li>
    });
    return (
      <div className="highlight-section">
        <div className="twelve columns">
          <h1>Career Highlights...</h1>
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
    careerhighlight: state[0].careerhighlight
  }
}
export default connect(mapStateToProps, null)(Highlighter);