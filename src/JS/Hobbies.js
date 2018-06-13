import React, { Component } from 'react';

class Hobbies extends Component {
    render() {
        return (
            <div id="hobbies">
                <div className="hobbiesContenu">
                    <h1>Hobbies</h1>
                    <p>{this.props.data.musique}</p>
                    <p>{this.props.data.sport}</p>
                </div>
            </div>
        );
    }
}

export default Hobbies;
