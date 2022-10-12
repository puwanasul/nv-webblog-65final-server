const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController');
// const isAuthenController = require('./authen/isAuthenController')
const NoodleController = require('./controllers/NoodleController');
const Noodle = require('./models/Noodle.js');

module.exports = (app) => {

    //User
    app.post('/user', UserController.create)
    
    app.put('/user/:userId', UserController.put)
    
    app.delete('/user/:userId', UserController.remove)
    
    app.get('/user/:userId', UserController.show)
    
    // app.get('/users', isAuthenController, UserController.index)
    app.post('/login', UserAuthenController.login)

    //Noodle
    app.post('/Noodle', NoodleController.create)
    
    app.put('/Noodle/:userId', NoodleController.put)
    
    app.delete('/Noodle/:userId', NoodleController.remove)
    
    app.get('/Noodle/:userId', NoodleController.show)
    
    app.get('/Noodles', NoodleController.index)
    


}