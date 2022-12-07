import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'

const UpdateRestaurant = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [priceRange, setPriceRange] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`)
                setName(response.data.data.restaurant.name)
                setLocation(response.data.data.restaurant.location)
                setPriceRange(response.data.data.restaurant.price_range)
            } catch (e) { }
        }

        fetchData()

    }, [id])

    const handleUpdate = async (e) => {
        e.preventDefault()

        await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        })

        navigate('/')

    }

    return (
        <div>
            <form>
                <div className='form-row py-1'>
                    <label className='py-2' htmlFor='name'>Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} type='text' id='name' className='form-control' placeholder='name' />
                </div>
                <div className='form-row py-1'>
                    <label className='py-2' htmlFor='location'>Location</label>
                    <input value={location} onChange={e => setLocation(e.target.value)} type='text' id='location' className='form-control' placeholder='location' />
                </div>
                <div className='form-row py-1'>
                    <label className='py-2' htmlFor='price_range'>Price Range</label>
                    <select value={priceRange} onChange={e => setPriceRange(e.target.value)} id='price_range' className='form-select'>
                        <option disabled>Price Range</option>
                        <option value='1'>$</option>
                        <option value='2'>$$</option>
                        <option value='3'>$$$</option>
                        <option value='4'>$$$$</option>
                    </select>
                </div>
                <div className='form-row py-2 text-center d-grid'>
                    <button onClick={e => handleUpdate(e)} type='submit' className='btn btn-primary btn-lg btn-block'>Update</button>
                </div>
            </form>
        </div >
    )
}

export default UpdateRestaurant