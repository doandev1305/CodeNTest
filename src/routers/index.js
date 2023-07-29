const candyPayRouter = require('./candyPay')

module.exports = (app)=> {
    app.use('/api', candyPayRouter)
}
  