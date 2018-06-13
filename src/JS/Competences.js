import React, { Component } from 'react';
import CompetencesItem from './CompetencesItem';

class Competences extends Component {
    render() {
        return (
            <div id="competences">
                <div className="competencesContenu">
                    <h1>Competences</h1>
                    <ul>
                        {this.props.data.map((competence) => {
                            return (
                                <CompetencesItem
                                    key={competence.id}
                                    competence={competence}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Competences;
