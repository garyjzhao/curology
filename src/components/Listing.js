import React, { Component } from 'react';
import Stars from './Stars';

export default class Listing extends Component {
    render() {
        const {
            title,
            overview,
            releaseDate,
            posterPath,
            voteCount,
            voteAverage,
        } = this.props;
        let listingImg;

        if (posterPath == null) {
            listingImg = <div className="listing__img no-image">No Image</div>;
        } else {
            listingImg = (
                <img
                    className="listing__img"
                    src={`https://image.tmdb.org/t/p/w154${posterPath}`}
                    alt=""
                />
            );
        }

        return (
            <li>
                {listingImg}
                <div className="listing__copy">
                    <h2>{title}</h2>
                    <p className="listing__date">{releaseDate}</p>
                    <p>{overview}</p>
                    <Stars voteCount={voteCount} voteAverage={voteAverage} />
                </div>
            </li>
        );
    }
}
