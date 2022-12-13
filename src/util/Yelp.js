// API key contains Yelp API v3 Credentials (make sure to leave it empty when this file is being shared or not in use)
const apiKey = '';
// This object will store the functionality needed to interact with the Yelp API
const Yelp = {

};

// Method to retrieve search results from the Yelp API
const search = (term, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
    , {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }  
    })
    .then(response => response.json())
    .then(jsonResponse => { 
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                
            });
        }
    });
};