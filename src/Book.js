import React, { Component } from 'react'
import Changer from './Changer';

class Book extends Component {
    state = {
        bookState: []
    }

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
                        <Changer />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book