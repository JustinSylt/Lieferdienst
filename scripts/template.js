function init() {
  renderRestaurantDescription();
}

function renderRestaurantDescription() {
  let restaurantDescriptionRef = document.getElementById(
    'restaurant-description',
  );
  restaurantDescriptionRef.innerHTML = `
          <h1>${restaurantJFC.restaurantDetails.name}</h1>
          <p>${restaurantJFC.restaurantDetails.description}</p>
          <p>${restaurantJFC.restaurantDetails.rating} / 5.0 ☆</p>`;
}
