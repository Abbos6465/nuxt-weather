import forecastApi from "~/api/forecast.api.js";

export const actions = {
    fetchForecast({commit}, territory) {
        const params = {
            q: territory
        }
        return new Promise( async (resolve, reject) => {
            await forecastApi.fetchForecast(params).then(res => {
                commit("setForecast", res);
                resolve(res);
            }).catch(err => {
                console.log(err);
                reject(err);
            })
        })
    }
}