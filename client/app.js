import axios from 'axios';

let restaurantsPromise = axios.get('/api/restaurants');

restaurantsPromise.then((response) => {
    console.log("The request succeeded");
    console.log(response);
});

restaurantsPromise.catch((error) => {
    console.log("The request failed");
    console.log(error);
});

let insertPromise = axios.post('/api/restaurants', { name: 'Starbucks', description: 'The best coffee in town' });

insertPromise.then((addedItems) => {
    console.log(addedItems);
}).catch((error) => {
    console.log(error);
});
