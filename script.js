

// global constants


const apiKey = "z9qEJKCAcrrMCA7q77qHJXLDkv111Kra"  // TA'S API KEY
const rating = "G"
const limit = "9"

// grabbing elements
let giphyForm = document.querySelector("#form");
let searchBtn = document.querySelector("#search-btn");
let loadBtn = document.querySelector("#load-btn");
let gifFeed = document.querySelector("#gif-feed");

let current_page_num = 0;




giphyForm.addEventListener("submit", (evt) => {
    // prevent page from reload
    evt.preventDefault();
    console.log("evt.target.gif.value =", evt.target.gif.value);
    let apiUrl = "http://api.giphy.com/v1/gifs/search" + "?api_key=" + apiKey +  "&limit=" + limit + "&rating=" + rating +"&q=" + evt.target.gif.value;
    console.log("apiUrl =", apiUrl);
    gifFeed.innerHTML = ""
    console.log(getResults(apiUrl));
    form.reset();
    
    

    

})


async function getResults(apiUrl) {
    let response =  await fetch(apiUrl);
    console.log("response is: ", response);
    let responseData =  await response.json()
    displayResults(responseData);

}

function displayResults(gifData) {
    gifData.data.forEach((gif) => {
        gifFeed.innerHTML += `<img src="${gif.images.fixed_height.url}">`
    });


}

 
function ShowMore() {

}


    




