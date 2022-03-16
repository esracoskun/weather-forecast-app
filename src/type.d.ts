interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface IMain {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface IClouds {
  all: number;
}

interface ICoord {
  lon: number;
  lat: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust?: number,
}

interface WeatherData {
  base: string;
  clouds: IClouds;
  cod: number;
  coord: ICoord;
  dt: number;
  id: number;
  main: IMain;
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: IWind;
}

interface WeatherError {
  cod: string;
  message: string;
}

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

interface GetWeatherAction {
  type: 'GET_WEATHER';
  payload: WeatherData;
}

interface SetLoadingAction {
  type: 'SET_LOADING';
}

interface SetErrorAction {
  type: 'SET_ERROR';
  payload: string;
}

type WeatherAction = GetWeatherAction | SetErrorAction | SetLoadingAction | WeatherHourlyAction;

type ActionTypes =  'GET_WEATHER' | 'SET_ALERT' | 'SET_ERROR' | 'SET_LOADING' | 'GET_WEATHER_HOURLY';

interface AlertAction {
  type: 'SET_ALERT';
  payload: string;
}

interface AlertState {
  message: string;
}

interface HourlyList {
  dt: number;
  main: IMain;
  weather: Weather[];
  clouds: IClouds;
  wind: IWind;
  visibility: number;
  pop: number;
  sys: {
    pop: string;
  };
  dt_txt: string;
}

interface WeatherHourlyForecast {
  cod: string;
  message: number;
  cnt: number;
  list: HourlyList[];
  city: {
    id: string;
    name: string;
    coord: ICoord;
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
}

interface WeatherHourlyState {
  extendedWeatherData: WeatherHourlyForecast | null;
  loading: boolean;
  error: string;
}

interface WeatherHourlyAction {
  type: 'GET_WEATHER_HOURLY';
  payload: WeatherHourlyForecast;
}

interface WeatherHourlyError {
  cod: string;
  message: string;
}