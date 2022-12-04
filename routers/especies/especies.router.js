const express = require('express');


const EspeciesService = require('../../service/especies.service');
const { createEspeciesSchema, updateEspeciesSchema, getEspecisShema } = require('../../schemas/especies.schema');
const validadorHandler = require('../../middlewares/validador.handler');

const router = express.Router();
const service = new EspeciesService();

router.get('/', async (req, res) => {
  //consultar todos
  const data = await service.find();
  res.json(data)
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  //consultar solo uno
});

router.post('/:id',
  validadorHandler(getEspecisShema, 'params'),
  async (req, res) => {
    const body = req.body;
    const { id } = req.params;
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
  validadorHandler(createEspeciesSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const data = await service.create(body);
    res.json(data);
    //editar
  });

module.exports = router;
