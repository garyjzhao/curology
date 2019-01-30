import React, { Component } from 'react';
import Input from './components/Input';
import Listing from './components/Listing';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import './styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.fetchMovieFromSearchInput = this.fetchMovieFromSearchInput.bind(
            this
        );
        this.changePage = this.changePage.bind(this);
        this.state = {
            items: [],
            defaultMovie: 'star wars',
            currentPage: 1,
            itemsPerPage: 3,
        };
    }

    componentDidMount() {
        const { defaultMovie } = this.state;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=403ffcb3b4481da342203f94fb6e937e&include_adult=false&query=${defaultMovie}`;
        this.fetchApi(url);
    }

    changePage(event) {
        this.setState({
            currentPage: event,
        });
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
            searchInput === '' || searchInput === ' '
                ? `${baseURL}${defaultMovie}`
                : `${baseURL}${searchInput}`;
        this.fetchApi(url);
        this.changePage(1);
    }

    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic to figure out which items to display on page
        // according to how many items per page (default: 3) and
        // the last item of that ammount
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexofFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = items.slice(indexofFirstItem, indexOfLastItem);

        return (
            <>
                <div className="wrapper">
                    <h1>Movie Search App</h1>
                    <Input
                        placeholder="Enter Movie to Search"
                        fetchMovie={this.fetchMovieFromSearchInput}
                    />
                    <Pagination
                        items={items}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        handleClick={this.changePage}
                    />
                    <ul className="movie-listing">
                        {currentItems.map((item, i) => (
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
                <Footer />
            </>
        );
    }
}

export default App;
