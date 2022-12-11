let progressbar = document.querySelector(".progress__bar")
let pValue = document.querySelector(".movie__rating");


let pStartValue = 0,
    PEndValue = 100,
    speed = 20;


let progress = setInterval(() => {
    pStartValue++;


    pValue.textContent = `${pStartValue}%`
    progressbar.style.background = `conic-gradient(#fabf2a ${pStartValue * 3.6}deg, #faf7f7 0deg)`

    if (pStartValue == PEndValue) {
        clearInterval(progress)
    }



}, speed);

//tt0413300
const postMovieEl = document.querySelector(".movie__wrapper")
const imdb = localStorage.getItem("imdbID")


async function renderMovie(imdbID) {
    const postMovie = await fetch(`https://www.omdbapi.com/?apikey=97f5b4c9&i=${imdbID}`)
    const postMovieData = await postMovie.json();
    console.log(postMovieData)
    postMovieEl.innerHTML = postMovieData.Search.map((postM) => postMovieHtml(postM)).join("")

}



renderMovie("")


function postMovieHtml(postM) {
    return `<figure class="movie_img">
    <img src="${postM.Poster}"
        class="movie__imgg">
</figure>
<div class="movie_detail">
    <h1 class="movie__Name">${postM.Title}</h1>
    <div class="movie__valo">
        <div class="ratings">
            <div class="rating">
                <div class="progress__bar">
                    <h1 class="movie__rating">90%</h1>
                </div>
                <div class="stars">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3 class="Source">source</h3>
                </div>
            </div>
            <div class="movie_de">
                <h2>R: </h2>
                <h2>RT: </h2>
            </div>
        </div>
    </div>
    <div class="movie_descrip">
        <p class="movie__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            officii
            s dolore dicta similique debitis dignissimos quasi! Suscipit quos enim, id in
            repudiandae, u
            t vel consequuntur nobis minus, laudantium possimus! Ipsum, odio. A quasi iste corporis
            harum
            perspiciatis inventore laborum,
            praesentium, repellat sint sit, est molestiae. Ipsa alias adipisci ullam cum.</p>
        <h2>Language: </h2>
        <h2>Director: </h2>
        <h2>Genero: </h2>
        <h2>Actores: </h2>
    </div>
</div>

</div>`
}