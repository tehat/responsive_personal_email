/**
 * Created by Thomas on 4/12/16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.use(express.static(path.join(__dirname, './public')));

app.set("port", (process.env.PORT || 4000));
app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});
