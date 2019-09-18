import React, { Component } from 'react';
import '../../App.css';

class ProjectPosition extends Component {
    render() {
        let position = this.props.position;
        const listItems = position.map((item, i) => {
            return <li key={i}>{item}</li>
        });
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default ProjectPosition;