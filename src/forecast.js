const POINT_ENDPOINT = "http://localhost:3000/weather/points";
const FORECAST_ENDPOINT = (office, x, y) =>
  `http://localhost:3000/weather/${office}/${x}/${y}/forecast`;

/**
 * Lookup the grid point corresponding to a given lat/long
 *
 * @param {number} latitude
 * @param {number} longitude
 */
async function getPoint(latitude, longitude) {
  const url = `${POINT_ENDPOINT}/${latitude},${longitude}`;
  return fetch(url);
}

/**
 * Get the forecast for a given lat/long pair
 *
 * @param {number} latitude
 * @param {number} longitude
 */
export default function getForecast(latitude, longitude) {}
