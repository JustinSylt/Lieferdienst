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
            <h2>${title}</h2>
            <p>${description}</p>
            <p>${price}</p>
          <div>`;
}
