import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import UpdateRestaurantPage from './routes/UpdateRestaurantPage'
import RestaurantDetailPage from './routes/RestaurantDetailPage'
import { RestaurantsContextProvider } from './context/RestaurantsContext'


const App = () => {
    return (
        <RestaurantsContextProvider>
            <div className='container'>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/restaurants/:id/update' element={<UpdateRestaurantPage />} />
                        <Route exact path='/restaurants/:id' element={<RestaurantDetailPage />} />
                    </Routes>
                </Router>
            </div>
        </RestaurantsContextProvider>
    )
}

export default App;