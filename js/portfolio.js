document.querySelector('button').addEventListener('click', () => {
	// fsLightboxInstances['gal'].open(0);
	

	lightbox.open();
});

fsLightboxInstances['gal'].props.onOpen = () => {
	// console.log(fsLightboxInstances)
};


const lightbox = new FsLightbox();

// set up props, like sources, types, events etc.
lightbox.props.sources = ['img/1.jpg', 'img/2.jpg'];
lightbox.props.onInit = () => console.log('Lightbox initialized!');

// lightbox.open();
