function init() {
  renderChickenSliders();
  renderBucketsAndBoxes();
  renderSidesAndDips();
  renderBasketContent();
}

// constants
const CHICKEN_SLIDER_ARR = restaurantJFC.menu['Chicken Sliders'];
const BUCKETS_AND_BOXES_ARR = restaurantJFC.menu['Buckets & Boxes'];
const SIDES_AND_DIPS_ARR = restaurantJFC.menu['Sides & Dips'];

// render all Chicken Sliders from db.js
function renderChickenSliders() {
  let chickenSliderRef = document.getElementById('chicken-slider');

  for (let i = 0; i < CHICKEN_SLIDER_ARR.length; i++) {
    let chickenSliderTemplate = renderMenuItemsTemplate(
      CHICKEN_SLIDER_ARR[i].title,
      CHICKEN_SLIDER_ARR[i].description,
      CHICKEN_SLIDER_ARR[i].price,
      CHICKEN_SLIDER_ARR[i].itemID,
    );
    chickenSliderRef.innerHTML += chickenSliderTemplate;
  }
}

// render all Buckets and Boxes from db.js
function renderBucketsAndBoxes() {
  let bucketsAndBoxesRef = document.getElementById('buckets-and-boxes');

  for (let i = 0; i < BUCKETS_AND_BOXES_ARR.length; i++) {
    let bucketsAndBoxesTemplate = renderMenuItemsTemplate(
      BUCKETS_AND_BOXES_ARR[i].title,
      BUCKETS_AND_BOXES_ARR[i].description,
      BUCKETS_AND_BOXES_ARR[i].price,
      BUCKETS_AND_BOXES_ARR[i].itemID,
    );
    bucketsAndBoxesRef.innerHTML += bucketsAndBoxesTemplate;
  }
}

// render all Sides and Dips from db.js
function renderSidesAndDips() {
  let sidesAndDipsRef = document.getElementById('sides-and-dips');

  for (let i = 0; i < SIDES_AND_DIPS_ARR.length; i++) {
    let sidesAndDipsTemplate = renderMenuItemsTemplate(
      SIDES_AND_DIPS_ARR[i].title,
      SIDES_AND_DIPS_ARR[i].description,
      SIDES_AND_DIPS_ARR[i].price,
      SIDES_AND_DIPS_ARR[i].itemID,
    );

    sidesAndDipsRef.innerHTML += sidesAndDipsTemplate;
  }
}

// render basket content
function renderBasketContent() {
  let itemsInBaskets = calculateBasketItems();
  let basketItemsRef = document.getElementById('basket-items');

  if (itemsInBaskets == 0) {
    basketItemsRef.innerHTML = '';
    basketItemsRef.innerHTML += renderEmptyBasketTemplate();
  } else {
  }
}

// calculate basket count
function calculateBasketItems() {
  let basketCount = 0;
  const categories = Object.keys(restaurantJFC.menu);

  for (let i = 0; i < categories.length; i++) {
    const items = restaurantJFC.menu[categories[i]];
    for (let j = 0; j < items.length; j++) {
      basketCount += items[j].count;
    }
  }
  return basketCount;
}

// Increment counter in object

function getItemFromDb(itemID) {
  let allItems = Object.values(restaurantJFC.menu).flat();
  let item = allItems.find((item) => item.itemID === itemID);
  console.log(item);
}
