const getRain = (rain) => {
  return typeof rain === "number" ? rain : rain["1h"] ? rain["1h"] : rain["3h"];
};

const getInfoFromCurrent = (weather) => {
  const { rain } = weather;

  return {
    ...weather,
    rain: rain ? getRain(rain) : 0
  };
};

const getInfoFromDaily = (weather) => {
  const { temp, feels_like, rain } = weather;

  return {
    ...weather,
    temp: temp.day,
    max_temp: temp.max,
    min_temp: temp.min,
    feels_like: feels_like.day,
    rain: rain ? getRain(rain) : 0
  };
};

export { getInfoFromCurrent, getInfoFromDaily };
