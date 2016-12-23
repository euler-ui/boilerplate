module.exports = {
  path: 'realworld',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [require('./build/add'), require('./build/run')])
    })
  },

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../components/home/realworld'))
    })
  }
}
