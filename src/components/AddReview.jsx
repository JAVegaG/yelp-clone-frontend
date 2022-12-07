import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const AddReview = () => {

    const { id } = useParams()

    const [name, setName] = useState('')
    const [reviewText, setReviewText] = useState('')
    const [rating, setRating] = useState('Rating')

    const { addReview } = useContext(RestaurantsContext)

    const { setRestaurant } = useContext(RestaurantsContext)

    const handleSubmitReview = async (e) => {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post(`/${id}/addReview`, {
                name,
                content: reviewText,
                rating
            })
            const restaurantInfo = await RestaurantFinder.get(`/${id}`)
            setRestaurant(restaurantInfo.data.data.restaurant)
            addReview(response.data.data.review)
        } catch (e) { }
    }


    return (
        <div className='mb-2'>
            <form action=''>
                <div className='row align-items-center justify-content-center'>
                    <div className='form-group mb-3 col-8'>
                        <label className='pb-2' htmlFor='name'>Name</label>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id='name'
                            placeholder='name'
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='form-group mb-3 col-4'>
                        <label className='pb-2' htmlFor='rating'>Rating</label>
                        <select
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                            id='rating'
                            className='form-select'
                        >
                            <option disabled>Rating</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                </div>
                <div className='form-group mb-3'>
                    <label className='pb-2' htmlFor='review'>Review</label>
                    <textarea
                        value={reviewText}
                        onChange={e => setReviewText(e.target.value)}
                        id='review'
                        className='form-control'
                    ></textarea>
                </div>
                <div className='form-row text-center d-grid'>
                    <button type='submit' onClick={e => handleSubmitReview(e)} className='btn btn-primary btn-lg btn-block'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddReview