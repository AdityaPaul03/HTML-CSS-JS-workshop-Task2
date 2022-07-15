const API_KEY = 'api_key=f5210ad4c9d5c63d58791d9a77b0ca3f';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let i=0;
        for(i;i<20;i++)
        {
            const path = document.querySelector('#reqd');
            let background = data.results[i].poster_path;
            console.log(background);
        }
    });
