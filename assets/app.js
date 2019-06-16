const newGifs = "trae";
const APIkey = "rIvAU8zGUYxGIgQrkMHBzKFPTh0rEJlS";
const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + newGifs + "&limit=15&offset=0&rating=r&lang=en"; // var to hold my full ajax link


const runAJAXcall = () => {
    console.log("Function ran")
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((response) => {
        console.log("then why")
        console.log(response.data);
    })
}

runAJAXcall();