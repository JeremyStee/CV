import React, { Component } from 'react';
import ExperiencesItem from './ExperiencesItem';

class Experiences extends Component {
    render() {
        return (
            <div id="experiences">
                <h1>Experiences</h1>
                <ul>
                    {this.props.data.map((experience) => {
                        return (
                            <ExperiencesItem
                                key={experience.id}
                                experience={experience}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Experiences;
