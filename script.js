
const cards = document.querySelectorAll('.card');


let currentIndex = 0; 
let offsetX = 0;
let offsetY = 0;


function moveCard() {
    const activeCard = cards[currentIndex];

    
    activeCard.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1)`;
}


document.addEventListener('keydown', (event) => {
    const step = 10; 

    switch (event.key) {
        case 'ArrowUp':
            offsetY -= step; 
            break;
        case 'ArrowDown':
            offsetY += step; 
            break;
        case 'ArrowLeft':
            offsetX -= step; 
            break;
        case 'ArrowRight':
            offsetX += step; 
            break;
        case 'Tab': 
            currentIndex = (currentIndex + 1) % cards.length;
            offsetX = 0; 
            offsetY = 0;
            event.preventDefault(); 
            break;
    }

    moveCard(); 
});
