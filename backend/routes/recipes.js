const express = require('express')
const router = express.Router()

const {getRecipes, addRecipe} = require('../controllers/recipes')

router.get('/', getRecipes)
module.exports = router