document.addEventListener(
    "click",
    () => {
        audioPlayer.play()
            .then(() => {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
            })
            .catch(() => {});
    },
    { once: true }
);


// ======================================
// ОБЩЕЕ СМЕЩЕНИЕ ВСЕХ ТОЧЕК
// ======================================

const offsetX = -60;
const offsetY = -150;


// ======================================
// ДАННЫЕ ВСЕХ ТОЧЕК
// ======================================

const points = [

    {
        id: 1,
        type: "image",
        file: "tramvay.jpg",
        text: "Речной трамвай из Самары в Ширяево",
        x: 122,
        y: 8
    },

    {
        id: 2,
        type: "audio",
        file: "volga.mp3",
        x: 387,
        y: 27
    },

    {
        id: 3,
        type: "image",
        file: "volga.jpg",
        text: "Река Волга",
        x: 431,
        y: 27
    },

    {
        id: 4,
        type: "audio",
        file: "kater.mp3",
        x: 86,
        y: 45
    },

    {
        id: 5,
        type: "image",
        file: "kartina.jpg",
        text: "И. Айвазовский «Волга у Жигулёвских гор»",
        x: 405,
        y: 74
    },

    {
        id: 6,
        type: "image",
        file: "prichal.jpg",
        text: "Причал в Ширяево",
        x: 117,
        y: 127
    },

    {
        id: 7,
        type: "image",
        file: "windmill.jpg",
        text: "Ветряная мельница, принадлежавшая Ванюшину",
        x: 378,
        y: 175
    },

    {
        id: 8,
        type: "audio",
        file: "teplohod.mp3",
        x: 200,
        y: 100
    },

    {
        id: 9,
        type: "audio",
        file: "artists.mp3",
        x: 556,
        y: 183
    },

    {
        id: 10,
        type: "image",
        file: "zavod.jpg",
        text: "Исторический вид завода «Ширяевец»",
        x: 278,
        y: 201
    },

    {
        id: 11,
        type: "image",
        file: "museum.jpg",
        text: "Дом-музей Репина",
        x: 528,
        y: 213
    },

    {
        id: 12,
        type: "audio",
        file: "zavod.mp3",
        x: 245,
        y: 222
    },

    {
        id: 13,
        type: "image",
        file: "pech.jpg",
        text: "Руины печи завода «Ширяевец»",
        x: 289,
        y: 240
    },

    {
        id: 14,
        type: "image",
        file: "zhiguli.jpg",
        text: "Жигулевские горы",
        x: 49,
        y: 275
    },

    {
        id: 15,
        type: "image",
        file: "shtol.jpg",
        text: "Заброшенные штольни",
        x: 183,
        y: 293
    },

    {
        id: 16,
        type: "image",
        file: "monastyr.jpg",
        text: "Монастырская гора",
        x: 776,
        y: 311
    },

    {
        id: 17,
        type: "audio",
        file: "na_gore.mp3",
        x: 8,
        y: 331
    },

    {
        id: 18,
        type: "audio",
        file: "shtol.mp3",
        x: 174,
        y: 331
    },

    {
        id: 19,
        type: "image",
        file: "ovrag.jpg",
        text: "Ширяевский овраг",
        x: 485,
        y: 345
    },

    {
        id: 20,
        type: "image",
        file: "bats.jpg",
        text: "Летучие мыши\nв штольнях",
        x: 140,
        y: 363
    },

    {
        id: 21,
        type: "audio",
        file: "name.mp3",
        x: 485,
        y: 394
    },

    {
        id: 22,
        type: "audio",
        file: "bats.mp3",
        x: 122,
        y: 404
    },

    {
        id: 23,
        type: "audio",
        file: "monastyr.mp3",
        x: 720,
        y: 350
    }

];


// ======================================
// DOM
// ======================================

const markersLayer =
document.getElementById("markers-layer");

const imagesLayer =
document.getElementById("images-layer");

const captionsLayer =
document.getElementById("captions-layer");

const audioPlayer =
document.getElementById("audio-player");


// ======================================
// СОЗДАНИЕ ВСЕХ КВАДРАТОВ
// ======================================

points.forEach(point => {

    const marker =
    document.createElement("div");

    marker.classList.add("marker");

    marker.style.zIndex = 30;

    marker.style.left =
    (point.x + offsetX) + "px";

    marker.style.top =
    (point.y + offsetY) + "px";

    markersLayer.appendChild(marker);


    // ==========================
    // НАВЕДЕНИЕ
    // ==========================

    marker.addEventListener("mouseenter", () => {

        marker.classList.add("discovered");

        if (point.type === "image") {

            imagesLayer.innerHTML = "";
            captionsLayer.innerHTML = "";

            const image =
            document.createElement("img");

            image.src =
            "images/" + point.file;

            image.classList.add("archive-image");

            /*
                Слои:
                обычные квадраты: 30
                картинка: 50
                карта: 60
                активный квадрат: 80
                подпись: 100
            */

            image.style.zIndex = 50;

            marker.style.zIndex = 80;

            image.style.left =
            (point.x - 11 + offsetX) + "px";

            image.style.top =
            (point.y - 11 + offsetY) + "px";

            imagesLayer.appendChild(image);


            const caption =
            document.createElement("div");

            caption.classList.add("archive-caption");

            caption.innerText =
            point.text;


            if (point.id === 20) {

                caption.style.left =
                (point.x - 10 + offsetX) + "px";

                caption.style.top =
                (point.y + 150 + offsetY) + "px";

                caption.style.textAlign = "left";

            }

            else if (point.id === 7) {

                caption.style.left =
                (point.x - 10 + offsetX) + "px";

                caption.style.top =
                (point.y + 320 + offsetY) + "px";

            }

            else if (point.id === 10) {

                caption.style.left =
                (point.x - 10 + offsetX) + "px";

                caption.style.top =
                (point.y + 320 + offsetY) + "px";

            }

            else {

                caption.style.left =
                (point.x - 10 + offsetX) + "px";

                caption.style.top =
                (point.y + 230 + offsetY) + "px";

            }

            captionsLayer.appendChild(caption);
        }


        if (point.type === "audio") {

            audioPlayer.style.display = "block";

            audioPlayer.src =
            "sounds/" + point.file;

            audioPlayer.load();

            audioPlayer.play().catch(error => {
                console.log("Автовоспроизведение заблокировано браузером:", error);
            });

        }

    });


    // ==========================
    // УВОД МЫШКИ
    // ==========================

    marker.addEventListener("mouseleave", () => {

        if (point.type === "image") {

            imagesLayer.innerHTML = "";
            captionsLayer.innerHTML = "";

            marker.style.zIndex = 30;

        }

        if (point.type === "audio") {

            audioPlayer.pause();

            audioPlayer.currentTime = 0;

            audioPlayer.style.display = "none";

        }

    });

});