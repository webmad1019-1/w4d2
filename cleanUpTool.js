const fs = require("fs");

fs.readFile("movies.json", "utf8", function(err, moviesDirty) {
  const moviesClean = JSON.parse(moviesDirty).map(movie => {
    movie.year = +movie.year;
    movie.rate = +movie.rate;

    return movie;
  });

  fs.writeFile("moviesClean.json", JSON.stringify(moviesClean), () => {
    console.log("🐖 clean movies now written 🐖");
  });
});
