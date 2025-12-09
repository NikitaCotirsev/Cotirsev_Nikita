
const title = document.getElementById("monitor-title");
const staticBlock = document.getElementById("static-block");
const slideBlock = document.getElementById("slide-block");
const row = document.getElementById("row");
const bottom = document.getElementById("bottom");

const imgs = [
    "imagini/CPU.jpg",
    "imagini/Memory.jpg",
    "imagini/Disk.jpg"
];

let i = 0;
let started = false;

function renderSlide() {
    row.innerHTML = `
        <img src="${imgs[i]}" width="525" height="380">
        <img src="${imgs[(i + 1) % 3]}" width="525" height="380">
    `;
    bottom.src = imgs[(i + 2) % 3];
}

title.addEventListener("dblclick", () => {
    staticBlock.style.display = "none";
    slideBlock.style.display = "block";

    if (!started) {
        renderSlide();
        setInterval(() => {
            i = (i + 1) % 3;
            renderSlide();
        }, 3000);

        started = true;
    }
});
