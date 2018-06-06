import React, { Component } from 'react';

class LanguesItem extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.langue.nom}|{this.props.langue.niveau}
                </p>
            </div>
        );
    }
}

export default LanguesItem;
