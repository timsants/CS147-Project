exports.addGroup = function(req, res) {
        var classname = req.query.classname;
        var assignment = req.query.assignment;
        var start_time = req.query.start_time;
        var end_time = req.query.end_time;
        var location = req.query.location;
        var salt = Math.floor((Math.random()*1000)+1);
        var id = String.hashCode(classname+assignment+start_time+end_time+location+salt);

        console.log(classname);
  		console.log(assignment);
  		console.log(start_time);
        console.log(end_time);
        console.log(location);
        console.log(id);

        //add new user by calling the model
        var db = require("../db")
		db.createGroup(classname, assignment, start_time, end_time, location, id);
        res.render('home');
};

exports.getGroup = function(req, res) {
    var db = require("../db")
    // db.insertUser("Queef");
    db.getGroup(function (group) {
        if(group) {
            console.log("returned: " + group);
        }
    });
};


String.prototype.hashCode = function(){
    var hash = 0, i, char;
    if (this.length == 0) return hash;
    for (i = 0, l = this.length; i < l; i++) {
        char  = this.charCodeAt(i);
        hash  = ((hash<<5)-hash)+char;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};