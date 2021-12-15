
document.addEventListener('DOMContentLoaded', () => {

	const URL = 'https://botw-compendium.herokuapp.com/api/v2/category'

	const creatBut = document.querySelector("#creatures")
	const equipBut = document.querySelector("#equipment")
	const materBut = document.querySelector("#materials")
	const monstBut = document.querySelector("#monsters")
	const treasBut = document.querySelector("#treasure")
	const imageContainer = document.querySelector("#image-container")
	const form = document.querySelector("#form")
	const backToTop = document.getElementById('back-to-top')

//event listeners


	backToTop.addEventListener('click', () => {
		window.scrollTo(0,200)
	})

	creatBut.addEventListener('click', getCreatures)
	equipBut.addEventListener('click', getEquipment)
	materBut.addEventListener('click', getMaterials)
	monstBut.addEventListener('click', getMonsters)
	treasBut.addEventListener('click', getTreasure)
	form.addEventListener('submit',clickSubmit)

//grab all images of the category
	function handleCategoryInfo(objects){
		imageContainer.innerHTML = ''
		objects.data.forEach(object => createImage(object))
	}

//seperate handler for creatures due to nested array
	function handleCreatureInfo(creatures){
		imageContainer.innerHTML = ''
		creatures.data.food.forEach(creature => createImage(creature))
	}

//add form functionality
	function clickSubmit(e) {
		e.preventDefault()
		imageContainer.innerHTML = ''
		const input = document.getElementById('search-by-name')
		fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${input.value}`)
		.then(res => res.json())
		.then(obj => createImage(obj.data))
	}

//create and append images to the DOM
	function createImage(url){
		if (url.hasOwnProperty('name')) {
			let div = document.createElement('div')
			div.className = 'image-div'
			div.innerHTML = `
			<h1>
				${url.name}
			</h1>
			<img class="image" src="${url.image}"/>
			<p class="image-description">
				${url.description}
			</p>
			<table class="info-table">
				<tr>
					<th>Name:</th>
					<th>Category:</th>
					<th>Common Locations:</th>
					<th>Drops:</th>
					<th>Cooking Effect:</th>
					<th>Hearts Recoverd:</th>
					<th>Defense:</th>
				</tr>
				<tr>
					<td>${url.name}</td>
					<td>${url.category}</td>
					<td>${url.common_locations}</td>
					<td>${url.drops}</td>
					<td>${url.cooking_effect}</td>
					<td>${url.hearts_recovered}</td>
					<td>${url.defense}</td>
					</tr>
			</table>
			`
			imageContainer.append(div)
		} else {
			alert('Unable to find. Double check for proper spelling and spacing.')
		}
	}

//fetches for categories
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

