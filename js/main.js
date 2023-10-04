const songsApi = "http://localhost:3000/songs";

fetch(songsApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(songs) {
        console.log(songs);
    })