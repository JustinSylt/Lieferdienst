// init function that calls render functions
function init() {
  renderRestaurantDescription();
  //   renderChickenSliders();
}

// constants
const CHICKEN_SLIDER_ARR = restaurantJFC.menu['Chicken Sliders'];
const BUCKETS_AND_BOXES_ARR = restaurantJFC.menu['Buckets & Boxes'];
const SIDES_AND_DIPS_ARR = restaurantJFC.menu['Sides & Dips'];

// render Chicken Sliders section
// function renderChickenSliders() {
// 	let chickenSliderRef = document.getElementById('chicken-slider');
// 	for (let i = 0; i < CHICKEN_SLIDER_ARR.length; i++) {
// 		let itemCard = renderItemCardTemplatete(
// 			CHICKEN_SLIDER_ARR[i].title,
// 			CHICKEN_SLIDER_ARR[i].description,
// 			CHICKEN_SLIDER_ARR[i].price,
// 		);
// 		chickenSliderRef.innerHTML += itemCard;
// 	}
// }

// render Buckets & Boxes section
function renderBucketsAndBoxes() {}

// render Sides & Dips section
function renderSidesAndDips() {}
