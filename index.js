// api: http://www.omdbapi.com/?i=tt3896198&apikey=97f5b4c9
//https://www.omdbapi.com/?apikey=97f5b4c9&s
// https://www.omdbapi.com/?i=tt3896198&apikey=97f5b4c9
//https://www.omdbapi.com/?i=tt3896198&apikey=97f5b4c9
//https://www.omdbapi.com/?apikey=97f5b4c9&s=marvel


const moviesList = document.querySelector(".books")

async function main() {
    const movies = await fetch ("https://www.omdbapi.com/?apikey=97f5b4c9&s=marvel");
    const moviesData = await movies.json();
    console.log(moviesData)
    moviesList.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
    
   
    
}

main()



function moviesHTML(movie) {
    return `<div class="book">
    <figure class="book__img_wrapper">
        <img class="book_img" src=${movie.Poster} alt="">
    </figure>
    <div class="book__title">
        ${movie.Title}
    </div>
    <div class="book__ratings">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
    </div>
    
</div>`
}



async function onSearchChange(event) {
    const name = event.target.Title;
    renderMovies(Title)

}


async function renderMovies(Title) {
    const moviesSearch = await fetch (`https://www.omdbapi.com/?apikey=97f5b4c9&s=${Title}`)
    const moviesSearchData = await moviesSearch.json();
    moviesList.innerHTML = moviesData.Search.map((movie) => moviesHTML(movie)).join("");
    console.log(moviesSearch)
}

renderMovies(Title)