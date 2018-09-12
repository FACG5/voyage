const restaurant =  document.getElementById('restaurant');
const park = document.getElementById('park');
const cafe = document.getElementById('cafe');
console.log(restaurant);
restaurant.addEventListener('click', () => {
  window.location = '/categories/restaurant';
  console.log('hello');
});

park.addEventListener('click', () => {
window.location = '/categories/park';
});

cafe.addEventListener('click', () => {
window.location = '/categories/cafe';
});
