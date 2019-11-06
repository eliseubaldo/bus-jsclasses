const API_URL = "https://jsonplaceholder.typicode.com/users";
import { randonNumber } from './utils.js';


export function fetchUser(id) { 
    return fetch(API_URL+`/${id}`)
    .then(response => {
        if (response.status !== 200) {
            // make the promise be rejected if we didn't get a 200 response
            throw new Error("Not 200 response")
        } else {
            return response.json();
        }
    })
    .catch((err) => {
        console.log(err)
    });
} 

export function fetchRandomPassenger() {
    const randomId = randonNumber(10)+1;
    return fetchUser(randomId);
}

export function fetchRandomCityName() {
    return cities[randonNumber(cities.length -1)];
}

let cities = [
	{
		name: "Shanghai",
		country: "China",
		picture: 'shanghai.svg'
	},
	{
		name: "Beijing",
		country: "China",
		picture: 'beijing.svg'
	},
	{
		name: "Istanbul",
		country: "Turkey",
		picture: 'istambul.svg'
	},
	{
		name: "Athens",
		country: "Greece",
		picture: 'athens.svg'
	},
	{
		name: "Budapest",
		country: "Hungary",
		picture: 'budapest.svg'
	},
	{
		name: "Tokyo",
		country: "Japan",
		picture: 'tokyo.svg'
	},
	{
		name: "Moscow",
		country: "Russia",
		picture: 'moscow.svg'
	},
	{
		name: "Mumbai",
		country: "India",
		picture: 'mumbai.svg'
	},
	{
		name: "Sao Paulo",
		country: "Brazil",
		picture: 'saopaulo.svg'
	},
	{
		name: "Kinshasa",
		country: "Congo",
		picture: undefined
	},
	{
		name: "Rome",
		country: "Italy",
		picture: 'rome.svg'
	},
	{
		name: "Jakarta",
		country: "Indonesia",
		picture: undefined
	},
	{
		name: "Seoul",
		country: "South Korea",
		picture: undefined
	},
	{
		name: "Lima",
		country: "Peru",
		picture: undefined
	},
	{
		name: "Mexico City",
		country: "Mexico",
		picture: undefined
	},
	{
		name: "London",
		country: "United Kingdom",
		picture: 'london.svg'
	},
	{
		name: "Bangalore",
		country: "India",
		picture: undefined
	},
	{
		name: "New York",
		country: "United States",
		picture: 'newyork.svg'
	},
	{
		name: "Bogota",
		country: "Colombia",
		picture: undefined
	},
	{
		name: "Cairo",
		country: "Egypt",
		picture: 'cairo.svg'
	},
	{
		name: "Ho Chi Minh City",
		country: "Vietnam",
		picture: undefined
	},
	{
		name: "Hong Kong",
		country: "China",
		picture: undefined
	},
	{
		name: "Wiltshire",
		country: "England",
		picture: 'wiltshire.svg'
	},
	{
		name: "Hanoi",
		country: "Vietnam",
		picture: undefined
	},
	{
		name: "Hyderabad",
		country: "India",
		picture: undefined
	},
	{
		name: "Baghdad",
		country: "Iraq",
		picture: undefined
	},
	{
		name: "Chennai",
		country: "India",
		picture: undefined
	},
	{
		name: "Riyadh",
		country: "Saudi Arabia",
		picture: undefined
	},
	{
		name: "Rio de Janeiro",
		country: "Brazil",
		picture: 'rio.svg'
	},
	{
		name: "Bangkok",
		country: "Thailand",
		picture: 'bangkok.svg'
	},
	{
		name: "Singapore",
		country: "Singapore",
		picture: undefined
	},
	{
		name: "Santiago",
		country: "Chile",
		picture: 'santiago.svg'
	},
	{
		name: "Saint Petersburg",
		country: "Russia",
		picture: 'stpetesburg.svg'
	},
	{
		name: "Yangon",
		country: "Myanmar",
		picture: undefined
	},
	{
		name: "Johannesburg",
		country: "South Africa",
		picture: undefined
	},
	{
		name: "Abidjan",
		country: "Ivory Coast",
		picture: undefined
	},
	{
		name: "Alexandria",
		country: "Egypt",
		picture: undefined
	},
	{
		name: "Ankara",
		country: "Turkey",
		picture: undefined
	},
	{
		name: "Giza",
		country: "Egypt",
		picture: 'abusimbel.svg'
	},
	{
		name: "Los Angeles",
		country: "United States",
		picture: 'losangeles.svg'
	},
	{
		name: "New Taipei City",
		country: "Taiwan",
		picture: undefined
	},
	{
		name: "Cape Town",
		country: "South Africa",
		picture: undefined
	},
	{
		name: "Yokohama",
		country: "Japan",
		picture: undefined
	},
	{
		name: "Berlin",
		country: "Germany",
		picture: undefined
	},
	{
		name: "Paris",
		country: "France",
		picture: 'paris.svg'
	},
	{
		name: "Pisa",
		country: "italy",
		picture: 'pisa.svg'
	},
	{
		name: "Durban",
		country: "South Africa",
		picture: undefined
	},
	{
		name: "Abu Simbel",
		country: "Egypt",
		picture: 'abusimbel.svg'
	},
	{
		name: "Madrid",
		country: "Spain",
		picture: undefined
	},
	{
		name: "Porto",
		country: "Portugal",
		picture: undefined
	},
	{
		name: "Nairobi",
		country: "Kenya",
		picture: undefined
	},
	{
		name: "Lisbon",
		country: "Portugal",
		picture: undefined
	},
	{
		name: "Agra",
		country: "India",
		picture: 'agra.svg'
	},
	{
		name: "Addis Ababa",
		country: "Ethiopia",
		picture: undefined
	},
	{
		name: "Jaipur",
		country: "India",
		picture: undefined
	},
	{
		name: "Buenos Aires",
		country: "Argentina",
		picture: undefined
	},
	{
		name: "San Tiago",
		country: "Spain",
		picture: undefined
	},
	{
		name: "Adelaide",
		country: "Australia",
		picture: undefined
	}
];