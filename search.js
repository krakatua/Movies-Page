const moviesSearchList = document.querySelector(".latest_books")
const searchBar = document.getElementById('searchBar')


let moviesSearchData = [];


/*searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value
    console.log(searchString)
    renderMovies(e)
}) 
async function onSearchChange(event) {
    
    let name = event.target.value;
    renderMovies(name)
    console.log(renderMovies(name))

}
const searchTitle = document.getElementsById("nameofM");
    searchTitle.innerHTML = `${name}`
*/


async function onSearchChange(event) {

    let name = event.target.value;

    renderMovies(name)


}

function searchMovies() {
}





async function renderMovies(name) {
    const moviesSearch = await fetch(`https://www.omdbapi.com/?apikey=97f5b4c9&s=${name}`)
    moviesSearchData = await moviesSearch.json();
    console.log(moviesSearch)

    moviesSearchList.innerHTML = moviesSearchData.Search.map((movieS) => moviesSearchPost(movieS)).join("");

}



renderMovies("avengers")


function moviesSearchPost(movieS) {
    return `<div class="movie">
    <figure class="book__img_wrapper">
        <img class="book_img" src=${movieS.Poster} alt="">
    </figure>
    <div class="book__title">
        ${movieS.Title} - ${movieS.Year}
    </div>
    <div class="book__ratings">
         ${movieS.Type}</div>
</div>`
}


