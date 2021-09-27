var serverURL = "https://api.funtranslations.com/translate/minion.json"

var buttonTranslate = document.querySelector("#button-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Server Dropped! Try Again Later!")
}


function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;})
        .catch(errorHandler)
};

buttonTranslate.addEventListener("click", clickHandler)