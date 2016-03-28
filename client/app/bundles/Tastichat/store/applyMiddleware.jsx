if (process.env.NODE_ENV === 'production') {
  module.exports = require('./applyMiddleware.prod');
} else {
  module.exports = require('./applyMiddleware.dev');
}
