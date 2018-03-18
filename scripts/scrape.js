var cheerio = require("cheerio");
var request = require("request");

// First, tell the console what server.js is doing
console.log("Grabbing recipes from allrecipes website");

// Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
request("https://www.allrecipes.com/recipes/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  // (i: iterator. element: the current element)
  $("article.fixed-recipe-card").each(function(i, element) {

    // Save the title of the element in a "title" variable
    var title = $(element).find("div.fixed-recipe-card__info").find("h3").find("a").children("span.fixed-recipe-card__title-link").text();

    // Image of Recipe
    var img = $(element).find("a").children("img").attr("src");

    var summary = $(element).find("div.fixed-recipe-card__info").find("a").children("div.fixed-recipe-card__description").text();
    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
    var link = $(element).find("div.fixed-recipe-card__info").find("a").attr("href");

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      img: img,
      summary: summary,
      link: link
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);

  module.exports = results;
});


