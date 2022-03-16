import { FC, useState, FormEvent, useRef,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../store/actions/alertActions';
import { getWeather, setLoading } from '../../store/actions/weatherActions';
import { SearchElement, SearchIcon, SearchInput, SearchResult } from './styled';
import { fetchCities } from "../../store/fetchCities";
import Suggestion from "./Suggestion";

const Search: FC = () => {
  const dispatch = useDispatch();

  const [city, setCity] = useState('');
  const suggestionRef = useRef(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (!city) {
      return;
    }
    setShowSuggestions(true);
    fetchCities(city).then((res) => {
      setSuggestions(res);
    });
  }, [city]);

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    var inputValue = e.currentTarget.value;
    if (inputValue.length > 3) {
      setTimeout(() => {
        setCity(inputValue);
      }, 300);
    }
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === '') {
      return dispatch(setAlert('Şehir girilmesi zorunludur!'));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }

  return(
    <SearchElement>
      <SearchIcon />
        <SearchInput
          placeholder="Şehir ismi yazınız.."
          defaultValue={city}
          onChange={changeHandler}
          type="text" />
      {showSuggestions && (
        <SearchResult ref={suggestionRef}>
          {suggestions?.slice(0, 6)?.map((s, i) => (
            <Suggestion
              key={i}
              label={s}
              hideSuggestionFn={() => {
                setShowSuggestions(false);
              }}
            />
          ))}
        </SearchResult>
      )}
    </SearchElement>
    // <div className="hero is-ligth has-text-centerd">
    //   <div className="hero-body">
    //     <div className="container">
    //       {/* <h1 className="title">{ title }</h1> */}
    //       <form className="py-5"
    //         onSubmit={submitHandler}>
    //         <SearchElement>
    //           <input
    //             className="input has-text-centered mb-2 is-medium"
    //             placeholder="Şehir ismi yazınız.."
    //             value={city}
    //             onChange={changeHandler}
    //             type="text" />
    //             {/* <button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}> Ara </button> */}
    //         </SearchElement>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Search;