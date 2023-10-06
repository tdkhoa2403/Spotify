const app = {
    listSong: [
        {
            id: "recommendedfortoday",
            songInfo: [
                {
                    image: "../imgs/recommendedfortoday/thieny.jpg",
                    name: "Thiên Ý (SinKra Remix 1)",
                    author: "Jena"
                },
                {
                    image: "../imgs/recommendedfortoday/ciaga.jpg",
                    name: "不问ciaga(不问别离)",
                    author: "指尖笑"
                }
            ]
        },
        {
            id: "jumpbackin",
            songInfo: [
                {
                    image: "../imgs/jumpbackin/gigachad.jpg",
                    name: "GigaChad Theme (Phonk House Version)",
                    author: "g3ox_em"
                }
            ]
        },
        {
            id: "recentlyplayed",
            songInfo: [
                {
                    image: "../imgs/jumpbackin/gigachad.jpg",
                    name: "GigaChad Theme (Phonk House Version)",
                    author: "g3ox_em"
                },
                {
                    image: "../imgs/recommendedfortoday/ciaga.jpg",
                    name: "不问ciaga(不问别离)",
                    author: "指尖笑"
                }
            ]
        }
    ],
    render() {
        const listItem = document.querySelectorAll(".list-item");
        listItem.forEach(item => {
            this.listSong.forEach(song => {
                if(item.id == song.id) {
                    for(let i = 0; i < song.songInfo.length; i++) {
                        item.innerHTML += `
                            <div class="item">
                                <div class="col song-card">
                                    <img src="${song.songInfo[i].image}" alt="GigaChad">
                                    <div class="desc">
                                        <h3 class="name">${song.songInfo[i].name}</h3>
                                        <p class="author">${song.songInfo[i].author}</p>
                                    </div>
                                    <div class="btn-play">
                                        <button class="btn-play-pri">
                                            <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq">
                                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                }
            })
        })
    },
    start() {
        this.render();
    }
}
app.start();