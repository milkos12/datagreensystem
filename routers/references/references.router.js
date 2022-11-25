const express = require('express');

const ReferencesService = require('../../service/references.service');

const router = express.Router();
const service = new ReferencesService();

router.get('/', (req, res) => {
  //consultar todos
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
