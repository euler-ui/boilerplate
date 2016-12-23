module.exports = {
  path: 'signin',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [])
    })
  },

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../components/portal/signin/index'))
    })
  }
}
