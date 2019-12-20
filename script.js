

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=D3ghooGNpCU4Cqzg1bN6AfvYxIaMcNry"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (data) {
    console.log(data.response);
    console.log(data.status);
});



var recordsEl = $("#article").val()

$("#run-search").on("click", function () {

    var searchTerm = $("#search-term").val().trim()
    console.log(searchTerm)
    var startYear = $("#start-year").val().trim()
    var endYear = $("#end-year").val().trim()
    console.log(startYear)
    console.log(endYear)
})