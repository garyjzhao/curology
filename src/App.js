import React, { Component } from 'react';
import Input from './components/Input';
import Listing from './components/Listing';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            items: [],
            isLoaded: false,
            searchQuery: '',
        };
    }

    componentDidMount() {
        // 403ffcb3b4481da342203f94fb6e937e
        // https://api.themoviedb.org/3/search/movie?api_key=403ffcb3b4481da342203f94fb6e937e&query=${searchQuery}
        const url =
            'https://api.themoviedb.org/3/search/movie?api_key=403ffcb3b4481da342203f94fb6e937e&query=lord%20of%20the%20rings';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data.results,
                });
                console.log(data.results[0]);
            });
    }

    handleChange(searchInput) {
        this.setState({
            searchQuery: searchInput,
        });
    }

    render() {
        const { items, searchQuery } = this.state;

        return (
            <div className="wrapper">
                <h1>Movie Search App</h1>
                <p>{searchQuery}</p>
                <Input
                    placeholder="Enter Movie to Search"
                    inputChange={this.handleChange}
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
