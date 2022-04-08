const images = ["0.jpg", "1.jpg", "2.jpg"];

const randomImage = images[Math.floor(Math.random()*images.length)];
const bgImgae = document.createElement("img");

bgImgae.className = "background";
bgImgae.src = `img/${randomImage}`;
document.body.appendChild(bgImgae);
