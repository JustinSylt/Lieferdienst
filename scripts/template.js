function renderMenuItemsTemplate(title, description, price) {
  return `<div class="item-card">
              <div class="item-description">
                <h3>${title}</h3>
                <p>
                  ${description}
                </p>
              </div>
              <div class="btn-price">
                <p>$${price}</p>
                <button class="add-item-btn">Add to basket</button>
              </div>
          </div>`;
}
