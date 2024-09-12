function displayPoem(response) {
    // console.log("poem generated");
    // response.data.answer
    //display the generated poem
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    // build the API URL
    let apiKey = "otb198570afbd1823c32f524f4467bab";
    let prompt = `Generate a poem about ${instructionsInput.value}`;
    let context = "You are a poem expert and love to write poems. Your mission is to generate a 4 line poem and" +
        " separate each line with a <br /> including after the last line of the poem before the signature." +
        " Sign" +
        " the" +
        " poem with 'Julicia AI 💙' inside a" +
        " <strong>" +
        " element. Follow the" +
        " user" +
        " instructions";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    //display hidden box
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `⏳Here comes your poem about ${instructionsInput.value}</div>`;
    // make a call to the API
    // console.log("generating poem");
    // console.log(`Prompt: ${prompt}`);
    // console.log(`Context: ${context}`);
    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);