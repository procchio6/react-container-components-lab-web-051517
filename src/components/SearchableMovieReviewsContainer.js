import React, {Component} from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a931353019b34d389468b0833dbf0bcb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: '',
  }

  handleInputChange = (e) => {
    const searchTerm = e.target.value
    this.setState({
      searchTerm
    })
  }

  handleSearch = (e) => {
    e.preventDefault()
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(respJSON => {
      const reviews = respJSON.results
      this.setState({reviews})
    })
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <h1>Search Movie Reviews</h1>
        <form onSubmit={this.handleSearch}>
          <input type='text' onChange={this.handleInputChange}/>
          <button type='submit'>Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
