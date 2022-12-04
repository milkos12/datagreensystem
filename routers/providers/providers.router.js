const express = require('express');

const ProvidersService = require('../../service/providers.service');
const { createProvidersSchemas, updateProvidersSchemas, getProvidersSchema } = require('../../schemas/providers.shema');
const validadorHandler = require('../../middlewares/validador.handler');

const router = express.Router();
const service = new ProvidersService();

router.get('/', async (req, res) => {
  const dataReturn = await service.find();
  res.json(dataReturn)
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  //consultar solo uno
});

router.post('/:id',
  validadorHandler(getProvidersSchema, 'params'),
  validadorHandler(updateProvidersSchemas, 'body'),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const dataReturn = await service.update(id, body);
    res.json(dataReturn);
    //agregar
  })

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  //actulizar una parte o solo un parametro del objeto
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  //actulizar una parte o solo un parametro del objeto
});

router.put('/',
  validadorHandler(createProvidersSchemas, 'body'),
  async (req, res) => {
    const body = req.body;
    const dataReturn = await service.create(body);
    res.json(dataReturn);
    //editar
  });

module.exports = router;
