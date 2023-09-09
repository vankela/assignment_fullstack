// Define variables to store DOM elements
const countInfo = document.querySelector('.country-info');

// Function to fetch country data from the API
async function countryData() {
  try {
    // Fetch data from the API
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    // Select a random country from the data (you can modify this logic as needed)
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomCountry = data[randomIndex];

    // Create HTML content with country information
    const countryHTML = `
      <h2>${randomCountry.name.common}</h2>
      <p>Capital: ${randomCountry.capital}</p>
      <p>Population: ${randomCountry.population.toLocaleString()}</p>
      <p>Region: ${randomCountry.region}</p>
      <p>Subregion: ${randomCountry.subregion}</p>
      <p>Language(s): ${Object.values(randomCountry.languages).join(', ')}</p>
      <p>Flag:</p>
      <img src="${randomCountry.flags.png}" alt="${randomCountry.name.common} Flag" width="200">
    `;

    // Update the HTML with the country information
    countInfo.innerHTML = countryHTML;

  } catch (error) {
    console.error('Error fetching country data:', error);
    countInfo.innerHTML = 'Failed to fetch country information. Please try again later.';
  }
}

// Fetch country data when the page loads
countryData();
