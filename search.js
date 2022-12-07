const moviesSearchList = document.querySelector(".latest_books")
const title = localStorage.getItem("title")

async function onSearchChange(event) {
    
    let name = event.target.title;
    renderMovies(name)
    console.log(renderMovies(name))

}


async function renderMovies(title) {
    const moviesSearch = await fetch (`https://www.omdbapi.com/?apikey=97f5b4c9&s=${title}`)
    const moviesSearchData = await moviesSearch.json();
    console.log(moviesSearch)
    moviesSearchList.innerHTML = moviesSearchData.Search.map((movieS) => moviesSearchPost(movieS)).join("");
    
}

renderMovies(title)


function moviesSearchPost(movieS) {
    return `<div class="movie">
    <figure class="book__img_wrapper">
        <img class="book_img" src=${movieS.Poster} alt="">
    </figure>
    <div class="book__title">
        ${movieS.Title}
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