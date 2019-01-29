import React, { Component } from 'react';

export default class Listing extends Component {
    render() {
        const { title, overview, releaseDate, posterPath } = this.props;
        return (
            <li>
                <img
                    className="listing__img"
                    src={`https://image.tmdb.org/t/p/w154${posterPath}`}
                    alt=""
                />
                <div className="listing__copy">
                    <h2>{title}</h2>
                    <p>{releaseDate}</p>
                    <p>{overview}</p>
                </div>
            </li>
        );
    }
}
