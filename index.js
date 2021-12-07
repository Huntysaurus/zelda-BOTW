
document.addEventListener('DOMContentLoaded', function(){

	fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
	.then(res => res.json())
	.then(handleMonsterPics)

})//end of DOMContentLoaded

//grab the images of all the monsters
function handleMonsterPics(monsters){
	let cardContainer = document.querySelector("#image-container")
	monsters.data.forEach(monster => cardContainer.innerHTML += createImage(monster.image))
	console.log(monsters)
}

//create and append monster images to the DOM
function createImage(url){
	let image = document.querySelector('.image')
	console.log(image)
	image = `<img class="image" src="${url}" width"300" height"300"/>`
	return image
}