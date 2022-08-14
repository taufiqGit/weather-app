import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "../Features/ui";
import WeatherReducer from "../Features/weather";


export const store = configureStore({
    reducer: {
        weather: WeatherReducer,
        ui: UIReducer
    }
})