import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const searchInput = event.target.value;
        const { fetchMovie } = this.props;
        fetchMovie(searchInput);
    }

    render() {
        const { placeholder } = this.props;
        return (
            <input
                type="text"
                placeholder={placeholder}
                onChange={this.handleChange}
            />
        );
    }
}

export default Input;
