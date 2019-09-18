import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Education extends Component {
    render() {
        let education = this.props.education;
        const listItems = education.map((item, i) => {
            return <li key={i}><span>{item.collage} ({item.year})</span>, {item.university}, {item.grade}</li>
          });
        return (
            <div className="education-section">
                <div className="nine columns header">
                    <h1>Education</h1>
                </div>
                <div className="nine columns offset-by-one">
                    <h3>College / University</h3>
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
        education: state[0].education
    }
  }
  export default connect(mapStateToProps, null)(Education);