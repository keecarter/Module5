import express from 'express';
const router = express.Router();

router.get('/test', (req, res) => {
res.send('This is a test');
});

router.get('/anotherTest', (req, res) => {
res.send('This is another test');
});

export default router; 