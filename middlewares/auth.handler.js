const boom = require('@hapi/boom');

function checkApiKey(req, res, next) {
  const apiKey = req.haeders['api'];
  if (apiKey === '1234') {
    next();
  } else {
    next(boom.unauthorized());
  }
}

mudule.exports = { checkApiKey }
