module.exports = {
  path: 'others',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [])
    })
  },

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../components/home/components/OtherSamples'))
    })
  }
}
