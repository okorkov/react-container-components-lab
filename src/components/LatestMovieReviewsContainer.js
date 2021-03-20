import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {

  state = {
    reviews: [{text: 'first'}, {text: 'second'}, {text: 'third'}],
    reviewsTwo: []
  }

  componentDidMount() {
    fetch(URL).then(response => response.json()).then(data => {
      this.setState({
        reviewsTwo: data
      })
    })
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
        </div>
    )
  }
}

export default LatestMovieReviewsContainer;