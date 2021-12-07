
document.addEventListener('DOMContentLoaded', function(){

	fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
	.then(res => res.json())
	.then(handleMonsterPics)

})//end of DOMContentLoaded

//grab the images of all the monsters
function handleMonsterPics(monsters){
	let imageContainer = document.querySelector("#image-container")
	monsters.data.forEach(monster => imageContainer.innerHTML += createImage(monster.image))
	console.log(monsters)
}

//create and append monster images to the DOM
function createImage(url){
	let image = document.createElement('img')
	console.log(image)
	image = `<img class="image" src="${url}"/>`
	return image
}