const express = require('express');


const FarmsService = require('../../service/farms.service');

const router = express.Router();
const service = new FarmsService();

router.get('/', async (req, res) => {
  //consultar todos
  const data = await service.find();
  res.json(data);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  //consultar solo uno
});

router.post('/', (req, res) => {
  const body = req.body;
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

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  //editar
});

module.exports = router;
