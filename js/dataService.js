const API_URL = "https://jsonplaceholder.typicode.com/users";


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



// export function fetchUser(id) { 
//     return fetch(API_URL+`/${id}`)
//     .then(response => response.json());
// }