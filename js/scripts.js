const imgArr = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg'
];

let imgIndex = 0;
let imgElm = document.getElementById('img-change')

setInterval(() => {
    if (imgIndex >= imgArr.length) {
        imgIndex = 0;
    }
    const imgUrl = imgArr[imgIndex];
    imgElm.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000)