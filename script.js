// Toggle Dark Mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };
  
  // Add Dark Mode Toggle Button
  const darkModeButton = document.createElement('button');
  darkModeButton.innerText = 'Toggle Dark Mode';
  darkModeButton.style.position = 'fixed';
  darkModeButton.style.bottom = '20px';
  darkModeButton.style.right = '20px';
  darkModeButton.style.padding = '10px 20px';
  darkModeButton.style.backgroundColor = '#4CAF50';
  darkModeButton.style.color = '#fff';
  darkModeButton.style.border = 'none';
  darkModeButton.style.borderRadius = '5px';
  darkModeButton.style.cursor = 'pointer';
  
  darkModeButton.addEventListener('click', toggleDarkMode);
  document.body.appendChild(darkModeButton);

  // Simulate donations
let donationAmount = 0;

function updateDonationCounter() {
  // Simulate a random donation between $10 and $100
  const randomDonation = Math.floor(Math.random() * 91) + 10;
  donationAmount += randomDonation;

  // Update the donation amount on the page
  document.getElementById('donation-amount').textContent = `$${donationAmount}`;
}

// Update the counter every 3 seconds (for demonstration)
setInterval(updateDonationCounter, 3000);
