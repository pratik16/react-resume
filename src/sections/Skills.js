import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Skills extends Component {
  render() {
    let skills = this.props.skills;
    const listItems = skills.map((item, i) => {
      let bar_count = "chart__bar chart_bar_" + item.point;
      let bar_name = item.name;
      return <li key={i} className={bar_count}>
                <span className="chart__label">
                  <p>{bar_name}</p>
                </span>
              </li>
    });
    return (
      <div className="skills-section">
        <div className="twelve columns">
          <h1>Skills...</h1>
          <div className="chart chart--prod">
            <ul className="chart--horiz">
              {listItems}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    skills: state[0].skills
  }
}
export default connect(mapStateToProps, null)(Skills);