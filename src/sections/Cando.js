import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Cando extends Component {
    render() {
      let cando = this.props.cando;
        const listItems = cando.map((item, i) => {
            return <li key={i}>{item}</li>
          });
        return (
            <div className="cando-section">
                <div className="twelve columns">
                    <h1>CAN DO...</h1>
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
    cando: state[0].cando
  }
}
export default connect(mapStateToProps, null)(Cando);