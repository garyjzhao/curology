import React, { Component } from 'react';
import Input from './components/Input';
import Listing from './components/Listing';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.fetchMovieFromSearchInput = this.fetchMovieFromSearchInput.bind(
            this
        );
        this.state = {
            items: [],
            defaultMovie: 'star wars',
        };
    }

    componentDidMount() {
        const { defaultMovie } = this.state;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=403ffcb3b4481da342203f94fb6e937e&include_adult=false&query=${defaultMovie}`;
        this.fetchApi(url);
    }

    fetchApi(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data.results,
                });
            });
    }

    fetchMovieFromSearchInput(searchInput) {
        const { defaultMovie } = this.state;
        const baseURL =
            'https://api.themoviedb.org/3/search/movie?api_key=403ffcb3b4481da342203f94fb6e937e&include_adult=false&query=';
        const url =
            searchInput === ''
                ? `${baseURL}${defaultMovie}`
                : `${baseURL}${searchInput}`;
        this.fetchApi(url);
    }

    render() {
        const { items } = this.state;

        return (
            <div className="wrapper">
                <h1>Movie Search App</h1>
                <Input
                    placeholder="Enter Movie to Search"
                    fetchMovie={this.fetchMovieFromSearchInput}
                />
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
