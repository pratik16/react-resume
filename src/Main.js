import React, { Component } from 'react';
import './App.css';
import Header from './sections/Header';
import Menu from './sections/Menu';
import Biodata from './sections/Biodata';
import Highlighter from './sections/Highlighter';
import Skills from './sections/Skills';
import Activities from './sections/Activities';
import Experiences from './sections/Experiences';
import Cando from './sections/Cando';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Footer from './sections/Footer';

class Main extends Component {
    render() {
        //<Menu />
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="maincontent">
                        <div className="row">
                            <Biodata />
                        </div>
                        <div className="row highlight">
                            <Highlighter />
                        </div>
                        <div className="row skills">
                            <Skills />
                        </div>
                        <div className="row others">
                            <Activities />
                        </div>
                        <Experiences />
                        <div className="row cando">
                            <Cando />
                        </div>
                        <div className="row projects">
                            <Projects />
                        </div>
                        <div className="row education">
                            <Education />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Main;