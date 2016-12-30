module.exports = {
  path: 'build/:buildId/run',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [])
    })
  },

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../../components/home/realworld/build/run/index.js'))
    })
  }
}
