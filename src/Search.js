import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book';

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }

    state = {
        query: '',
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
    }

    clearQuery = () => {
        this.updateQuery('')
    }

    render() {
        const { query } = this.state
        const { books } = this.props

        const showingBooks = query === ''
            ? books
            : books.filter((b) => (
                b.title.toLowerCase().includes(query.toLowerCase()) ||
                b.authors[0].toLowerCase().includes(query.toLowerCase())
            ))

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
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <Book
                                key={book.id}
                                book={book}
                                bookUpdateShelf={this.props.bookUpdateShelf}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search