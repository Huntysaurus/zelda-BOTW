
    fetch('https://trashnothing.com/api/v1.2/trashnothing-openapi.yaml', {
	method: "GET",
	headers: {"Content-type": "application/json"}
})
 .then(response => response.json()) 
 .then(json => console.log(json));

console.log('hello!')
