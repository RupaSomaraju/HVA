// Declaring the variables

let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let input= document.querySelector(".search");
let cityname= document.querySelector(".city");
let window= document.querySelector(".submit");

window.addEventListener("click", function() => {

	// API ID
	const api = "enter ur api";

	// API URL
	const base =
`http://api.openweathermap.org/data/2.5/weather?q=` +
inputval.value+&api';

	// Calling the API
	fetch(base)
		.then(response=> response.json())
		.then((data) => {
		let citynameval=data['cityname'];
        let tempval=data['main']['temperature'];
        let sumval=data['weather'][0]['summary'];
        summary.innerHTML="summary: "+sumval;
        temperature.innerHTML=tempval+ "°C";
        inputval.value="";
	})
.catch(err => alert("wrongcity"))-
})
