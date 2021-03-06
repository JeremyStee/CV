import React, { Component } from 'react';
import LanguesItem from './LanguesItem';

class Langues extends Component {
    render() {
        return (
            <div id="langues">
                <div className="languesContenu">
                    <h1>Langues</h1>
                    <ul>
                        {this.props.data.map((langue) => {
                            return (
                                <LanguesItem key={langue.id} langue={langue} />
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Langues;
