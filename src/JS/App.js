import React, { Component } from 'react';
import '../CSS/App.css';
import CV from '../Cv.json';

import { Parallax } from 'react-parallax';

import PortraitImg from '../img/portrait.jpg';
import Wallpaper from '../img/work-desk.jpg';

import Headbar from './Headbar';
import Formations from './Formations';
import Experiences from './Experiences';
import Competences from './Competences';
import Langues from './Langues';
import Hobbies from './Hobbies';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Headbar />
                <div className="container">
                    <Parallax
                        bgImage={Wallpaper}
                        bgImageAlt="Wall 1"
                        strength={600}
                    >
                        <div id="civilite">
                            <div className="civiliteContenu">
                                <h1 className="prenom">{CV.prenom}</h1>
                                <div className="portrait">
                                    <img alt="Portrait" src={PortraitImg} />
                                </div>
                                <br />
                                <h1>{CV.nom}</h1>
                                <br />
                                <h2>{CV.poste}</h2>
                            </div>
                        </div>
                    </Parallax>
                    <Formations data={CV.formation} />
                    <Experiences data={CV.experiences} />
                    <Competences data={CV.competences} />
                    <Langues data={CV.langues} />
                    <Hobbies data={CV.hobbies} />
                    <Contact />
                </div>
            </div>
        );
    }
}

export default App;
