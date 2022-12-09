// api: http://www.omdbapi.com/?i=tt3896198&apikey=97f5b4c9
//https://www.omdbapi.com/?apikey=97f5b4c9&s
// https://www.omdbapi.com/?i=tt3896198&apikey=97f5b4c9
//https://www.omdbapi.com/?i=tt3896198&apikey=97f5b4c9
//https://www.omdbapi.com/?apikey=97f5b4c9&s=marvel


const moviesList = document.querySelector(".books")
let contrastToggle = false;
const scaleFactor = 1 / 20;

async function main() {
    const movies = await fetch ("https://www.omdbapi.com/?apikey=97f5b4c9&s=spider");
    const moviesData = await movies.json();
   
    moviesList.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
    
   
    
}

main()



function moviesHTML(movie) {
    return `<div class="book" onclick="showMoviePost(${movie.imdbID})">
    <figure class="book__img_wrapper">
        <img class="book_img" src=${movie.Poster} alt="">
    </figure>
    <div class="book__title">
        ${movie.Title} - ${movie.Year}
    </div>
    <div class="book__ratings">
        ${movie.Type}
    </div>
    
</div>`
}


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"

    } else {
        document.body.classList.remove("dark-theme")
    }
}



function showMoviePost(imdbID) {
    localStorage.setItem("imdbID", imdbID);
    window.location.href = `${window.location.imdbID}`
}