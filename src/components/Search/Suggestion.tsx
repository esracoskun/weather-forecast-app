import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather, setLoading } from '../../store/actions/weatherActions';
import { SuggestionItem } from './styled';

interface ISuggestionProps {
  label: string;
  hideSuggestionFn: Function;
}

const Suggestion: FC<ISuggestionProps> = (props) => {

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setLoading());
    dispatch(getWeather(props.label.split(',')[0]))
    setTimeout(() => {
      props.hideSuggestionFn();
    }, 400);
  };

  return <SuggestionItem onClick={onClick}>{props.label}</SuggestionItem>;
};

export default Suggestion;

