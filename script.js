



function clear() {
    $("#article-section").empty()
};

function buildQueryUrl() {
    var key = "D3ghooGNpCU4Cqzg1bN6AfvYxIaMcNry"

    var searchTerm = $("#search-term").val().trim()
    var startYear = $("#start-year").val().trim()
    if (parseInt(startYear)) {
        startYear = startYear + "0101"
    }
    var endYear = $("#end-year").val().trim()
    if (parseInt(endYear)) {
        endYear = endYear + "1231"
    }
    var nyTimes = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var url = nyTimes + "q=" + searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=" + key
    console.log(url)
    return url
}

var recordsEl = $("#article").val()

$("#run-search").on("click", function (event) {
    event.preventDefault()
    clear();
    var url = buildQueryUrl()
    console.log(url)
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=D3ghooGNpCU4Cqzg1bN6AfvYxIaMcNry"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (data) {
        console.log(data.response);

    });


})

