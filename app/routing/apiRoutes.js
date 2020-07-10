var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/firends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        if (friends.length)
    })



};


