
document.addEventListener('DOMContentLoaded', function(){

	fetch('https://dog.ceo/api/breeds/image/random/5')
	.then(res => res.json())
	.then(data => console.log(data))

})//end of DOMContentLoaded
