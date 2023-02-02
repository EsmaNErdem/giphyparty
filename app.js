console.log("Let's get this party started!");


$("#gif-search").on("submit", async function(e){
    e.preventDefault();
    let searchVal = $('#search').val()
    const result = await axios.get("https://api.giphy.com/v1/gifs/search", {params: {q:searchVal, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    getRandomGif(result); 
    $('#search').val("");
})

function getRandomGif(result) {
    let randomInx = Math.floor(Math.random() * 50);
    let newDiv = $("<div>", {class: "col-lg-4 col-12 mb-4"})
    let newImg = $("<img>", {src: result.data.data[randomInx].images.original.url})    
    console.log(newImg);
    newDiv.append(newImg);
    $("#imgContainer").append(newDiv)
}

$('button').click(function(){
    $("#imgContainer").empty();
})