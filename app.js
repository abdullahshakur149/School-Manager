const express = require('express')
const app = express();
const connectDB = require('./database/db')
const upload = require('./middlewares/fileupload');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')





// database
connectDB();
dotenv.config();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.set('view engine', 'ejs')




// routes
app.use('/', require('./routes/index'))
app.use('/timetable', require('./routes/TimeTable'))
app.use('/api', require('./routes/api'))
app.use('/', require('./routes/auth'))


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})