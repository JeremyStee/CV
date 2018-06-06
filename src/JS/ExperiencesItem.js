import React, { Component } from 'react';

class ExperiencesItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            technos: this.props.experience.technos
        };
    }
    componentWillMount() {
        this.affichageTechnos();
    }
    affichageTechnos() {
        let technos = this.state.technos;
        for (var i = 0; i < technos.length; i++) {
            if (i !== technos.length - 1) {
                technos[i] += ',';
            }
        }
        this.setState({ technos: technos });
    }
    render() {
        return (
            <div>
                <p>
                    {this.props.experience.employeur}|
                    {this.props.experience.poste}|
                    {this.props.experience.duree}|
                    {this.props.experience.annee}
                </p>
                <p>{this.props.experience.typeApp}</p>
                <p>{this.props.experience.description}</p>
                <p>{this.props.experience.technos}</p>
            </div>
        );
    }
}

export default ExperiencesItem;
