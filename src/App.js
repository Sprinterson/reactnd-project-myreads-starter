import React from 'react'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Shelf from './Shelf'

class BooksApp extends React.Component {
	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {
				this.setState(() => ({
					books
				}))
			})
	}

	bookUpdateShelf = (updatedBook, shelf) => {

		if (this.state.books.find(book => book.id === updatedBook.id)) {
			const bookToUpdate = this.state.books.find(book => book.id === updatedBook.id)
			bookToUpdate.shelf = shelf

			this.setState(prevState => (
				prevState.books.map(book => {
					return book.id === updatedBook.id ? bookToUpdate : book
				})
			))

			BooksAPI.update(updatedBook, shelf)
		}

		else {
			this.setState(prevState => (
				prevState.books.concat([updatedBook])
			))

			BooksAPI.update(updatedBook, shelf)
			BooksAPI.getAll()
			.then((books) => {
				this.setState(() => ({
					books
				}))
			})
		}


	}

	render() {
		const shelves = [
			{ value: 'currentlyReading', label: 'Currently Reading' },
			{ value: 'wantToRead', label: 'Want to Read' },
			{ value: 'read', label: 'Read' },
		]

		return (
			<BrowserRouter>
				<div className="app">
					<Route exact path='/' render={() => (
						<div className="list-books">
							<div className="list-books-title">
								<h1>MyReads</h1>
							</div>
							<div className="list-books-content">
								<div>
									{shelves.map((shelf) => (
										<Shelf
											key={uuidv4()}
											shelf={shelf}
											books={this.state.books}
											bookUpdateShelf={this.bookUpdateShelf}
										/>
									))}
								</div>
							</div>
							<div className="open-search">
								<Link
									to='/search'
								>Add a book</Link>
							</div>
						</div>
					)} />

					<Route path='/search' render={() => (
						<Search
							books={this.state.books}
							bookUpdateShelf={this.bookUpdateShelf}
						/>
					)} />
				</div>
			</BrowserRouter >
		)
	}
}

export default BooksApp
