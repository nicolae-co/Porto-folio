"use strict";

const API_KEY = "76d2daa3620e3bd2616822086c5560a4";
const URL = `https://api.openweathermap.org/data/2.5/weather?`;

async function getWeatherData(cityName) {
  try {
    const response = await fetch(`${URL}q=${cityName}&appid=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

const london = getWeatherData("london");

console.log(london);
