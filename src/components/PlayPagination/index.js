import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './style.css';

const PlayPagination = ({ playsPerPage, totalPlays, paginate }) => {
    const pageNumbers = [];


    for (let i = 1; i <= Math.ceil(totalPlays / playsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <Pagination className="paginationStyle">
            {pageNumbers.map(number => (
                <Pagination.Item onClick={() => paginate(number)}>
                    {number}
                </Pagination.Item>
            ))}
        </Pagination>
    )
}

export default PlayPagination;