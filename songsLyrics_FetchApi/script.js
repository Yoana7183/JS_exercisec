const imageContainer = document.querySelector('.containImg');
const image_urls = {
    './img/Bohemian-Rhapsody.jpg': './lyrics/Bohemian-Rhapsody.txt',
    './img/show_must_go_on.jpg': './lyrics/show_must_go_on.txt',
    './img/we_will_rock_you.jpg': './lyrics/we_will_rock_you.txt'
}

for (const key in image_urls) {
    const img = document.createElement('img')
    img.src = key;
    imageContainer.appendChild(img)
    img.addEventListener("click", () => {
        fetch(image_urls[key], { method: 'GET' })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(err => console.log(`Upps : ${err}`))

    });
}