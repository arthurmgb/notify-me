const lucky_phrase = document.querySelector("#lucky-phrase");
const author = document.querySelector("#author");
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dd981b2d90msh590337aa8350693p1f3d2ajsn0c7d999d9683',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=pt', options)
    .then(response => response.json())
    .then(response => {
        lucky_phrase.innerHTML = '"' + response.content + '"';
        author.innerHTML = "&#8212; " + response.originator.name;
    })
    .catch(err => console.error(err));