const express = require('express')
const router = express.Router();
const { generateTimeTable } = require('../services/QueryServices')
const { getTimeTable } = require('../services/QueryServices.js')
const { verifyToken } = require('../middlewares/verifyToken')



router.get('/', async (req, res) => {
    const data = await generateTimeTable();
    res.render('timetable', { data })
})

router.get('/details', async (req, res) => {
    try {
        const data = await getTimeTable();
        res.render('details', { data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;