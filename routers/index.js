const express = require('express');

const colorsRouter = require('./colors/colors.router');
const especiesRouter = require('./especies/especies.router');
const farmsRouter = require('./farms/farms.router');
const gaugesRouter = require('./gauges/gauges.router');
const providersRouter = require('./providers/providers.router');
const referenceRouter = require('./references/references.router');
const varietesRouter = require('./varieties/varieties.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/colors', colorsRouter);
  router.use('/especies', especiesRouter);
  router.use('/farms', farmsRouter);
  router.use('/gauges', gaugesRouter);
  router.use('/providers', providersRouter);
  router.use('/references', referenceRouter);
  router.use('/varietes', varietesRouter);
}

module.exports = routerApi;
