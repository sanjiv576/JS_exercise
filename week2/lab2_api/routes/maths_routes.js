
const express = require('express');
const router = express.Router();

// import for maths operations like add, subtract and multiply
const maths_operations = require('../maths/maths_operations');

// main route
router.route('/')
    .get((req, res) => res.status(200).json({ "message": "Use add, subtract or multiply in /maths/ path" }))
    .post((req, res) => res.status(405).json({ "error": "POST method is not allowed" }))
    .put((req, res) => res.status(405).json({ "error": "PUT method is not allowed" }))
    .delete((req, res) => res.status(405).json({ "error": "DELETE method is not allowed" }));


router.route('/:taskName')
    .get((req, res) => {
        const message = 'You are able to add, subtract and multiply only two numbers';
        res.status(204).json({ "message": message });
    })
    .post((req, res) => {
        // error handling
        if (!req.body.firstNum || !req.body.secondNum) res.status(400).json({ "error": "firstNum or secondNum is missing" });

        // store data
        const functionName = req.params.taskName;
        const firstNumber = req.body.firstNum;
        const secondNumber = req.body.secondNum;

        let result;
        if (functionName === 'add') {
            this.reuslt = `Addition of ${firstNumber} and ${secondNumber} is ${maths_operations.add(firstNumber, secondNumber)}`;
        }
        else if (functionName === 'subtract') {
            this.reuslt = `Subtraction of ${firstNumber} and ${secondNumber} is ${maths_operations.subtract(firstNumber, secondNumber)}`;
        }
        else if (functionName === 'multiply') {
            this.reuslt = `Multiply of ${firstNumber} and ${secondNumber} is ${maths_operations.multiply(firstNumber, secondNumber)}`;
        }
        else {
            res.status(400).json({ "error": "Invalid task name, allows only add, subtract and multiply" });
        }

        // result of add, subtract or multiply
        res.status(200).json(this.reuslt);

    })

    .put((req, res) => {
        res.status(405).json({ "error": "PUT method is not allowed" })
    })

    .delete((req, res) => {
        res.status(405).json({ "error": "DELETE method is not allowed" })
    });


module.exports = router