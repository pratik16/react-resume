import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import ProjectSynopsis from './projects/ProjectSynopsis';
import ProjectPosition from './projects/ProjectPosition';
import Responsibilities from './projects/Responsibilities';
import Challenges from './projects/Challenges';

class Projects extends Component {
    render() {
        let projects = this.props.projects;
        const listItems = projects.map((item, i) => {
            let first_ele = '';
            if (i === 0) {
                first_ele = <h1>Projects...</h1>;
            }
            return <div key={i}>
                {first_ele}
                <span>{item.name}</span>
                <table>
                    <tbody>
                        <tr>
                            <td>Client</td>
                            <td>{item.client}</td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>{item.Duration}</td>
                        </tr>
                        <tr>
                            <td>Project synopsis</td>
                            <td><ProjectSynopsis ProjectSynopsis={item.project_synopsis} /></td>
                        </tr>
                        <tr>
                            <td>My Position</td>
                            <td><ProjectPosition position={item['My Position']} /></td>
                        </tr>
                        <tr>
                            <td>Responsibilities</td>
                            <td><Responsibilities responsibilities={item.Responsibilities} /></td>
                        </tr>
                        <tr>
                            <td>Main Challenges</td>
                            <td><Challenges challenges={item['Main Challenges']} /></td>
                        </tr>
                        <tr>
                            <td>Tools and technologies</td>
                            <td>{item['Tools and technologies']}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        });
        return (
            <div className="projects-section">
                <div className="twelve columns header">
                    {listItems}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state[0].projects
    }
}
export default connect(mapStateToProps, null)(Projects);