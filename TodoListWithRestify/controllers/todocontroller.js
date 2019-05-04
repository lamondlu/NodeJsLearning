(function (todo) {

    var mongo = require("../data/database");

    todo.init = function (app) {
        app.get('/todos', function (req, res) {
            mongo.getDb(function (db, err) {
                if (err) {
                    console.log(err);
                    res.send(400, err);
                }
                else {
                    db.Todos.find(function (err, items) {
                        console.log(items);
                        res.set("Content-Type", "application/json");
                        res.send(items);
                    });

                }
            });
        });

        app.get('/todos/:todoId', function (req, res) {
            mongo.getDb(function (db, err) {
                if (err) {
                    console.log(err);
                    res.status(400, err);
                }
                else {
                    db.Todos.find({ _id: req.params.todoId }, function (err, item) {
                        console.log(item);
                        res.set("Content-Type", "application/json");
                        res.send(item);
                    });
                }
            });

        });

        app.post('/todos', function (req, res) {
            mongo.getDb(function (db, err) {
                if (err) {
                    console.log(err);
                    res.send(400);
                }
                else {
                    db.Todos.create({
                        title: req.body.title,
                        desc: req.body.desc
                    }, function (err, todo) {
                        console.log(todo);
                        res.send(201);
                    });
                }
            });
        });

        app.put('/todos/:todoId', function (req, res) {
            mongo.getDb(function (db, err) {
                if (err) {
                    console.log(err);
                    res.send(400);
                }
                else {

                }
            });
        });

        app.del('/todos/:todoId', function (req, res) {
            mongo.getDb(function (db, err) {
                if (err) {
                    console.log(err);
                    res.send(400);
                }
                else {
                    db.Todos.deleteOne({
                        _id: req.params.todoId
                    }, function (err) {
                        res.send(204);
                    });
                }
            });
        });
    }

})(module.exports);