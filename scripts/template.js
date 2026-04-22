// render restaurant description
function renderRestaurantDescription() {
  let restaurantDescriptionRef = document.getElementById(
    'restaurant-description',
  );
  restaurantDescriptionRef.innerHTML = `
          <h1>${restaurantJFC.restaurantDetails.name}</h1>
          <p>${restaurantJFC.restaurantDetails.description}</p>
          <p>${restaurantJFC.restaurantDetails.rating} / 5.0 ☆</p>`;
}

function renderItemCardTemplatete(title, description, price) {
  return `<div class="item-card">
            <div class="item-description">
              <h3>${title}</h3>
              <p>${description}</p>
              <p>$${price}</p>
            </div>
            <button class="add-item-button">Add to Basket</button>
          <div>`;
}
