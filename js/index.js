const barBtn = document.getElementById("bar");
const show = document.querySelector(".show-items")
const feelingLuckyBtn = document.querySelector("#luckyBtn");
const darkModeBtn = document.getElementById("darkMode");
const container = document.querySelector(".container");

barBtn.addEventListener('click', function() {
    if (show) {
        const isMenuVisible = window.getComputedStyle(show).getPropertyValue('display') === 'flex';
        show.style.display = isMenuVisible ? 'none' : 'flex';
    }
});

darkModeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    container.classList.toggle('dark');
    updateDarkModeText();
});

function updateDarkModeText() {
    const darkModeText = document.getElementById("darkMode");
    const isDarkMode = container.classList.contains('dark');
    
    if (isDarkMode) {
        darkModeText.innerHTML = '<a href="#">Dark Theme: activated</a>';
    } else {
        darkModeText.innerHTML = '<a href="#">Dark Theme: deactivated</a>';
    }
}