import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "../Features/weather";


export const store = configureStore({
    reducer: {
        weather: WeatherReducer
    }
})