import React, {FC} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GlobalStyles } from './app.styled';


import Home from './components/Home/Home';


const App: FC = () => {
  return (
    <div className="has-text-centered">
      <GlobalStyles />
      <Home/>
    </div>
  );
}

export default App;
