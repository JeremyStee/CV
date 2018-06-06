import React, { Component } from 'react';

class FormationsItem extends Component {
    render() {
        console.log(this.props.formation);
        return (
            <div>
                <p>
                    {this.props.formation.intitule} |
                    {this.props.formation.etablissement} |
                    {this.props.formation.ville}|
                    {this.props.formation.annee}
                </p>
                <p>{this.props.formation.autre}</p>
            </div>
        );
    }
}

export default FormationsItem;
