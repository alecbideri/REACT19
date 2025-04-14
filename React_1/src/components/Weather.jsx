import React from "react";

const Weather = ({ temperature }) => {
  return (
    <div>
      {temperature < 15 && <p>It's cold outside!</p>}
      {temperature >= 15 && temperature <= 25 && <p>It's nice outside</p>}
      {temperature > 25 && <p>It's hot outside!</p>}
    </div>
  );
};
export default Weather;
