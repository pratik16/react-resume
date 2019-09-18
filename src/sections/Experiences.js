import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Experiences extends Component {
  render() {
    let experince = this.props.experince;
    const listItems = experince.map((item, i) => {
      let first_ele = '';
      let first_cls = 'row ';
      if (i === 0) {
        first_ele = <h1>Has done...</h1>;
        first_cls = 'row experiences';
      }
      let second_cls = 'fourplus columns timeline';
      if (i === 1 || i === 0) {
        second_cls = 'fourplus columns timeline longtimeline';
      }
      let res = item.responsibilities;
      var lt = res.map((it, k) => {
        return <li key={k}>{it}</li>
      });
      return <div key={i} className={first_cls}>
        <div className={second_cls}>
          {first_ele}
          <h4>{item.duration}</h4>
        </div>
        <div className="six columns offset-by-one">
          <h2>{item.company}</h2>
          <h3>{item.position}</h3>
          <ul>
            {lt}
          </ul>
        </div>

      </div>
    });
    return (
      <div className="experiences-section">
        {listItems}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    experince: state[0].experince
  }
}
export default connect(mapStateToProps, null)(Experiences);