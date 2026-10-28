// veriables

const openBtn = document.getElementById('open-button');
const modalcontainer = document.getElementById('modal-container');

const closeBtn = document.getElementById("close-btn");

// evnetListenr

openBtn.addEventListener("click", function () {
    modalcontainer.style.display = 'block';
});

closeBtn.addEventListener("click", function () {
    modalcontainer.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === modalcontainer) {
        modalcontainer.style.display = "none";
    }
});