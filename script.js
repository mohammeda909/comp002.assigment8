// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

// Add an event listener for form submission
document.querySelector('form').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Capture the values from the form
    const userName = document.querySelector('#name').value; // Retrieves the name entered by the user
    const backgroundColor = document.querySelector('#background-color').value; // Retrieves the chosen background color
    const foregroundColor = document.querySelector('#foreground-color').value; // Retrieves the chosen foreground color

    // Save these values to localStorage
    localStorage.setItem('userName', userName); // Stores the user's name in localStorage
    localStorage.setItem('backgroundColor', backgroundColor); // Stores the selected background color in localStorage
    localStorage.setItem('foregroundColor', foregroundColor); // Stores the selected foreground color in localStorage

    // Notify the user that preferences have been saved
    alert('Preferences saved successfully!'); // Alerts the user to confirm their preferences are saved

    // Apply the preferences immediately
    applyPreferences(); // Calls the function to apply preferences instantly
});
// Function to apply saved preferences from localStorage
function applyPreferences() {
    // Retrieve preferences from localStorage
    const userName = localStorage.getItem('userName'); // Gets the saved name from localStorage
    const backgroundColor = localStorage.getItem('backgroundColor'); // Gets the saved background color
    const foregroundColor = localStorage.getItem('foregroundColor'); // Gets the saved foreground color

    // Apply the preferences if they exist
    if (userName) {
        document.querySelector('#greeting').textContent = `Welcome, ${userName}!`; // Updates the greeting with the user's name
    }
    if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor; // Changes the background color of the page
    }
    if (foregroundColor) {
        document.body.style.color = foregroundColor; // Changes the text color of the page
    }
}
// Call the applyPreferences function when the page loads
document.addEventListener('DOMContentLoaded', applyPreferences); // Ensures preferences are applied when the page loads