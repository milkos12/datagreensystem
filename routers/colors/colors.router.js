const express = require('express');

//const faker = require('faker');
const ColorsService = require('../../service/colors.service');
const validadorHandler = require('../../middlewares/validador.handler');
const { createColorsSchema, updateColorsSchema, getColorsSchema } = require('../../schemas/colors.schema');


const router = express.Router();
const service = new ColorsService();

router.get('/', async (req, res) => {
  const colors = await service.find();
  res.json(colors);
  //consultar todos
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  //consultar solo uno
});

router.put('/',
  validadorHandler(createColorsSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const dataReturn = await service.create(body);
      res.json(dataReturn);

    } catch (error) {
      next(error);

    }

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

router.post('/:id',
  validadorHandler(getColorsSchema, 'params'),
  validadorHandler(createColorsSchema, 'body'),
  async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const dataReturn = await service.update(body, id);
    res.json(dataReturn);
    //editar
  });

module.exports = router;
