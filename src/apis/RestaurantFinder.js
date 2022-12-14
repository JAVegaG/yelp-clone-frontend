import axios from 'axios'

export default axios.create({
    baseURL: 'http://yelp-clone-backend.julianvega.ga/api/v1/restaurants'
})