 // Global variables that can be accessed in any function
let count = 0;
let countSpan = document.getElementById("count");

// Display the count variable within the span when the page loads
countSpan.innerHTML = count;

// Function that gets called when the "Get cookies" button is clicked
// The count is incremented, then displayed in the span
function getCookies() {
    count++;
    countSpan.innerHTML = count;
}
