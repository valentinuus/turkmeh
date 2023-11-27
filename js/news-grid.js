const elem = document.querySelector('.news-list');
const iso = new Isotope(elem, {
	// options
	itemSelector: '.news-list__item',
	layoutMode: 'masonry'
});