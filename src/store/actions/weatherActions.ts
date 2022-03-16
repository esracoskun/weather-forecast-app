import { ThunkAction } from 'redux-thunk';
import { RootState } from '..'
import { GET_WEATHER, SET_ERROR, SET_LOADING } from './action.types';
import { getWeatherHourly } from './WeatherHourlyAction';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}&lang=tr`);

      if(!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData: WeatherData = await res.json();
      getWeatherHourly(resData.coord.lat, resData.coord.lon);
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch(err: any) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      })
    }
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: '',
  }
}