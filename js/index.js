const barBtn = document.getElementById("bar");
const show = document.querySelector(".show-items")
const feelingLuckyBtn = document.querySelector("#luckyBtn");

barBtn.addEventListener('click', function() {
    if (show) {
        const isMenuVisible = window.getComputedStyle(show).getPropertyValue('display') === 'flex';
        show.style.display = isMenuVisible ? 'none' : 'flex';
    }
});
