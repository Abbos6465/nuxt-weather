import axios from "~/utils/axios.js";

export default {
    fetchForecast(params = {}){
        return axios.get('/forecast.json',{params});
    }
}