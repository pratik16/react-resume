import React, { Component } from 'react';
import '../../App.css';

class Challenges extends Component {
    render() {
        let challenges = this.props.challenges;
        const listItems = challenges.map((item, i) => {
            return <li key={i}>{item}</li>
        });
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default Challenges;