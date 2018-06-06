import React, { Component } from 'react';

class CompetencesItem extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.competence.nom}|{this.props.competence.niveau}
                </p>
            </div>
        );
    }
}

export default CompetencesItem;
