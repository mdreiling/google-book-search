import React from "react";

function BookList(props) {
    return (
        <ul className="list-group search-results">
            {props.results.map(result => (
                <li key={result} className="list-group-item">
                Something
                </li>
            ))}
        </ul>
    )
}

export default BookList;