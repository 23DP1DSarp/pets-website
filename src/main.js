const FACT = document.getElementById("cat_fact")
const URL = "https://catfact.ninja/fact"

fetch(URL).then((response) => response.json()).then((data) => {
    FACT.textContent = data.fact;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('button').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        fetch(URL).then((response) => response.json()).then((data) => {
            FACT.textContent = data.fact;
        });
        });
    });