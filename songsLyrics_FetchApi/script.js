
const imageContainer = document.querySelector('.containImg');
const image_urls = {
    '/songsLyrics_FetchApi/img/Bohemian-Rhapsody.jpg': '/songsLyrics_FetchApi/lyrics/Bohemian-Rhapsody.txt',
    '/songsLyrics_FetchApi/img/show_must_go_on.jpg': '/songsLyrics_FetchApi/lyrics/show_must_go_on.txt',
    '/songsLyrics_FetchApi/img/we_will_rock_you.jpg': '/songsLyrics_FetchApi/lyrics/we_will_rock_you.txt'
}

for (const key in image_urls) {
    const img = document.createElement('img')
    img.src = key;
    imageContainer.appendChild(img)
    img.addEventListener("click", () => {
        fetch(imageContainer[key], { method: 'GET' })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(err => console.log(`Upps : ${err}`))

    });
}

