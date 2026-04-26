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
