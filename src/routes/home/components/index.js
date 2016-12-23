module.exports = {
  path: 'components',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [require('./buttons.js'), require('./form.js'), require('./others.js'), require('./tablelist.js')])
    })
  },

  getIndexRoute(partialNextState, callback) {
    require.ensure([], function(require) {
      callback(null, {
        component: require('../../../components/home/components/ButtonSamples')
      })
    })
  },

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../components/home/components'))
    })
  }
}
