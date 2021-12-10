
document.addEventListener('DOMContentLoaded', function(){

	const creatBut = document.querySelector("#creatures")
	const equipBut = document.querySelector("#equipment")
	const materBut = document.querySelector("#materials")
	const monstBut = document.querySelector("#monsters")
	const treasBut = document.querySelector("#treasure")

	console.log(URL)

	console.log(creatBut, equipBut, materBut, monstBut, treasBut)

	// fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
	// .then(res => res.json())
	// .then(handleMonsterPics)

	creatBut.addEventListener('click', getCreatures)
	equipBut.addEventListener('click', getEquipment)
	materBut.addEventListener('click', getMaterials)
	monstBut.addEventListener('click', getMonsters)
	treasBut.addEventListener('click', getTreasure)

})//end of DOMContentLoaded

const URL = 'https://botw-compendium.herokuapp.com/api/v2/category'

//grab all images of the category
function handleMonsterPics(monsters){
	let imageContainer = document.querySelector("#image-container")
	imageContainer.innerHTML = ''
	monsters.data.forEach(monster => imageContainer.innerHTML += createImage(monster.image))
	console.log(monsters)
}

function handleCreaturePics(creatures){
	let imageContainer = document.querySelector("#image-container")
	imageContainer.innerHTML = ''
	creatures.data.food.forEach(creature => imageContainer.innerHTML += createImage(creature.image))
	console.log(creatures)
}

//create and append images to the DOM
function createImage(url){
	let image = document.createElement('img')
	image = `<img class="image" src="${url}"/>`
	// image.addEventListener('click', () => {
	// 	console.log('Im clickable')
	// })
	console.log(image)
	return image
}

function getCreatures() {
	fetch(`${URL}/creatures`)
	.then(res => res.json())
	.then(handleCreaturePics)
}

function getEquipment() {
	fetch(`${URL}/equipment`)
	.then(res => res.json())
	.then(handleMonsterPics)
}

function getMaterials() {
	fetch(`${URL}/materials`)
	.then(res => res.json())
	.then(handleMonsterPics)
}

function getMonsters() {
	fetch(`${URL}/monsters`)
	.then(res => res.json())
	.then(handleMonsterPics)
}

function getTreasure() {
	fetch(`${URL}/treasure`)
	.then(res => res.json())
	.then(handleMonsterPics)
}
