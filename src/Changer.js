import React, { Component } from 'react'

class Changer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookState: "Read",
        };
      }

      handleChange = (e) => {
        this.setState({ bookState: e.target.value })
    }

    render() {
        console.log(this.state.bookState)
        return (
            <div className="book-shelf-changer">
                <select value={this.state.bookState} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default Changer