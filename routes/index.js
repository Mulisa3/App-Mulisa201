const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { name: 'Mulisa Mudau', description: 'Meteorologist & Flood Risk Analyst' });
});

module.exports = router;

