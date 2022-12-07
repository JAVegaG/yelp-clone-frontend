import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import Reviews from '../components/Reviews'
import AddReview from '../components/AddReview'
import StarRating from '../components/StarRating'


const RestaurantDetailPage = () => {

    const { id } = useParams()
    const { restaurant, setRestaurant } = useContext(RestaurantsContext)
    const { reviews, setReviews } = useContext(RestaurantsContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`)
                setRestaurant(response.data.data.restaurant)
                setReviews(response.data.data.reviews)
            } catch (e) { }
        }

        fetchData()
    }, [id, setRestaurant, setReviews])

    return (
        <div>
            {(restaurant && reviews) && (
                <>
                    <h1 className='display-2 text-center'>{restaurant.name}</h1>
                    <div className='text-center'>
                        <StarRating rating={restaurant.average_rating} />
                        <span className='ml-1'>
                            {restaurant.count ? `(${restaurant.count})` : '0'}
                        </span>
                    </div>
                    <div className='mt-3'>
                        <Reviews reviews={reviews} />
                    </div>
                    <AddReview />
                </>
            )}
        </div>
    )
}

export default RestaurantDetailPage