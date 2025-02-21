const FACT = document.getElementById("cat_fact")
const URL = "https://catfact.ninja/fact"

fetch(URL).then((response) => response.json()).then((data) => {
    FACT.textContent = data.fact;
});