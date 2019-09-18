import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Header extends Component {
    render() {
        let header = this.props.header;
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="nine columns">
                            <h1>{header.name}</h1>
                            <h2>{header.qualification1} | {header.qualification2}</h2>
                        </div>
                        <div className="three columns pic">
                            <img className="profile" src="pratikvanol.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        header: state[0].header
    }
}
export default connect(mapStateToProps, null)(Header);