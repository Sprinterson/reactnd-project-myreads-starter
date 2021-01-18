import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
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

	render() {
		console.log(this.state.books);
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
									<Shelf
										shelfTitle={"Currently Reading"}
									/>
									<Shelf
										shelfTitle={"Want to Read"}
									/>
									<Shelf
										shelfTitle={"Read"}
									/>
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
						/>
					)} />
				</div>
			</BrowserRouter>
		)
	}
}

export default BooksApp
