let titleHtml = document.querySelector('.titleHtml')
let description = document.querySelector('.description')

function background() {
    document.body.style.cssText = `color: white; background-image: url(./img/carousel/1.jpg); background-repeat: no-repeat; background-size: cover;`
}

function html() {
    titleHtml.innerHTML = appSettings.title
    description.innerHTML = appSettings.description
    document.body.style.color = appSettings.color
    if (appSettings.downIcon === false) {
        document.querySelector('.down').remove()
    }
}

html()

