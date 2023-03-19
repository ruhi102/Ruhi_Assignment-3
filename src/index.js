import "./main.css";
import sampleForecast from "./sample_forecast.json";

/**
 * Create an img element with the "icon" specified in the forecast
 *
 * @param {{name: string, startTime: string, endTime: string, temperature: number, icon: URL, shortForecast: string}} forecast
 */
async function buildForecastIconElt(forecast) {}

/**
 * Create the `section` element for one forecast item.
 *
 * @param {{name: string, startTime: string, endTime: string, temperature: number, icon: URL, shortForecast: string}} forecast
 */
async function buildForecastBlock(forecast) {}

/**
 * Now that we have the array of forecasts, insert them into the
 * DOM
 * @param {} forecastPeriods
 */
function insertForecast(forecastPeriods) {}

/**
 * Event handler for address submission
 *
 * @param {Event} ev
 */
function onAddressSubmit(ev) {
  ev.preventDefault();
  // find the text box
  const addressElt = document.getElementById("address");
  // here, we should start by calling the geocode API
}

function fetchSampleData() {
  return Promise.resolve(sampleForecast).then((x) =>
    insertForecast(x.properties.periods)
  );
}

(() => {
  // attach a handler to the "sample data" button
  document
    .getElementById("sample-data")
    .addEventListener("click", fetchSampleData);
  fetchSampleData();

  // attach the address submit handler to the submit button
  const submitButton = document.getElementById("address-submit");
  submitButton.addEventListener("click", onAddressSubmit);
  // TODO: Add onAddressSubmit as a handler for <enter> being pressed in the text box
})();
