import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import inAPI from "../utils/internalAPI";

class BookDetail extends Component {
    state = {
        book: {}
    };

    componentDidMount() {
        inAPI.getBook(this.props.match.params.id)
            .then(res => this.setState({ book:res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <h1>
                        {this.state.book.title} by {this.state.book.authors}
                    </h1>
                </div>
                <div>
                    {/* <Link to="/">Back to Search</Link> */}
                </div>
            </div>
        )
    }
}

export default BookDetail;