import React, { Component } from 'react';
import ExperiencesItem from './ExperiencesItem';

import { Parallax } from 'react-parallax';
import Wallpaper1 from '../img/wallpaper2.jpg';

class Experiences extends Component {
    render() {
        return (
            <div id="experiences">
                <Parallax
                    bgImage={Wallpaper1}
                    bgImageAlt="Wall 1"
                    strength={200}
                >
                    <div className="experiencesContenu">
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
                </Parallax>
            </div>
        );
    }
}

export default Experiences;
