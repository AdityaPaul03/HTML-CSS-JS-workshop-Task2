const API_KEY = 'api_key=f5210ad4c9d5c63d58791d9a77b0ca3f';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

let chr;

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        chr = data;
        console.log(data);
        data.results.forEach(e => {
            const div = document.createElement('div');
            const article = document.createElement('article');
            const image = document.createElement('img');
            const background = IMG_URL + e.poster_path;
            const title = document.createElement('h6');
            image.setAttribute('src',background);
            image.classList.add('background-image');
            article.innerText = e.title;
            const path = document.querySelector('#reqd');
            path.appendChild(div);
            div.appendChild(article);
            div.appendChild(image);
        });
    });

setTimeout(function() {
    const all = document.querySelectorAll('#reqd div');
    console.log(all);
    const searchBar = document.forms['one'].querySelector('input');
    searchBar.addEventListener('keyup', function(x) {
        const term = x.target.value.toLowerCase();
        all.forEach(a =>{
            console.log(a.firstChild.innerText);
            if(a.firstChild.innerText.toLowerCase().indexOf(term) === -1)
            {
                a.style.display = 'none';
            }
            else{
                if(a.firstChild.innerText.toLowerCase() === 'doctor strange in the multiverse of madness' || a.firstChild.innerText.toLowerCase() === 'fantastic beasts: the secrets of dumbledore' || a.firstChild.innerText.toLowerCase() === 'dragon ball super: super hero')
                {
                    a.style.display = 'none';
                }
                else{
                    a.style.display = 'inline';
                }
            }
        });
    });
}, 1000);

