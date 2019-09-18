import React, { Component } from 'react';
import '../../App.css';

class ProjectSynopsis extends Component {
    render() {
        let ProjectSynopsis = this.props.ProjectSynopsis;
        const listItems = ProjectSynopsis.map((item, i) => {
            return <li key={i}>{item}</li>
        });
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default ProjectSynopsis;