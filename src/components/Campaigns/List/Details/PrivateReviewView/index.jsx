import React from "react";
import Icon from "../../../../../Icons"; // Adjust the path as per your file structure
import "./styles.scss";

const reviews = [
  {
    author: "Alice",
    date: "13/2/2023",
    rating: 5,
    content:
      "Enjoyed every bite! The salmon nigiri was good, and the tuna sashimi was reasonably fresh. Worth a visit for sushi enthusiasts. Extra line: This is an additional line for Alice's review.",
  },
  {
    author: "Bob",
    date: "15/2/2023",
    rating: 4,
    content:
      "The sushi was excellent, especially the sashimi. However, the service could be a bit faster. Extra line: This is an additional line for Bob's review.",
  },
  {
    author: "Alice",
    date: "14/2/2023",
    rating: 5,
    content:
      "Enjoyed every bite! The salmon nigiri was good, and the tuna sashimi was reasonably fresh. Worth a visit for sushi enthusiasts. Extra line: This is an additional line for Alice's review.",
  },
  {
    author: "Bob",
    date: "16/2/2023",
    rating: 4,
    content:
      "The sushi was excellent, especially the sashimi. However, the service could be a bit faster. Extra line: This is an additional line for Bob's review.",
  },
  {
    author: "Alice",
    date: "17/2/2023",
    rating: 5,
    content:
      "Enjoyed every bite! The salmon nigiri was good, and the tuna sashimi was reasonably fresh. Worth a visit for sushi enthusiasts. Extra line: This is an additional line for Alice's review.",
  },
  {
    author: "Bob",
    date: "18/2/2023",
    rating: 4,
    content:
      "The sushi was excellent, especially the sashimi. However, the service could be a bit faster. Extra line: This is an additional line for Bob's review.",
  },
];

const Reviews = () => {
  return (
    <div className="ts-reviews-container">
      <p className="ts-font-heading ts-fw-light">
        Private feedback from our community, exclusively viewable by you.
      </p>

      <div className="ts-review-card-group">
        {reviews.map((review, index) => (
          <div key={index} className="ts-review-card">
            <div className="d-flex align-items-center justify-content-between gap-3 mb-2">
              <div className="d-flex align-items-center gap-3">
                <div>
                  <img
                    width="51"
                    height="51"
                    src="/images/campaign/alist-circle.svg"
                    alt="..."
                  />
                </div>
                <div>
                  <h4 className="ts-fs-4 fw-semibold-heading ts-text-gray-1 mb-1">
                    {review.author}
                  </h4>
                  <div className="d-flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon name="star-2" key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="ts-fs-7 ts-text-gray-8 ts-font-heading ts-fw-light mb-0">
                {review.date}
              </p>
            </div>
            <p className="mb-0 ts-fs-4 ts-font-heading">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
