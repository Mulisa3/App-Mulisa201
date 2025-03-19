const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about', { name: 'Mulisa Mudau', bio: 'I specialize in meteorology, flood risk assessment, and environmental mapping.' });
});

module.exports = router;

