function handleClick(brand) {
    alert(`You clicked on ${brand}`);
    // Replace with desired functionality, like navigation or API calls.
  }
  //details code
  function showDetails() {
    alert("More details about this section!");
  }
  //scrolling picture
  const track = document.querySelector('.carousel-track');
let index = 0;

setInterval(() => {
  index = (index + 1) % 3; // Loop through 3 images
  track.style.transform = `translateX(-${index * 100}%)`;
}, 3000); // Change image every 3 seconds
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

rightBtn.addEventListener('click', () => {
  index = (index + 1) % 3; // Move to the next image
  track.style.transform = `translateX(-${index * 100}%)`;
});

leftBtn.addEventListener('click', () => {
  index = (index - 1 + 3) % 3; // Move to the previous image
  track.style.transform = `translateX(-${index * 100}%)`;
});
//click shapes 


