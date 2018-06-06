import React, { Component } from 'react';
import '../CSS/App.css';
import CV from '../Cv.json';

import Headbar from './Headbar';
import Formations from './Formations';
import Experiences from './Experiences';
import Competences from './Competences';
import Langues from './Langues';
import Hobbies from './Hobbies';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Headbar />
                <div id="civilite">
                    <p>{CV.nom}</p>
                    <p>{CV.prenom}</p>
                    <p>{CV.mail}</p>
                    <p>{CV.telephone}</p>
                </div>
                <Formations data={CV.formation} />
                <Experiences data={CV.experiences} />
                <Competences data={CV.competences} />
                <Langues data={CV.langues} />
                <Hobbies data={CV.hobbies} />
            </div>
        );
    }
}

export default App;
