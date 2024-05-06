// Claus
const keys = {
    api_key: '65748ff1e0ba0a684b19820d937578dd',
    session_id: '84ac983908985fd74072f415c7109c01f596822b',
    account_id: '21215204'
}

let moviesResult = document.getElementById("moviesResult");
let loading = document.getElementById('loading');

var total_pages = 0;
var current_page = 1;
let query;


async function setFav(id, favBool) {
    moviesResult.innerHTML = "";
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTc0OGZmMWUwYmEwYTY4NGIxOTgyMGQ5Mzc1NzhkZCIsInN1YiI6IjY2MWQ0MDdhOTMxZWExMDE2MzY1MWI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VybyGRanHS4CGtqNNnT5nzutqAiYK6t6HHk1AmcD7Fg'
        },
        body: JSON.stringify({ media_type: 'tv', media_id: id, favorite: favBool })
    };

    await fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite?session_id=${keys.session_id}`, options)
        .then(response => response.json())
        .then(response => console.log(`${id} marked as ${favBool}`))
        .catch(err => console.error(err));

    showFavs();
}

// Función para mostrar las películas favoritas utilizando async-await
async function showFavs() {
    moviesResult.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTc0OGZmMWUwYmEwYTY4NGIxOTgyMGQ5Mzc1NzhkZCIsInN1YiI6IjY2MWQ0MDdhOTMxZWExMDE2MzY1MWI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VybyGRanHS4CGtqNNnT5nzutqAiYK6t6HHk1AmcD7Fg'
        }
    };

    await fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/favorite/tv?language=en-US&page=1&session_id=${keys.session_id}&sort_by=created_at.asc`, options)
        .then(response => response.json())
        .then(response => {
            // Mostrar las películas favoritas
            response.results.forEach(movie => {
                printMovie(movie, true, false);
            });
        })
        .catch(err => console.error(err));

}


async function setWatch(id, favBool) {
    moviesResult.innerHTML = "";
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTc0OGZmMWUwYmEwYTY4NGIxOTgyMGQ5Mzc1NzhkZCIsInN1YiI6IjY2MWQ0MDdhOTMxZWExMDE2MzY1MWI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VybyGRanHS4CGtqNNnT5nzutqAiYK6t6HHk1AmcD7Fg'
        },
        body: JSON.stringify({ media_type: 'tv', media_id: id, watchlist: favBool })
    };

    fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/watchlist?session_id=${keys.session_id}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    showWatch();
}

// Función para mostrar las películas vistes utilizando async-await
async function showWatch() {
    moviesResult.innerHTML = "";
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTc0OGZmMWUwYmEwYTY4NGIxOTgyMGQ5Mzc1NzhkZCIsInN1YiI6IjY2MWQ0MDdhOTMxZWExMDE2MzY1MWI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VybyGRanHS4CGtqNNnT5nzutqAiYK6t6HHk1AmcD7Fg'
        }
    };

    fetch(`https://api.themoviedb.org/3/account/${keys.account_id}/watchlist/tv?language=en-US&page=1&session_id=${keys.session_id}&sort_by=created_at.asc`, options)
        .then(response => response.json())
        .then(response => {
            // Mostrar las películas favoritas
            response.results.forEach(movie => {
                printMovie(movie, false, true);
            });
        })
        .catch(err => console.error(err));

}

function searchMovies(query, neteja) {
    clearInput();
    removeActive();
    if (neteja) {
        moviesResult.innerHTML = "";
    }
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTc0OGZmMWUwYmEwYTY4NGIxOTgyMGQ5Mzc1NzhkZCIsInN1YiI6IjY2MWQ0MDdhOTMxZWExMDE2MzY1MWI4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VybyGRanHS4CGtqNNnT5nzutqAiYK6t6HHk1AmcD7Fg'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/tv?query=${query}&page=${current_page}&session_id=${keys.session_id}&sort_by=created_at.asc`, options)
        .then(response => response.json())
        .then(response => {
            total_pages = response.total_pages
            // Mostrar las películas favoritas
            response.results.forEach(movie => {
                printMovie(movie, false, true);
            });
        })
        .catch(err => console.error(err));
    loading.style.display = 'none';
}



/* FUNCIONS D'INTERACCIÓ AMB EL DOM */

// Click Favorites
document.getElementById("showFavs").addEventListener("click", function () {
    removeActive();
    this.classList.add("active");

    showFavs();
})

// Click Watchlist
document.getElementById("showWatch").addEventListener("click", function () {
    removeActive();
    this.classList.add("active");

    showWatch();
})

/* Funcions per detectar la cerca d'una pel·lícula */
// Intro a l'input
document.getElementById("search").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        query = this.value;
        searchMovies(this.value, true);
    }
});

// Click a la lupa
document.querySelector(".searchBar i").addEventListener("click", () => searchMovies(document.getElementById("search").value), true);

// Netejar l'input
document.getElementById("search").addEventListener('click', () => clearInput());

function clearInput() {
    document.getElementById("search").value = "";
}

// Elimina l'atribut active del menú
function removeActive() {
    document.querySelectorAll(".menu li a").forEach(el => el.classList.remove("active"));
}

/* Funció per printar les pel·lícules */
function printMovie(movie, fav, watch) {

    let favIcon = fav ? 'iconActive' : 'iconNoActive';
    let watchIcon = watch ? 'iconActive' : 'iconNoActive';

    moviesResult.innerHTML += `<div class="movie">
                                    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
                                    <h3>${movie.name}</h3 >
    <div class="buttons">
        <a id="fav" onClick="setFav(${movie.id}, ${!fav})"><i class="fa-solid fa-heart ${favIcon}"></i></a>
        <a id="watch" onClick="setWatch(${movie.id}, ${!watch})"><i class="fa-solid fa-eye ${watchIcon}"></i></a>
    </div>`;
}


// Detecta el scroll
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Verifica si s'ha arribat al final de la pàgina i encara hi ha més pàgines per consultar
    if (scrollTop + clientHeight >= scrollHeight - 5 && current_page < total_pages) {
        // Mostra l'element de loading
        loading.style.display = 'flex';

        // Incrementa la pàgina actual
        current_page++;

        // Torna a cridar la funció per obtenir dades de la pàgina següent
        setTimeout(function () {
            searchMovies(query, false);
        }, 1000);
    }
});


