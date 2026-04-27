function renderMenuItemsTemplate(title, description, price, itemID) {
  return `<div class="item-card">
              <div class="item-description">
                <h3>${title}</h3>
                <p>
                  ${description}
                </p>
              </div>
              <div class="btn-price">
                <p>$${price}</p>
                <button class="add-item-btn" onClick="getItemFromDb(${itemID})">Add to basket</button>
              </div>
          </div>`;
}

function renderEmptyBasketTemplate() {
  return `<p>Seems empty in here...</p>
          <p>Add something to your Basket!</p>`;
}

function renderBasketItemTemplate(item) {
  return `
    <div class="basket-item">
      <span>${item.title}</span>
      <span>x${item.count}</span>
      <span>${(item.price * item.count).toFixed(2)}€</span>
    </div>
  `;
}
