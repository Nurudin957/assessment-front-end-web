console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	/* console.log('form submit'); */
	alert('form submitted');
}

function mouseOver () {
	
	alert('you are awesome');

}




let form = document.querySelector('#contact');
let image = document.querySelector('.img');

form.addEventListener('submit', handleSubmit);
image.addEventListener("mouseover",mouseOver);