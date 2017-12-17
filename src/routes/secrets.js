const {Router} = require('express');

const router = Router();
const secrets = {};

router.put('/:secretName', (req, res) => {
  secrets[req.params.secretName] = req.body.value;
  res.sendStatus(200);
});

router.get('/:secretName', (req, res) => {
  res.status(200).send(secrets[req.params.secretName]);
});

module.exports = router;
