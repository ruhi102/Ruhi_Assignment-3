import "./main.css";
import sampleForecast from "./sample_forecast.json";
import { getLatLongForAddress } from "./geocode";
// eslint-disable-next-line import/no-cycle
import getForecast from "./forecast";
/**
 * Create an img element with the "icon" specified in the forecast
 *
 * @param {{name: string, startTime: string, endTime: string, temperature: number, icon: URL, shortForecast: string}} forecast
 */
// async function buildForecastIconElt(forecast) {}

// /**
//  * Create the `section` element for one forecast item.
//  *
//  * @param {{name: string, startTime: string, endTime: string, temperature: number, icon: URL, shortForecast: string}} forecast
//  */
// async function buildForecastBlock(forecast) {}

/**
 * Now that we have the array of forecasts, insert them into the
 * DOM
 * @param {} forecastPeriods
 */
export default function insertForecast(forecastPeriods) {
  const mainContainer = document.getElementById("forecast");
  const forecastElements = mainContainer.querySelectorAll(".forecast");
  // loop through forecast
  for (let i = 0; i < forecastPeriods.length; i += 1) {
    const nam = forecastElements[i].querySelector(".day");
    const tem = forecastElements[i].querySelector(".temp");
    nam.innerHTML = forecastPeriods[i].name;
    tem.innerHTML = forecastPeriods[i].temperature;
    const imgContainer = forecastElements[i].querySelector(".weather");
    if (imgContainer.hasChildNodes()) {
      imgContainer.removeChild(imgContainer.firstChild);
    }
    const img = new Image();
    img.src = forecastPeriods[i].icon;
    img.alt = forecastPeriods[i].shortForecast;
    imgContainer.appendChild(img);
  }
}

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
  const addres = addressElt.value;
  console.log(addres);

  getLatLongForAddress(addres)
    .then((data) => getForecast(data.lat, data.long))
    .catch((error) => {
      // Show an error message to the user
      let errorMessage = "The entered address cannot be found. Please enter a valid address.";
      alert(errorMessage);
      console.error(error);
    });
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
  const addressInput = document.getElementById("address");
  addressInput.addEventListener("keydown", (event) => {
    if (event.keycode === "Enter") {
      console.log("Address entered:", addressInput.value);
    }
  });
})();