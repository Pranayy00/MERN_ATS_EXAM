const express = require('express');
const { addCourse, showCourses, updateCourse, showCourse, delCourse } = require('../controllers/courseController');

const routes = express.Router()

routes.post('/add', addCourse)
routes.get('/', showCourses)
routes.put('/:id', updateCourse)
routes.get('/course/:id', showCourse)
routes.delete('/:id', delCourse)

module.exports = routes
