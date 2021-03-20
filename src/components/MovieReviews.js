// Code MovieReviews Here
import React from 'react';


const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => {
        return (
          <div className="review">
            here is review
          </div>
        )
      })}
    </div>
  )
}

export default MovieReviews;