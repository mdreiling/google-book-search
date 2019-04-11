// Setting imports to needed components
import React, { Component } from 'react';
import Nav from "../components/Nav";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import InAPI from "../utils/internalAPI";
import BookList from "../components/BookList";
import BookListEntry from "../components/BookListEntry";

class Search extends Component {
    state = {
        books: []
    };

    // handleSaveClick = ()

    // handleRemoveClick

    render() {
        return (
        <div>
            <Nav />
            <Header />
            <div>
                <SearchBar 
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}    
                />
                {!this.state.books.length ? (
                    <h2 className="center-align">No Books to Display</h2>
                ) : (
                    <BookList>
                        {this.state.books.map(book => {
                            return (
                                <BookListEntry 
                                    key={book.title}
                                    title={book.title}
                                    authors={book.authors}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    save={this.handleSaveClick}
                                    remove={this.hanldeRemoveClick}
                                />
                            );
                        })}
                    </BookList>
                )}
            </div>
        </div>
        );
    }
}

export default Search;
