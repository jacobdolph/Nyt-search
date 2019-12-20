

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=D3ghooGNpCU4Cqzg1bN6AfvYxIaMcNry"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (data) {
    console.log(data.response);
    console.log(data.status);
});