const express = require('express');

const app = express();
const db = require('./models')
const bodyParser = require('body-parser');
const cors = require('cors');


const postRouter = require('./routes/Posts')
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
app.use('/posts',postRouter);

db.sequelize.sync().then(() =>{
    app.listen(3000,() =>{
        console.log('App listening on 3000');
    })
})



module.exports = app;