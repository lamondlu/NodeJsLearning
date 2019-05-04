(function (controllers) {

    



    var todoController = require("./todocontroller");

    controllers.init = function (app) {
        todoController.init(app);
    }

})(module.exports);