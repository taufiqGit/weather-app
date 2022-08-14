import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Store'
import { fetchCurrentWeather, fetchForecast} from './Features/weather'

const cord = {
  latitude: '-21.757383377762842',
  longitude: '117.49811793521812'
}
store.dispatch(fetchCurrentWeather(cord))
//store.dispatch(fetchForecast(cord))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)
