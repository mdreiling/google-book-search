// Setting imports to needed components
import React, { Component } from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ExAPI from "./utils/externalAPI";
import InAPI from "./utils/internalAPI";
import { BookList, BookListEntry } from "./components/BookList";

class Search extends Component {
    state = {
        books: [],
        bookSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        ExAPI.getBooks(this.state.bookSearch)
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
    };

    // handleSaveClick = ()

    // handleRemoveClick

    render() {
        return (
        <div>
            <Nav />
            <Header />
            <div>
                <SearchBar />
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
