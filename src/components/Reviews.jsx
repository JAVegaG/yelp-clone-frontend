import React from 'react'
import StarRating from './StarRating'



const Reviews = ({ reviews }) => {
    return (
        <div className='row mb-2'>
            {reviews.map(review => {
                return (
                    <div key={review.id} className='col-sm-4'>
                        <div className='card mb-3'>
                            <div className='card-header text-white bg-primary d-flex justify-content-between align-items-center'>
                                <span style={{ maxWidth: '50%' }}>{review.name}</span>
                                <span style={{ maxWidth: '50%' }}><StarRating rating={review.rating} /></span>
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>
                                    {review.content}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Reviews