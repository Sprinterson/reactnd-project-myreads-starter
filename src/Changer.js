import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

const options = [
    { value: 'currentlyReading', label: 'Currently Reading' },
    { value: 'wantToRead', label: 'Want to Read' },
    { value: 'read', label: 'Read' },
    { value: 'none', label: 'None' }
]

class Changer extends Component {
    state = {
        shelf: this.props.book.shelf,
    }

    handleChange = (e) => {
        e.preventDefault()
        const { book } = this.props
        const updatedBook = book

        const shelf = e.target.value

        if (this.props.bookUpdateShelf) {
            this.props.bookUpdateShelf(updatedBook, shelf)
        }
    }

    render() {
        const { shelf } = this.state

        return (
            <div className="book-shelf-changer">
                <select
                    value={shelf}
                    onChange={this.handleChange}
                >
                    <option value="move" disabled>Move to...</option>
                    {options.map((option) => (
                        <option
                            key={uuidv4()}
                            value={option.value}
                        >{option.label}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Changer