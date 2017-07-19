import React from 'react';

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div
      key={headline}
      className="review"
    >
    </div>
  );
};


MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
