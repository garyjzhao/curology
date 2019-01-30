import React, { Component } from 'react';
import Input from './components/Input';
import Listing from './components/Listing';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        // 403ffcb3b4481da342203f94fb6e937e
        const url =
            'https://api.themoviedb.org/3/search/movie?api_key=403ffcb3b4481da342203f94fb6e937e&query=lord%20of%20the%20rings&page=1&include_adult=false';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data.results,
                });
                console.log(data.results[0]);
            });
    }

    render() {
        const { items } = this.state;

        return (
            <div className="wrapper">
                <h1>Movie Search App</h1>
                <Input placeholder="Enter Movie to Search" />
                <ul className="movie-listing">
                    {items.map((item, i) => (
                        <Listing
                            key={i}
                            title={item.title}
                            overview={item.overview}
                            releaseDate={item.release_date}
                            posterPath={item.poster_path}
                            voteCount={item.vote_count}
                            voteAverage={item.vote_average}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
