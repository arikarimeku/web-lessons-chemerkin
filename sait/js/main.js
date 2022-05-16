let carusels = document.getElementsByClassName('custom-carousel-item');

let slade = 0;

function prev() {
	showSlide(--slade);
}

function next() {
	showSlide(++slade);
}


const next_btn = document.getElementsByClassName('custom-carousel-control-next')[0];
const prev_btn = document.getElementsByClassName('custom-carousel-control-prev')[0];
const dots = document.querySelectorAll('.dot');


next_btn.addEventListener('click', next);
prev_btn.addEventListener('click', prev);


function showSlide(i) {
	let slides = document.getElementsByClassName('custom-carousel-item');
	let length = slides.length - 1;

	if (i < 0) {
		slade = length;
	}

	if (i > length) {
		slade = 0;
	}


	for (let element of slides) {
    	element.classList.remove('active');
  	}

  	slides[slade].classList.add('active');

	for (let dot of dots) {
    	dot.classList.remove('active');
  	}
  	dots[slade].classList.add('active');
}

dots.forEach((el, indx)=>{
	el.addEventListener('click', () => {
		showSlide(slade = indx);
	});
})
