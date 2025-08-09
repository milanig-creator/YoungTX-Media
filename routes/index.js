const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
  res.render('index', { title: 'Home • YTX Media', page: 'home' })
);

router.get('/about', (req, res) =>
  res.render('about', { title: 'About • YTX Media', page: 'about' })
);

router.get('/services', (req, res) =>
  res.render('services', { title: 'Services • YTX Media', page: 'services' })
);

router.get('/gallery', (req, res) =>
  res.render('gallery', { title: 'Gallery • YTX Media', page: 'gallery' })
);

router.get('/contact', (req, res) =>
  res.render('contact', { title: 'Contact • YTX Media', page: 'contact' })
);

module.exports = router;

