const express = require('express')
const router = express.Router()

const {getRecipes, addRecipe, deleteRecipe} = require('../controllers/recipes')

router.get('/', getRecipes)
router.post('/', addRecipe)
router.delete('/:id', deleteRecipe)
module.exports = router