import React from "react";
import Icon from "../../../../../Icons"; // Adjust the path as per your file structure
import "./styles.scss";
const reviews = [
  {
    author: "Alice",
    date: "13/2/2023",
    rating: 5,
    content:
      "Loved every bite! The salmon nigiri was divine, and the tuna sashimi was incredibly fresh. A must-visit for sushi enthusiasts!",
  },
  {
    author: "Bob",
    date: "15/2/2023",
    rating: 4,
    content:
      "Had a wonderful dinner at Fujiyama Sushi. The maki rolls were a flavor explosion, and the setting was cozy and elegant.",
  },
  {
    author: "Alice",
    date: "14/2/2023",
    rating: 5,
    content:
      "The yellowtail sashimi was perfect, and the special rolls were a tasty surprise. Exceptional service too!",
  },
  {
    author: "Bob",
    date: "16/2/2023",
    rating: 4,
    content:
      "Found a gem at Fujiyama. The sushi is top-notch, especially the chef's special roll. Great for a special night out.",
  },
  {
    author: "Alice",
    date: "17/2/2023",
    rating: 5,
    content:
      "Incredible experience at Fujiyama Sushi! The chef's selection was out of this world - fresh, flavorful, and beautifully presented.",
  },
  {
    author: "Bob",
    date: "18/2/2023",
    rating: 4,
    content:
      "Every dish was a treat. The fusion rolls were innovative and delicious, and the ambiance added to the exquisite experience. Highly recommended!",
  },
];

const Reviews = () => {
  return (
    <div className="ts-reviews-container">
      <div className="ts-review-card-group">
        {reviews.map((review, index) => (
          <div key={index} className="ts-review-card">
            <div className="d-flex align-items-center justify-content-between gap-3 mb-2">
              <div className="d-flex align-items-center gap-3">
                <div>
                  <img
                    width="51"
                    height="51"
                    src="/images/campaign/google-circle.svg"
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
