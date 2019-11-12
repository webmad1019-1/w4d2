let query = { city: { $exists: false } };


driver(db.moviesCollection.find(query, function (data)))