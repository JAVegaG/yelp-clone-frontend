import React, { useState, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'


const AddRestaurant = () => {

    const { addRestaurant } = useContext(RestaurantsContext)

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [priceRange, setPriceRange] = useState('Price Range')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post('/', {
                name,
                location,
                price_range: priceRange
            })
            addRestaurant(response.data.data.restaurant)
        } catch (e) {

        }
    }

    return (
        <div className='mb-4'>
            <form className='row g-3 align-items-center justify-content-center text-center'>
                <div className='col-auto'>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type='text'
                        className='form-control text-center'
                        id='autoSizingInput'
                        placeholder='name'
                    />
                </div>
                <div className='col-auto'>
                    <input
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        type='text'
                        className='form-control text-center'
                        id='autoSizingInput'
                        placeholder='location'
                    />
                </div>
                <div className='col-auto'>
                    <select
                        value={priceRange}
                        onChange={e => setPriceRange(e.target.value)}
                        className='form-select text-center' id='autoSizingSelect'>
                        <option disabled>Price Range</option>
                        <option value='1'>$</option>
                        <option value='2'>$$</option>
                        <option value='3'>$$$</option>
                        <option value='4'>$$$$</option>
                    </select>
                </div>
                <div className='col-auto'>
                    <button onClick={e => handleSubmit(e)} type='submit' className='btn btn-primary'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant