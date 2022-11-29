const express = require('express');
const boom = require('@hapi/boom');

const VarientesService = require('../../service/varieties.service');
const validadorHandler = require('./../../middlewares/validador.handler');
const { createVarietiesSchema, updateVarietiesSchema, getVarietieSchema } = require('./../../schemas/varieties.schemas');


const router = express.Router();
const service = new VarientesService();

router.get('/', async (req, res) => {
  //consultar todos
  const rta = await service.find();
  res.json(rta)
});

router.get('/:id',
  validadorHandler(getVarietieSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    //consultar solo uno
    const rta = await service.findOne(id);
    res.json(rta)
});

router.post('/',
  validadorHandler(createVarietiesSchema, 'body'),
  (req, res) => {
    const body = req.body;
    //agregar
})

router.patch('/:id',
  validadorHandler(getVarietieSchema, 'params'),
  validadorHandler(updateVarietiesSchema, 'body'),
  (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  res.json({massage: "hi there"})
  //actulizar una parte o solo un parametro del objeto
});

router.delete('/:id',
  validadorHandler(getVarietieSchema, 'params'),
  (req, res) => {
    const { id } = req.params;
    //actulizar una parte o solo un parametro del objeto
});

router.put('/:id',
  validadorHandler(getVarietieSchema, 'params'),
  validadorHandler(updateVarietiesSchema, 'body'),
  (req, res) => {
    const { id } = req.params;
    const body = req.body;
  //editar
});

module.exports = router;
