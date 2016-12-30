module.exports = {
  path: 'build/add',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [])
    })
  },

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../../../../components/home/realworld/build/add'))
    })
  }
}
