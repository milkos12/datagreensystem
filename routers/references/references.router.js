const express = require('express');

const ReferencesService = require('../../service/references.service');
const validadorHandler = require('../../middlewares/validador.handler');
const { createReferencesSchema, updateReferencesSchema, getReferencesSchema } = require('../../schemas/references.shema');

const router = express.Router();
const service = new ReferencesService();

router.get('/', async (req, res) => {
  const dataReturn = await service.find();
  res.json(dataReturn);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  //consultar solo uno
});

router.post('/:id',
  validadorHandler(getReferencesSchema, 'params'),
  validadorHandler(updateReferencesSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const dataReturn = await service.update(id, body);
    res.json(dataReturn);

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
  validadorHandler(createReferencesSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const dataReturn = await service.create(body);
    res.json(dataReturn);

  });

module.exports = router;
