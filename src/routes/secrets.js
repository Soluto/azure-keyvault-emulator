const {Router} = require('express');

const router = Router();
const secrets = {};

router.put('/:secretName', (req, res) => {
  secrets[req.params.secretName] = req.body.value;
  res.sendStatus(200);
});

router.get('/:secretName', (req, res) => {
  const value = secrets[req.params.secretName];
  value ? res.status(200).send(value) : res.sendStatus(404);
});

module.exports = router;
