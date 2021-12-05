
document.addEventListener('DOMContentLoaded', function(){

	fetch('https://dog.ceo/api/breeds/image/random/5')
	.then(res => res.json())
	.then(handlePictures)

})//end of DOMContentLoaded

function handlePictures(jsonObject){
	let cardContainer = document.querySelector("#card-container")
	let arrOfURLS = jsonObject.message
	arrOfURLS.forEach(url => {
		cardContainer.innerHTML += createImage(url)
	})
}

function createImage(url){
	let card = document.createElement('img')
	card.className = ".cards"
	console.log(card.className)
	card = `<img src="${url}"/>`
	return card
}