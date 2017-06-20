
function toggleShipping() {
	var shippingForm = document.getElementById('shipping-form');
	var shippingCheckbox = document.getElementById('shipping-checkbox');
	shippingForm.style.display = shippingCheckbox.checked ? 'none' : 'block';
}

function toggleCart() {
	var cartBox = document.getElementById('cart-box');
	var cartButton = document.getElementById('cart-button');
	if(cartBox.style.display != 'block') {
		cartBox.style.display = 'block';
	} else {
		cartBox.style.display = 'none';
	}
}