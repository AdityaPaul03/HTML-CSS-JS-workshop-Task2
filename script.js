const API_KEY = 'api_key=f5210ad4c9d5c63d58791d9a77b0ca3f';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const input = document.forms['one'].querySelector('input');
input.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    let first = document.querySelector('#reqd img');
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(e => {
                if(e.title.toLowerCase().indexOf(term) === -1)
                {
                    first.classList.add('hidden');
                }
                console.log(first);
                first = first.nextElementSibling;
            });
        })
});
