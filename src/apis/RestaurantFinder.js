import axios from 'axios'

export default axios.create({
    baseURL: 'http://a034fd0caaf114cedbb338e2df398304-1949311202.us-east-1.elb.amazonaws.com/api/v1/restaurants'
})