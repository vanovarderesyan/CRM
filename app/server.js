const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const Util = require("./util/util");
const adminRouting = require("./routes/admin/admin.routing");
const swagger = require("./service/swagger.service");
const cors = require('cors')
const logger = require("morgan");
let port = 4000;
// initialize swagger-jsdoc
app.use(cors())
app.use(Util.allowCrossDomain);
app.use(express.static(path.join(__dirname, "dist")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use("/admin", adminRouting);

app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swagger.swaggerSpec());
});

app.use('/static',express.static(path.join(__dirname, "..", 'assets', 'image')));

app.use(function (err, req, res, next) {
    console.log(err)
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 400).send({message : err.message});
});

app.listen(port, () => {
    console.log("Listening",port)
});
