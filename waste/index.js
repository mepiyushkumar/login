let express = require('express');
let mongoose = require('mongoose');
const app = express()
let cors = require('cors');
let bodyParser = require('body-parser');
const userRoute = require('../Server/Routes/user_routes');

const mongourl = "mongodb://127.0.0.1:27017/user_login";


mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true },()=>{
  console.log("Connection to mongodb success")
},e=>{console.log(e)});


app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/', userRoute)
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
// Error Handling
app.use((req, res, next) => {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});