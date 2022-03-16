
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setAlert } from '../../store/actions/alertActions';
import { setError } from '../../store/actions/weatherActions';
import Alert from '../Alert';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Spinner from '../Spinner/Spinner';
import Weather from '../CurrentWeather/Weather';


const Home = () => {
  const dispatch = useDispatch();

  const { weatherData, loading, error, alertMsg } = useSelector((store: RootState) => ({
    weatherData: store.weather.data,
    loading: store.weather.loading,
    error: store.weather.error,
    alertMsg: store.alert.message,
  }));

  return (
    <>
      <Header />
      <Search />
      {loading ? <Spinner /> : weatherData && <Weather weather={weatherData}/>}

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))}/>}
      {error && <Alert message={error} onClose={() => dispatch(setError())}/>}
    </>
  );
};

export default Home;
