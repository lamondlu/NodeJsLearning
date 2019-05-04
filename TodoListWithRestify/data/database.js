(function (database) {
    const mongoose = require("mongoose");
    var mongoUrl = "mongodb://localhost:27017/todos";
   
    var db = mongoose.connection;

    db.once('open', function () {
        console.log("Database connected.");
    });


    var Schema = mongoose.Schema;
    var todoSchema = new Schema({
        title: String,
        desc: String,
        date: { type: Date, default: Date.now },
        isClosed: {type: Boolean, default: false}
    });

    db.on('error', console.error.bind(console, 'connection error:'));

    database.getDb = function (next) {
        mongoose.connect(mongoUrl, { useNewUrlParser: true }, function (err) {
            if (err) {
                next(err);
            }
            else {
                return next({
                    Todos: mongoose.model('Todos', todoSchema)
                });
            }
        });
    }
 })(module.exports);