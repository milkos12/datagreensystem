const express = require('express');


const FarmsService = require('../../service/farms.service');
const validadorHandler = require('../../middlewares/validador.handler');
const { createFarmsSchema, updateFarmsShema, getFarmsSchema } = require('../../schemas/farms.schema');

const router = express.Router();
const service = new FarmsService();

router.get('/', async (req, res) => {
  const data = await service.find();
  res.json(data);

});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  //consultar solo uno
});

router.post('/:id',
  validadorHandler(getFarmsSchema, 'params'),
  validadorHandler(updateFarmsShema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const { id } = req.params;
      const dataReturn = await service.update(id, body);
      res.json(dataReturn);

    } catch(err) {
      next(err);

    }

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
validadorHandler(createFarmsSchema, 'body'),
async (req, res) => {
  const body = req.body;
  const dataReturn = await service.create(body);
  res.json(dataReturn);
});

module.exports = router;
