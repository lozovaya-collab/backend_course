module.exports = (app) => {
    const indexController = require('../Controller/indexController')
    const usersController = require('../Controller/usersController')

    app.route('/').get(indexController.index)
    app.route('/users').get(usersController.users)
}