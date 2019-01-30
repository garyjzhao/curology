import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const id = Number(event.target.id);
        const { handleClick } = this.props;
        handleClick(id);
    }

    render() {
        const { items, itemsPerPage } = this.props;
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} id={number} onClick={this.handleClick}>
                        {number}
                    </li>
                ))}
            </ul>
        );
    }
}

export default Pagination;
