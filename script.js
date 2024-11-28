// Select all the cards
const cards = document.querySelectorAll('.card');

// Variables to track the position of the active card
let currentIndex = 0; // Start with the first card
let offsetX = 0;
let offsetY = 0;

// Function to update card positions based on offset
function moveCard() {
    const activeCard = cards[currentIndex];

    // Apply the transformation to move the card
    activeCard.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1)`;
}

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    const step = 10; // Step size for movement

    switch (event.key) {
        case 'ArrowUp':
            offsetY -= step; // Move up
            break;
        case 'ArrowDown':
            offsetY += step; // Move down
            break;
        case 'ArrowLeft':
            offsetX -= step; // Move left
            break;
        case 'ArrowRight':
            offsetX += step; // Move right
            break;
        case 'Tab': // Change the active card
            currentIndex = (currentIndex + 1) % cards.length;
            offsetX = 0; // Reset offsets for the new card
            offsetY = 0;
            event.preventDefault(); // Prevent default tab behavior
            break;
    }

    moveCard(); // Update the position of the card
});
