module.exports = {
  path: 'home',

  getChildRoutes(partialNextState, callback) {
    require.ensure([], (require) => {
      callback(null, [require('./components'), require('./realworld')])
    })
  },

  getIndexRoute(partialNextState, callback) {
    require.ensure([], function(require) {
      callback(null, {
        component: require('../../components/home/Welcome')
      })
    })
  },

  getComponent(partialNextState, callback) {
    require.ensure([], (require) => {
      callback(null, require('../../components/home'))
    })
  }
}
