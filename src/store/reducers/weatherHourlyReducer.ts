import { GET_WEATHER_HOURLY, SET_ERROR, SET_LOADING } from "../actions/action.types"

const initialState: WeatherHourlyState = {
  extendedWeatherData: null,
  loading: false,
  error: '',
}

export default (state = initialState, action: WeatherAction): WeatherHourlyState => {
  switch (action.type) {
    case GET_WEATHER_HOURLY:
      return {
        extendedWeatherData: action.payload,
        loading: false,
        error: '',
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}