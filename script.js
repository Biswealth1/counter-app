// Get elements from the DOM
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countElement = document.getElementById('count');

// Initial count value
let count = 0;

// Update the count display
function updateCount() {
    countElement.textContent = count;
}

// Event listener for the decrement button
decrementButton.addEventListener('click', () => {
    count--;
    updateCount();
});

// Event listener for the increment button
incrementButton.addEventListener('click', () => {
    count++;
    updateCount();
});

// Initialize the count display
updateCount();
