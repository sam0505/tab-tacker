console.log('hello');
const express = require('express');
// to align json data easily
const bodyParser = require('body-parser');
const cors = require('cors');
// use to log
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// endpoint get post put patch delete
app.get('/status', (req, res) => {
    res.send({
        message: 'hello World!'
    })
});
app.listen(process.env.PORT || 8081);

