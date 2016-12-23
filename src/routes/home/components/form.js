module.exports = {
  path: 'form',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [])
    })
  },

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../components/home/components/FormSamples'))
    })
  }
}
