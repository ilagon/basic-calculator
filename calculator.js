const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true})); //Mandatory code to use body-parser

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send(`The result is ${result}<br><br><a href="/">Back to start</a>`);
} );

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post('/bmicalculator', (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = (weight / Math.pow(height, 2)).toFixed(1);

    res.send(`Your BMI is ${bmi}`);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});