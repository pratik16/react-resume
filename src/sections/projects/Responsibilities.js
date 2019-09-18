import React, { Component } from 'react';
import '../../App.css';

class Responsibilities extends Component {
    render() {
        let responsibilities = this.props.responsibilities;
        const listItems = responsibilities.map((item, i) => {
            return <li key={i}>{item}</li>
        });
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default Responsibilities;