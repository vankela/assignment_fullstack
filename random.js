// Define variables to store DOM elements
const qText = document.querySelector('.quote p');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function to fetch a random quote from the API
async function randomQuote() {
  try {
    // Fetch data from the API
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();

    // Generate a random index to select a quote
    const randomIndex = Math.floor(Math.random() * data.length);

    // Get a random quote from the data
    const randomQuote = data[randomIndex];

    // Update the HTML with the random quote
    qText.textContent = randomQuote.text;

  } catch (error) {
    console.error('Error fetching a random quote:', error);
    qText.textContent = 'Failed to fetch a quote. Please try again later.';
  }
}

// Event listener for the "New Quote" button
newQuoteBtn.addEventListener('click', randomQuote);

// Fetch a random quote when the page loads
randomQuote();
