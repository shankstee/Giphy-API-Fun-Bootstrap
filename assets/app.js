const APIkey = "rIvAU8zGUYxGIgQrkMHBzKFPTh0rEJlS";
const runAJAXcall = (newGifs) => {
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + newGifs + "&limit=15&offset=0&rating=r&lang=en"; // var to hold my full ajax link

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((response) => {

        response.data.map((gif) => {
            let stillURL = gif.images.downsized_still.url; // save the still url to pause gif
            let movingURL = gif.images.downsized_medium.url; // save the moving gif
            let rating = gif.rating; // save the rating of this gif
            let mainContainer = $(".f");
            let imgTag = $("<img class='fixedImgSize'/>");

            imgTag.attr("src", stillURL)
            mainContainer.append(imgTag);
        });
    })
}

runAJAXcall("raptors");