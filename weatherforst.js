
// Constants
const apiKey = 'ae685c2d85cea5aca46ff9d60b34d465'; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherContainer = document.querySelector('.weather-data');

// Function to fetch weather data from the API
async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Function to update the HTML with weather information
function updateWeatherInfo(weather) {
  const { name, main, weather: weatherInfo } = weather;

  const temperature = main.temp;
  const description = weatherInfo[0].description;

  const html = `
    <h2>Weather in ${name}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${description}</p>
  `;

  weatherContainer.innerHTML = html;
}

// Function to handle user input and fetch weather data
async function handleWeatherRequest() {
  const city = prompt('Enter a city name:');
  if (city) {
    try {
      const weather = await fetchWeather(city);
      updateWeatherInfo(weather);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch weather data. Please try again later.');
    }
  }
}

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
  handleWeatherRequest();
});

// Event listener for refreshing weather data
const refreshButton = document.querySelector('.refresh-button');
refreshButton.addEventListener('click', handleWeatherRequest);
