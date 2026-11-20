// Per hour / Full night switch for the price tables.
// Load with: <script src="js/price-table.js" defer></script>
document.querySelectorAll('.table-wrapper[data-price-mode]').forEach(function (wrapper) {
	var headings = wrapper.querySelectorAll('.price-heading');
	var cells = wrapper.querySelectorAll('td[data-hour]');
	var buttons = wrapper.querySelectorAll('.price-toggle button');

	function setMode(mode) {
		wrapper.setAttribute('data-price-mode', mode);
		headings.forEach(function (h) {
			h.textContent = mode === 'hour' ? 'Price / h' : 'Price / full night';
		});
		cells.forEach(function (cell) {
			cell.textContent = cell.getAttribute('data-' + mode);
		});
		buttons.forEach(function (b) {
			b.setAttribute('aria-pressed', b.getAttribute('data-mode') === mode ? 'true' : 'false');
		});
	}

	buttons.forEach(function (b) {
		b.addEventListener('click', function () { setMode(b.getAttribute('data-mode')); });
	});
	setMode(wrapper.getAttribute('data-price-mode'));
});