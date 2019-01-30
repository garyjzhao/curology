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
        const { items, itemsPerPage, currentPage } = this.props;

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        // const test = current === currentPage ? 'current' : '';

        return (
            <ul className="pagination">
                {pageNumbers.map((number, i) => (
                    <li
                        key={i}
                        id={number}
                        onClick={this.handleClick}
                        className={number === currentPage ? 'current' : ''}
                    >
                        {number}
                    </li>
                ))}
            </ul>
        );
    }
}

export default Pagination;
