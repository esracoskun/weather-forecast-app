import React, { FC } from 'react';
import { ReactComponent as HighIcon } from '../../assets/high-icon.svg';
import { ReactComponent as HumidityIcon } from '../../assets/humidity-icon.svg';
import { ReactComponent as LowIcon } from '../../assets/low-icon.svg';
import { ReactComponent as PressureIcon } from '../../assets/pressure-icon.svg';
import { ReactComponent as WindIcon } from '../../assets/wind-icon.svg';
import WeatherIcon from './WeatherIcon';
import {
  CurrentWeatherStatus,
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  WeatherContainer,
  WeatherDegree,
  Description,
} from './styled';
import Temperature from './Temperature';

interface WeatherProps {
  weather: WeatherData;
}

const Weather: FC<WeatherProps> = ({ weather }) => {
  return(
    <WeatherContainer>
      <CurrentWeatherContainer>
        <CurrentWeatherStatus>
          <h4>{weather.name}</h4>
          <div style={{ display: 'flex' }}>
            <WeatherIcon code={weather.weather[0].id} big />
            <span>
              <Temperature value={weather.main.temp} />
              <sup>&deg;</sup>
            </span>
          </div>
          <Description>{weather.weather[0].description}</Description>
        </CurrentWeatherStatus>

        <CurrentWeatherInfo>
          <FeelsLike>
            Hissedilen {<Temperature value={weather.main.feels_like}/>}
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              <Temperature value={weather.main.temp_max} />
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={weather.main.temp_min} />
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
          <InfoRow>
            <div>
              <HumidityIcon /> Nem
            </div>
            <span>{weather.main.humidity}%</span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon /> Rüzgar
            </div>
            <span>
              {weather.wind.speed}
              {'kph'}
            </span>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon /> Basınç
            </div>
            <span>{weather.main.pressure}hPa</span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
}
export default Weather;