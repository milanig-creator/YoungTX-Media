const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/about', (req, res) => res.render('about'));
router.get('/services', (req, res) => res.render('services'));
router.get('/gallery', (req, res) => res.render('gallery'));
router.get('/contact', (req, res) => res.render('contact'));

module.exports = router;
