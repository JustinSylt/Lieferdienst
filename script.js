function init() {
  // init function that calls render functions
  renderRestaurantDescription();
  renderChickenSliders();
  renderBucketsAndBoxes();
  renderSidesAndDips();
}

// render Chicken Sliders section
function renderChickenSliders() {
  let chickenSliderArr = restaurantJFC.menu['Chicken Sliders'];
  let chickenSliderRef = document.getElementById(
    'chicken-slider-item-container',
  );
  for (let i = 0; i < chickenSliderArr.length; i++) {
    let itemCard = renderItemCardTemplatete(
      chickenSliderArr[i].title,
      chickenSliderArr[i].description,
      chickenSliderArr[i].price,
    );

    chickenSliderRef.innerHTML += itemCard;
  }
}

// render Buckets & Boxes section
function renderBucketsAndBoxes() {}

// render Sides & Dips section
function renderSidesAndDips() {}
