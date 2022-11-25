const express = require('express');

const colorsRouter = require('./colors/colors.router');
const especiesRouter = require('./especies/especies.router');
const farmsRouter = require('./farms/farms.router');
const gaugesRouter = require('./gauges/gauges.router');
const providersRouter = require('./providers/providers.router');
const referenceRouter = require('./references/references.router');
const varientesRouter = require('./varieties/varieties.router');

function routerApi(app) {
  const router = express.Router();
  router.use('/api/v1',router);
  router.use('/colors', colorsRouter);
  router.use('/especies', especiesRouter);
  router.use('/farms', farmsRouter);
  router.use('/gagues', gaugesRouter);
  router.use('/providers', providersRouter);
  router.use('/references', referenceRouter);
  router.use('/varientes', varientesRouter);
}

module.exports = routerApi;
