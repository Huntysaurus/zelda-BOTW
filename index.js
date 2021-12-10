
document.addEventListener('DOMContentLoaded', function(){

	const creatBut = document.querySelector("#creatures")
	const equipBut = document.querySelector("#equipment")
	const materBut = document.querySelector("#materials")
	const monstBut = document.querySelector("#monsters")
	const treasBut = document.querySelector("#treasure")
	let imageContainer = document.querySelector("#image-container")

	creatBut.addEventListener('click', getCreatures)
	equipBut.addEventListener('click', getEquipment)
	materBut.addEventListener('click', getMaterials)
	monstBut.addEventListener('click', getMonsters)
	treasBut.addEventListener('click', getTreasure)

const URL = 'https://botw-compendium.herokuapp.com/api/v2/category'

//grab all images of the category
function handleCategoryInfo(objects){
	imageContainer.innerHTML = ''
	//objects.data.forEach(object => imageContainer.innerHTML += createImage(object.image))
	objects.data.forEach(object => createImage(object))
}

//seperate handler for creatures due to nested array
function handleCreatureInfo(creatures){
	imageContainer.innerHTML = ''
	creatures.data.food.forEach(creature => createImage(creature))
	console.log(creatures)
}

//create and append images to the DOM
function createImage(url){
	let span = document.createElement('span')
	span.innerHTML = `
	<img class="image" src="${url.image}"/>
	<p id="image-description">
		"${url.description}"
	</p>
	<table id="info-table">
		<tr>
			<th>Name:</th>
			<th>Category:</th>
			<th>Common Locations:</th>
			<th>Drops:</th>
			<th>Cooking Effect:</th>
		</tr>
		<tr>
			<td> ${url.name} </td>
			<td> ${url.category} </td>
			<td> ${url.common_locations} </td>
			<td> ${url.drops} </td>
			<td> ${url.cooking_effect} </td>
			</tr>
	</table>
	`
	// if(url.id.value = undefined) {
	// 	console.log("does not exist")
	// }

	imageContainer.append(span)
}

function getCreatures() {
	fetch(`${URL}/creatures`)
	.then(res => res.json())
	.then(handleCreatureInfo)
}

function getEquipment() {
	fetch(`${URL}/equipment`)
	.then(res => res.json())
	.then(handleCategoryInfo)
}

function getMaterials() {
	fetch(`${URL}/materials`)
	.then(res => res.json())
	.then(handleCategoryInfo)
}

function getMonsters() {
	fetch(`${URL}/monsters`)
	.then(res => res.json())
	.then(handleCategoryInfo)
}

function getTreasure() {
	fetch(`${URL}/treasure`)
	.then(res => res.json())
	.then(handleCategoryInfo)
}

})//end of DOMContentLoaded
