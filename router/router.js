const express = require('express');
const router = express.Router();

const {
    list,
    getSurat,
} = require('../controllers/alquran');

router.get("/api/list", list);
router.get("/api/surat/:page", getSurat);

module.exports = router