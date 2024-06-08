import Calculator from '../libraries/calculator'

exports.divide = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    if (number2 === 0) {
        res.status(400).json({ error: "Cannot divide by zero" });
    } else {
        // let quotient = number1 / number2;
        let quotient = Calculator.divide(number1, number2);  // Expand your application to use a Calculator library that takes care of the calculations and integrate it in your code.
        console.log(quotient);
        res.json({ result: quotient });
    }
};