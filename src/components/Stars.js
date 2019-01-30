import React from 'react';

const Stars = ({ voteAverage, voteCount }) => (
    <div className="listing__stars">
        <span>
            {voteAverage}
            <svg viewBox="0 0 98 92">
                <path
                    stroke="#000"
                    strokeWidth="5"
                    d="M49 73.5L22.55 87.406l5.05-29.453-21.398-20.86 29.573-4.296L49 6l13.225 26.797 29.573 4.297-21.4 20.86 5.052 29.452z"
                    fillRule="evenodd"
                />
            </svg>
        </span>
        /10 on {voteCount} reviews.
    </div>
);

export default Stars;
