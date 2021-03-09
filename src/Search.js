import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookUpdateShelf: PropTypes.func.isRequired,
    }

    state = {
        query: '',
        searchResults: [],
    }

    searchBook = (query) => {
        this.setState(() => ({
            query: query,
        }))

        if (query.length > 0) {
            BooksAPI.search(query)
                .then((searchResults) => {
                    this.setState(() => ({
                        searchResults
                    }))
                })

        } else {
            this.setState(() => ({
                searchResults: [],
            }))
        }
    }

    clearQuery = () => {
        this.updateQuery('')
        this.setState(() => ({
            searchResults: [],
        }))
    }

    render() {
        const { books } = this.props
        const { query } = this.state
        const { searchResults } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className="close-search"
                    ></Link>

                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.searchBook(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResults.length > 0
                            ? searchResults.map((book) => (
                                <Book
                                    key={uuidv4()}
                                    book={book}
                                    books={books}
                                    bookUpdateShelf={this.props.bookUpdateShelf}
                                />
                            ))
                            : <li>No results</li>
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search