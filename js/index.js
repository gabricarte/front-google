const url = window.location.href;
const searchForm = document.querySelector("form");
const searchInput = document.getElementById("searchInput");
const gitBtn = document.getElementById("gitBtn");
const allWords = document.getElementById("allWords");
const exactWord = document.getElementById("exactWord");
const anyWord = document.getElementById("anyWord");
const noneWord = document.getElementById("noneWord");
const barBtn = document.getElementById("bar");
const show = document.querySelector(".show-items")


gitBtn.addEventListener('click', function(){
    window.location.href = "https://github.com/gabricarte"; 
});


barBtn.addEventListener('click', function() {
    const isMenuVisible = window.getComputedStyle(show).getPropertyValue('display') === 'flex';
    show.style.display = isMenuVisible ? 'none' : 'flex';
});


if (url.includes("image-search")) {
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value;
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}&tbm=isch`;
        console.log(searchTerm)
    });
}else if (url.includes("advanced-search")) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const allWordsTerms = allWords.value;
        const exactWordTerms = exactWord.value ? `"${exactWord.value}"` : "";
        const anyWordTerms = formatAnyWordTerms(anyWord.value);
        const noneWordTerms = formatNoneWordTerms(noneWord.value);
       const combinedTerms = [allWordsTerms, exactWordTerms, anyWordTerms, noneWordTerms].join(" ");
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(combinedTerms)}`;
    });
}
else {
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value;
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        console.log(searchTerm)
    });
}

function formatAnyWordTerms(anyWordValue) {    
    const words = anyWordValue.split(/\s+/);
    const formattedWords = words.map(word => word.trim()).filter(word => word !== "");
    const formattedAnyWord = formattedWords.join(" OR ");
    return formattedAnyWord;
}

function formatNoneWordTerms(noneWordValue) {
    const words = noneWordValue.split(/\s+/);
    const formattedWords = words.map(word => word.trim()).filter(word => word !== "");
    const formattedNoneWord = formattedWords.map(word => `-${word}`).join(" ");
    return formattedNoneWord;
}

