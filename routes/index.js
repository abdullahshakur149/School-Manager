const express = require('express')
const router = express.Router();
const { getTeacher } = require('../services/QueryServices')


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/dashboard', async (req, res) => {
    const teachers = await getTeacher();
    res.render('dashboard', { teachers })
})

module.exports = router;