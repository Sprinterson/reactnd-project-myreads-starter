import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'
import Changer from './Changer'

class Book extends Component {
    static propTypes = {
        bookUpdateShelf: PropTypes.func.isRequired,
    }

    render() {
        const { book } = this.props
        const { books } = this.props
        const bookImage = book.imageLinks

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(
                                ${bookImage
                                    ? bookImage.thumbnail
                                    : " "
                                })`
                        }}></div>
                        <Changer
                            key={uuidv4()}
                            book={book}
                            books={books}
                            bookUpdateShelf={this.props.bookUpdateShelf}
                        />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                        {book.authors
                            ? book.authors.map((author) => (
                                <p key={uuidv4()}>{author}</p>
                            ))
                            : <p key={uuidv4()}>No author</p>
                        }
                    </div>
                </div>
            </li>
        )
    }
}




export default Book