function init() {
	renderChickenSliders();
	renderBucketsAndBoxes();
	renderSidesAndDips();
}

// constants

const CHICKEN_SLIDER_ARR = restaurantJFC.menu['Chicken Sliders'];
const BUCKETS_AND_BOXES_ARR = restaurantJFC.menu['Buckets & Boxes'];
const SIDES_AND_DIPS_ARR = restaurantJFC.menu['Sides & Dips'];

function renderChickenSliders() {
	let chickenSliderRef = document.getElementById('chicken-slider');

	for (let i = 0; i < CHICKEN_SLIDER_ARR.length; i++) {
		let chickenSliderTemplate = renderMenuItemsTemplate(
			CHICKEN_SLIDER_ARR[i].title,
			CHICKEN_SLIDER_ARR[i].description,
			CHICKEN_SLIDER_ARR[i].price,
		);
		chickenSliderRef.innerHTML += chickenSliderTemplate;
	}
}

function renderBucketsAndBoxes() {
	let bucketsAndBoxesRef = document.getElementById('buckets-and-boxes');

	for (let i = 0; i < BUCKETS_AND_BOXES_ARR.length; i++) {
		let bucketsAndBoxesTemplate = renderMenuItemsTemplate(
			BUCKETS_AND_BOXES_ARR[i].title,
			BUCKETS_AND_BOXES_ARR[i].description,
			BUCKETS_AND_BOXES_ARR[i].price,
		);
		bucketsAndBoxesRef.innerHTML += bucketsAndBoxesTemplate;
	}
}

function renderSidesAndDips() {
	let sidesAndDipsRef = document.getElementById('sides-and-dips');

	for (let i = 0; i < SIDES_AND_DIPS_ARR.length; i++) {
		let sidesAndDipsTemplate = renderMenuItemsTemplate(
			SIDES_AND_DIPS_ARR[i].title,
			SIDES_AND_DIPS_ARR[i].description,
			SIDES_AND_DIPS_ARR[i].price,
		);

		sidesAndDipsRef.innerHTML += sidesAndDipsTemplate;
	}
}
