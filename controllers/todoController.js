var data = [{item:'get milk'}, {'walk dog'}, {'kick some coding ass'}];

module.exports = function(app){


    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', function(req, res){
    });

    app.delete('/todo', function(req, res){
    });

};