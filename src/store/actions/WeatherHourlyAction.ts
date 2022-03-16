import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { GET_WEATHER_HOURLY, SET_ERROR } from './action.types';

export const getWeatherHourly = (lat: number, lon: number): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(`http:/pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_API_KEY}&lang=tr`);

      if(!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData: WeatherHourlyForecast = await res.json();
      console.log(resData)
      dispatch({
        type: GET_WEATHER_HOURLY,
        payload: resData,
      });
    } catch (err: any) {
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  }
}