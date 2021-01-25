import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'
import Book from './Book';

class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        bookUpdateShelf: PropTypes.func.isRequired,
    }

    render() {
        const { books } = this.props
        const { label } = this.props.shelf
        const { value } = this.props.shelf

        const shelfbooks = books.filter((b) => (
            b.shelf.includes(value)
        ))

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{label}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelfbooks.map((book) => (
                            <Book
                                key={uuidv4()}
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

export default Shelf