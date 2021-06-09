import axios from 'axios';
import {apiKey} from '../env'
const fetcher = async (url) => {
    
    try {
        const locations = await axios({
            method: 'GET',
            url
         })
         //console.log(locations.data)
         return locations.data
         
    } catch (error) {
        return {error: error}
    }
}
const fetchLocationId = async (querysearch) =>{
    const locationFetchUrl = `https://www.metaweather.com/api/location/search/?query=${querysearch}`
    const result = await fetcher(locationFetchUrl);
    return result
}

const fetchWeather = async (woeid) =>{
    const woeidFetchUrl = `https://www.metaweather.com/api/location/${woeid}/`
    const result = await fetcher(woeidFetchUrl);
    //console.log(result)
    return result
}

export {fetchLocationId, fetchWeather}