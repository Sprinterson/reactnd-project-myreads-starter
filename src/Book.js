import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Changer from './Changer'

class Book extends Component {
    render() {
        const { book } = this.props
        const backgroundImage = book.imageLinks.thumbnail

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${backgroundImage})`
                        }}></div>
                        <Changer
                            key={uuidv4()}
                            book={book}
                            bookUpdateShelf={this.props.bookUpdateShelf}
                        />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                        {book.authors.map((author) => (
                            <p key={uuidv4()}>{author}</p>
                        ))}
                    </div>
                </div>
            </li>
        )
    }
}




export default Book