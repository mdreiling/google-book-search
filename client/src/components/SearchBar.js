import React from "react";

function SearchBar(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label>Search by Book Title: </label>
                <input 
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="book-search"
                    type="text"
                    className="form-control"
                    placeHolder="Type in a book title to begin"
                    id="book"    
                />
                <button type="submit" onClick={props.handleFormSubmit} className="button">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchBar;