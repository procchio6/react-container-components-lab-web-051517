import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a931353019b34d389468b0833dbf0bcb';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  componentWillMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(respJSON => this.setState({reviews: respJSON.results}))
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
