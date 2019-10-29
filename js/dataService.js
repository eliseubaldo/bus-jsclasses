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
		country: "China"
	},
	{
		name: "Beijing",
		country: "China"
	},
	{
		name: "Istanbul",
		country: "Turkey"
	},
	{
		name: "Karachi",
		country: "Pakistan"
	},
	{
		name: "Dhaka",
		country: "Bangladesh"
	},
	{
		name: "Tokyo",
		country: "Japan"
	},
	{
		name: "Moscow",
		country: "Russia"
	},
	{
		name: "Guangzhou",
		country: "China"
	},
	{
		name: "Mumbai",
		country: "India"
	},
	{
		name: "Sao Paulo",
		country: "Brazil"
	},
	{
		name: "Kinshasa",
		country: "Congo"
	},
	{
		name: "Delhi",
		country: "India"
	},
	{
		name: "Jakarta",
		country: "Indonesia"
	},
	{
		name: "Seoul",
		country: "South Korea"
	},
	{
		name: "Lima",
		country: "Peru"
	},
	{
		name: "Mexico City",
		country: "Mexico"
	},
	{
		name: "London",
		country: "United Kingdom"
	},
	{
		name: "Bangalore",
		country: "India"
	},
	{
		name: "New York",
		country: "United States"
	},
	{
		name: "Bogota",
		country: "Colombia"
	},
	{
		name: "Cairo",
		country: "Egypt"
	},
	{
		name: "Ho Chi Minh City",
		country: "Vietnam"
	},
	{
		name: "Hong Kong",
		country: "China"
	},
	{
		name: "Nanjing",
		country: "China"
	},
	{
		name: "Hanoi",
		country: "Vietnam"
	},
	{
		name: "Hyderabad",
		country: "India"
	},
	{
		name: "Baghdad",
		country: "Iraq"
	},
	{
		name: "Chennai",
		country: "India"
	},
	{
		name: "Riyadh",
		country: "Saudi Arabia"
	},
	{
		name: "Rio de Janeiro",
		country: "Brazil"
	},
	{
		name: "Bangkok",
		country: "Thailand"
	},
	{
		name: "Singapore",
		country: "Singapore"
	},
	{
		name: "Santiago",
		country: "Chile"
	},
	{
		name: "Saint Petersburg",
		country: "Russia"
	},
	{
		name: "Dar es Salaam",
		country: "Tanzania"
	},
	{
		name: "Yangon",
		country: "Myanmar"
	},
	{
		name: "Johannesburg",
		country: "South Africa"
	},
	{
		name: "Abidjan",
		country: "Ivory Coast"
	},
	{
		name: "Alexandria",
		country: "Egypt"
	},
	{
		name: "Ankara",
		country: "Turkey"
	},
	{
		name: "Giza",
		country: "Egypt"
	},
	{
		name: "Los Angeles",
		country: "United States"
	},
	{
		name: "New Taipei City",
		country: "Taiwan"
	},
	{
		name: "Cape Town",
		country: "South Africa"
	},
	{
		name: "Yokohama",
		country: "Japan"
	},
	{
		name: "Berlin",
		country: "Germany"
	},
	{
		name: "Busan",
		country: "South Korea"
	},
	{
		name: "Jeddah",
		country: "Saudi Arabia"
	},
	{
		name: "Durban",
		country: "South Africa"
	},
	{
		name: "Kabul",
		country: "Afghanistan"
	},
	{
		name: "Casablanca",
		country: "Morocco"
	},
	{
		name: "Pyongyang",
		country: "North Korea"
	},
	{
		name: "Madrid",
		country: "Spain"
	},
	{
		name: "Porto",
		country: "Portugal"
	},
	{
		name: "Ekurhuleni",
		country: "South Africa"
	},
	{
		name: "Nairobi",
		country: "Kenya"
	},
	{
		name: "Lisbon",
		country: "Portugal"
	},
	{
		name: "Pune",
		country: "India"
	},
	{
		name: "Addis Ababa",
		country: "Ethiopia"
	},
	{
		name: "Jaipur",
		country: "India"
	},
	{
		name: "Buenos Aires",
		country: "Argentina"
	},
	{
		name: "San Tiago",
		country: "Spain"
	},
	{
		name: "Adelaide",
		country: "Australia"
	}
];