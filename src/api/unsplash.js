import axios from 'axios'; // configuration of axios/unsplash request

// creates an instance of the axios client that can be customized 

export default axios.create({ 
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 
        'Client-ID xuTm5kvjY3gqOA6Mju70UCZ_PfJMDAC6B1QsNSd5IPA'
    }
});
