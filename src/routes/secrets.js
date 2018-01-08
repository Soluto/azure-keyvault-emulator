const {Router} = require('express');
const uuid = require('uuid/v4');

const router = Router();
const vault = {};

const generateSecret = (value) => ({
  attributes: {},
  id: uuid(),
  managed: false,
  value,
});

router.put('/:secretName', (req, res) => {
  vault[req.params.secretName] = generateSecret(req.body.value);
  res.sendStatus(200);
});

router.get('/:secretName', (req, res) => {
  const secret = vault[req.params.secretName];
  secret ? res.status(200).json(secret) : res.sendStatus(404);
});

module.exports = router;
