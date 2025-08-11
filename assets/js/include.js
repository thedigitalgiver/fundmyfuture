// js/include.js

// Function to fetch and include the HTML file
function includeHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Call the function to include the navigation bar when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // 'navigation' is the ID of the element where the navigation bar will be inserted
    includeHTML('navigation', 'assets/components/navigation-bar.html');
});