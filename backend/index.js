if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}

const express =  require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

//Initializations
const app = express();
require('./dbHelper');

//Settings
app.set('port', process.env.PORT || 3000);


//Middleware
app.use(morgan('dev'));


//Routes

//Static Files

//Start the Server
app.listen(app.get('port'), ()=>{
    console.log(`Server on Port ${app.get('port')}`)
});