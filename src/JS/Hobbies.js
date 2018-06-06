import React, { Component } from 'react';

class Hobbies extends Component {
    render() {
        return (
            <div id="hobbies">
                <h1>Hobbies</h1>
                <p>{this.props.data.musique}</p>
                <p>{this.props.data.sport}</p>
            </div>
        );
    }
}

export default Hobbies;
