import express from 'express';
const router = express.Router();

router.get('/add', (req, res) => {
    console.log(req.query);
    res.send(req.query);
    });

router.get('/subtract', (req, res) => {
    console.log(req.query);
    res.send(req.query);
    });

router.get('/multiply', (req, res) => {
    console.log(req.query);
    res.send(req.query);
    });

router.get('/divide', (req, res) => {
    console.log(req.query);
    res.send(req.query);
    });

    export default router;