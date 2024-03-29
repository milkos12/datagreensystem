function logErrors (err, req, res, next) {
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status().json({
    message: err.message,
    stack: err.stack
  })
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    console.log('----------------------------------------------------')
    res.status(output.statusCode).json(output.payload);
  }

  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler }
