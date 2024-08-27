const express = require('express');
const { login, register } = require('../controllers/authController');
const router = express.Router();

// Register a new student or alumni
const { check } = require('express-validator');

router.post(
    '/register',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
        check('college', 'College is required').not().isEmpty(),
        check('company', 'Company is required').not().isEmpty(),
        check('job', 'Job is required').not().isEmpty(),
        check('skills', 'Skills are required').not().isEmpty(),
        check('specializations', 'Specializations are required').not().isEmpty(),
    ],
    register
);


// Login for student, alumni, or admin
router.post('/login', login);

module.exports = router;
