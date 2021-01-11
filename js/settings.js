// settings for modal window

let appSettings = {
    background: 'img/carousel/1.jpg', // if Slider working = false
    title: 'Добро пожаловать!',
    description: 'Какой-то рекламный текст, чтобы ты повелся!',
    color: 'white',
    downIcon: true,
}

let modalSettings = {
    working: true,
    width: '40%',
    height: '70%',
    title: 'Заголовок',
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, nisi pariatur. A aliquid atque consectetur cupiditate, delectus distinctio dolor doloremque est et eum ex excepturi fuga hic id ipsa ipsam itaque labore magni molestias nam nobis nostrum obcaecati odio omnis, perspiciatis quam ratione reiciendis repudiandae rerum sit tempora, ullam voluptas voluptatem? Ab amet blanditiis cumque dignissimos dolor dolorem dolores ducimus incidunt optio praesentium, quasi quidem reiciendis repudiandae? Ab adipisci aliquid aperiam autem culpa debitis dicta error ipsa laboriosam maiores maxime mollitia neque, odit omnis optio placeat qui quidem rem repellat rerum sit sunt totam velit voluptas voluptatibus. Accusantium corporis, eius.`,
    iconClose: true,
    button: 'danger', // bootstrap button
}

let sliderSettings = {
    working: true,
    image: [
        'img/carousel/1.jpg',
        'img/carousel/2.jpg',
        'img/carousel/3.jpg',
        'img/carousel/4.jpg',
        'img/carousel/5.jpg',
        'img/carousel/6.jpg',
    ],
    speed: '1s', // (ms,s), default: '1s'
    controlButton: true,
    interval: 3000, // (ms), default: 3000
}
