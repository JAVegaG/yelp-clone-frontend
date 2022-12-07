import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {

    const [restaurant, setRestaurant] = useState(null);

    const [restaurants, setRestaurants] = useState(null);

    const addRestaurant = restaurant => {
        setRestaurants([...restaurants, restaurant])
    }

    const deleteRestaurant = id => {
        setRestaurants(restaurants.filter(restaurant => {
            return restaurant.id !== id
        }))
    }

    const [reviews, setReviews] = useState(null);

    const addReview = review => {
        setReviews([...reviews, review])
    }

    return (
        <RestaurantsContext.Provider value={{
            restaurant,
            setRestaurant,
            restaurants,
            setRestaurants,
            addRestaurant,
            deleteRestaurant,
            reviews,
            setReviews,
            addReview
        }}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}