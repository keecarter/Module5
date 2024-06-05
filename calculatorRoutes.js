import express from 'express';
const router = express.Router();

/*router.get('/add', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})*/

//Exercise 3
router.get("/add", (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(sum);
    res.status(200);
    res.json({ result: sum });
    });
//http://localhost:3000/calculator/add?num1=4&num2=10

/*router.get('/subtract', (req, res) => {
   console.log(req.query);
    res.send(req.query);
    });*/

    //Exercise 3
router.get("/subtract", (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let difference = number1 - number2;
console.log(difference);
res.status(200);
res.json({ result: difference });
});
//http://localhost:3000/calculator/subtract?num1=4&num2=10

/*router.get('/multiply', (req, res) => {
    console.log(req.query);
    res.send(req.query);
    });*/

    //Exercise 3
router.get("/multiply", (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
let product = number1 * number2;
console.log(product);
res.status(200);
res.json({ result: product });
});
//http://localhost:3000/calculator/multiply?num1=4&num2=10

/*router.get('/divide', (req, res) => {
    /*console.log(req.query);
    res.send(req.query);
    });*/

    //Exercise 3
router.get("/divide", (req, res) => {
let number1 = parseInt(req.query.num1);
let number2 = parseInt(req.query.num2);
if (number2 === 0) {
res.status(400).json({ error: "Cannot divide by zero" });
} else {
let quotient = number1 / number2;
console.log(quotient);
res.status(200).json({ result: quotient });
}
});
//http://localhost:3000/calculator/divide?num1=4&num2=10

    export default router;