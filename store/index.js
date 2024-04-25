import {createStore} from "vuex";
import forecast from "./modules/forecast";
import {defineNuxtPlugin} from "#app";

const store = createStore({
    state:{},
    mutations:{},
    actions:{},
    modules:{
        forecast
    }
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('store', store)
});