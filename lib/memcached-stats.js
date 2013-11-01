var exec = require('child_process').exec;
var child;


exports.get = function(cb){
    function out(callback){
        child = exec("pwd", function (error, stdout, stderr) {
            callback( error, stdout )
        });

    }

    out(cb);

}


