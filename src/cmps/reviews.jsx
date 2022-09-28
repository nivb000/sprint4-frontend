import { Rating } from '../cmps/rating'
import { utilService } from '../services/util.service'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

export var Reviews = ({ reviews, rating }) => {

  const [reviewsModalIsOpen, setReviewsModalIsOpen] = useState(false)

  const handleOnClick = (func) => {
    func()
  }

  const setReviewsModal = () => setReviewsModalIsOpen(prev => !prev)

  const truncate = (input) => input.length > 100 ? `${input.substring(0, 250)}...` : input;

  return (
    <section className="reviews">
      <div className='reviews-rating-container'>
        <Rating ratingCount={reviews.length} rate={rating} />
        <span className='dot-separator'>·</span>
        <span className='reviews-count'>{reviews.length} reviews</span>
      </div>

      {/* <div className='rating-bars'>
        <h1>rating bars</h1>
      </div> */}

      <ul className="reviewers">
        {reviews
          .sort((x, y) => new Date(y.at) - new Date(x.at))
          .slice(0, 6)
          .map((review) => {
            var reviewerImg = require(`../assets/imgs/square-profile-imgs/${utilService.getRandomIntInclusive(1, 20)}.jpg`)
            var d = new Date(review.at)
            return <li className="review">
              <div className="review-content">
                <div className="reviewer-details">
                  <div className="reviewer-details-img">
                    <img src={reviewerImg} alt="reviewer-img" />
                  </div>
                  <div className="reviewer-details-name-date">
                    <span className='reviewer-name'>{review.by.fullname}</span>
                    <div className="review-date">
                      <span>{d.toLocaleString('en-US', { month: 'long', })} </span>
                      <span>{d.getUTCFullYear()}</span>
                    </div>
                  </div>
                </div>
                <div className="review-text">
                  <p>{truncate(review.txt)}</p>
                </div>
                <div className="show-more">
                  {review.txt.length > 100 &&
                    <div className="review-show-more">
                      <span className='review-show-more' onClick={() => handleOnClick(setReviewsModal)}>Show more</span>
                      <KeyboardArrowRightIcon fontSize='small' />
                    </div>
                  }
                </div>
              </div>
            </li>
          })}
      </ul>

      <button className="show-all" onClick={() => handleOnClick(setReviewsModal)}>{`Show all ${reviews.length} reviews`}</button>
      {reviewsModalIsOpen &&
        <div className="reviews-modal">
          <div className="modal-close-btn-container">
            <button className="modal-close-btn" onClick={setReviewsModal}><CloseIcon /></button>
          </div>
          <ul className="reviews-list-modal">
            {reviews
              .sort((x, y) => new Date(y.at) - new Date(x.at))
              .map((review) => {
                var d = new Date(review.at)
                var reviewerImg = require(`../assets/imgs/square-profile-imgs/${utilService.getRandomIntInclusive(1, 20)}.jpg`)
                return <li className="review">
                  <div className="review-content">
                    <div className="reviewer-details">
                      <div className="reviewer-details-img">
                        <img src={reviewerImg} alt="reviewer-img" />
                      </div>
                      <div className="reviewer-details-name-date">
                        <span className='reviewer-name'>{review.by.fullname}</span>
                        <div className="review-date">
                          <span>{d.toLocaleString('en-US', { month: 'long', })} </span>
                          <span>{d.getUTCFullYear()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="review-text">
                      <p>{review.txt}</p>
                    </div>
                  </div>
                </li>
              })}
          </ul>
        </div>
      }
    </section>
  )
}