const controllers = require('./controllers')

module.exports = router => {
    router.post('/v1/api/auth', controllers.auth)
}