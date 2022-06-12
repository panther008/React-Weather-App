import React from "react";

export const TemperatureConvertor = () => {
  const [temp, updateTemp] = React.useState({ f: 0, c: 0 });

  const updateCelcius = (ev) =>
    updateTemp({
      c: ev.target.value,
      f: ((+ev.target.value * 9) / 5 + 32).toFixed(2)
    });

  const updateFarenheight = (ev) =>
    updateTemp({
      c: (((+ev.target.value - 32) * 5) / 9).toFixed(2),
      f: ev.target.value
    });
  return (
    <>
      <div id="container">
        <div id="box1">
          <h1>Celsius</h1>
          <input type="number" value={temp.c} onChange={updateCelcius}></input>
        </div>
        <div id="box2">
          <h1>Fahrenheit</h1>
          <input
            type="number"
            value={temp.f}
            onChange={updateFarenheight}
          ></input>
        </div>
      </div>
    </>
  );
};
