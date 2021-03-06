import React, { Component } from 'react';

import FormationsItem from './FormationsItem';

class Formations extends Component {
    render() {
        return (
            <div id="formations">
                <div className="formationsContenu">
                    <h1>Formations</h1>
                    <ul>
                        {this.props.data.map((formation) => {
                            return (
                                <FormationsItem
                                    key={formation.id}
                                    formation={formation}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Formations;
