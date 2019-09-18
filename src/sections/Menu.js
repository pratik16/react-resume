import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';


class Menu extends Component {
    render() {
        let menu = this.props.menu;
        const listItems = menu.map((item, i) => {
            let link = "#" + item.tag;
            let name = item.name;
            // return <li key={i}><NavLink to={{ link }}>{name}</NavLink></li>;
            return <li key={i}><a href={link}>{name}</a></li>;
        });
        return (
            <div className="topmenu-section" id="navbar">
                <div>
                    <ul className="nav">
                        {listItems}
                    </ul>
                </div >
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        menu: state[0].menu
    }
}
export default connect(mapStateToProps, null)(Menu);