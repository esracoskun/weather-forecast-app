import React from 'react';

interface ITemperatureProps {
  value: number;
}

const Temperature: React.FC<ITemperatureProps> = (props) => {
  return <>{(props.value - 273.15).toFixed()}</>; // celsius
};

export default Temperature;
