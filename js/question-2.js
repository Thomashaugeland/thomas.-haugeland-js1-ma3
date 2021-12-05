const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=c04581bce26941ab854ecaf7a52f659b";

const resultsContainer = document.querySelector(".results");

//function for make api call
async function makeApiCall() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        const data = results;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < data.results.length; i++) {
            if (i === 8) {
                break;
            }

            let numberOfTags = 0;

            for (let j = 0; j < data.results[i].tags.length; j++) {
                numberOfTags++
            }

            resultsContainer.innerHTML += `<div class="result">` +
                `<h2>${data.results[i].name}</h2>` +
                `<p>Rating: ${data.results[i].rating}</p>` +
                `<p>Tag: ${numberOfTags}</p>` +
                `</div>`;
        }
    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
    }
}

makeApiCall();
