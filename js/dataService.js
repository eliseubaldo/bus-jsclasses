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
		picture: ''
	},
	{
		name: "Beijing",
		country: "China",
		picture: ''
	},
	{
		name: "Istanbul",
		country: "Turkey",
		picture: ''
	},
	{
		name: "Karachi",
		country: "Pakistan",
		picture: ''
	},
	{
		name: "Dhaka",
		country: "Bangladesh",
		picture: ''
	},
	{
		name: "Tokyo",
		country: "Japan",
		picture: ''
	},
	{
		name: "Moscow",
		country: "Russia",
		picture: ''
	},
	{
		name: "Mumbai",
		country: "India",
		picture: ''
	},
	{
		name: "Sao Paulo",
		country: "Brazil",
		picture: ''
	},
	{
		name: "Kinshasa",
		country: "Congo",
		picture: ''
	},
	{
		name: "Delhi",
		country: "India",
		picture: ''
	},
	{
		name: "Jakarta",
		country: "Indonesia",
		picture: ''
	},
	{
		name: "Seoul",
		country: "South Korea",
		picture: ''
	},
	{
		name: "Lima",
		country: "Peru",
		picture: ''
	},
	{
		name: "Mexico City",
		country: "Mexico",
		picture: ''
	},
	{
		name: "London",
		country: "United Kingdom",
		picture: ''
	},
	{
		name: "Bangalore",
		country: "India",
		picture: ''
	},
	{
		name: "New York",
		country: "United States",
		picture: ''
	},
	{
		name: "Bogota",
		country: "Colombia",
		picture: ''
	},
	{
		name: "Cairo",
		country: "Egypt",
		picture: ''
	},
	{
		name: "Ho Chi Minh City",
		country: "Vietnam",
		picture: ''
	},
	{
		name: "Hong Kong",
		country: "China",
		picture: ''
	},
	{
		name: "Nanjing",
		country: "China",
		picture: ''
	},
	{
		name: "Hanoi",
		country: "Vietnam",
		picture: ''
	},
	{
		name: "Hyderabad",
		country: "India",
		picture: ''
	},
	{
		name: "Baghdad",
		country: "Iraq",
		picture: ''
	},
	{
		name: "Chennai",
		country: "India",
		picture: ''
	},
	{
		name: "Riyadh",
		country: "Saudi Arabia",
		picture: ''
	},
	{
		name: "Rio de Janeiro",
		country: "Brazil",
		picture: ''
	},
	{
		name: "Bangkok",
		country: "Thailand",
		picture: ''
	},
	{
		name: "Singapore",
		country: "Singapore",
		picture: ''
	},
	{
		name: "Santiago",
		country: "Chile",
		picture: ''
	},
	{
		name: "Saint Petersburg",
		country: "Russia",
		picture: ''
	},
	{
		name: "Yangon",
		country: "Myanmar",
		picture: ''
	},
	{
		name: "Johannesburg",
		country: "South Africa",
		picture: ''
	},
	{
		name: "Abidjan",
		country: "Ivory Coast",
		picture: ''
	},
	{
		name: "Alexandria",
		country: "Egypt",
		picture: ''
	},
	{
		name: "Ankara",
		country: "Turkey",
		picture: ''
	},
	{
		name: "Giza",
		country: "Egypt",
		picture: ''
	},
	{
		name: "Los Angeles",
		country: "United States",
		picture: ''
	},
	{
		name: "New Taipei City",
		country: "Taiwan",
		picture: ''
	},
	{
		name: "Cape Town",
		country: "South Africa",
		picture: ''
	},
	{
		name: "Yokohama",
		country: "Japan",
		picture: ''
	},
	{
		name: "Berlin",
		country: "Germany",
		picture: ''
	},
	{
		name: "Busan",
		country: "South Korea",
		picture: ''
	},
	{
		name: "Jeddah",
		country: "Saudi Arabia",
		picture: ''
	},
	{
		name: "Durban",
		country: "South Africa",
		picture: ''
	},
	{
		name: "Kabul",
		country: "Afghanistan",
		picture: ''
	},
	{
		name: "Pyongyang",
		country: "North Korea",
		picture: ''
	},
	{
		name: "Madrid",
		country: "Spain",
		picture: ''
	},
	{
		name: "Porto",
		country: "Portugal",
		picture: ''
	},
	{
		name: "Ekurhuleni",
		country: "South Africa",
		picture: ''
	},
	{
		name: "Nairobi",
		country: "Kenya",
		picture: ''
	},
	{
		name: "Lisbon",
		country: "Portugal",
		picture: ''
	},
	{
		name: "Pune",
		country: "India",
		picture: ''
	},
	{
		name: "Addis Ababa",
		country: "Ethiopia",
		picture: ''
	},
	{
		name: "Jaipur",
		country: "India",
		picture: ''
	},
	{
		name: "Buenos Aires",
		country: "Argentina",
		picture: ''
	},
	{
		name: "San Tiago",
		country: "Spain",
		picture: ''
	},
	{
		name: "Adelaide",
		country: "Australia",
		picture: ''
	}
];