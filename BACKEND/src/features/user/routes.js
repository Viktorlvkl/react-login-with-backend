const controllers = require('./controllers')

module.exports = router => {
    router.post('/v1/api/user', controllers.create)
}