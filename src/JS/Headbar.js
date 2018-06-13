import React, { Component } from 'react';

class Headbar extends Component {
    render() {
        return (
            <div className="headbar">
                <ul>
                    <li>
                        <a href="#civilite">Accueil</a>
                    </li>
                    <li>
                        <a href="#formations">Formations</a>
                    </li>
                    <li>
                        <a href="#experiences">Expériences</a>
                    </li>
                    <li>
                        <a href="#competences">Compétences</a>
                    </li>
                    <li>
                        <a href="#langues">Langues</a>
                    </li>
                    <li>
                        <a href="#hobbies">Hobbies</a>
                    </li>
                    <li>
                        <a href="#hobbies">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Headbar;
