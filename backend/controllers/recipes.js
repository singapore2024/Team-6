const supabase = require('../database');  // Import the Supabase client
const RECIPES_TABLE = 'recipes';
// Controller method to get all recipes
const getRecipes = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from(RECIPES_TABLE) 
      .select('*');

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addRecipe = async (req, res) => {
    const { name, steps, ingredients } = req.body;
  
    // Check if required fields are provided
    if (!name || !steps || !ingredients) {
      return res.status(400).json({ message: 'Name, steps, and ingredients are required' });
    }
  
    try {
      // Insert the new recipe into the database
      const { data, error } = await supabase
        .from(RECIPES_TABLE) 
        .insert([
          { name, steps, ingredients }
        ]);
  
      if (error) throw error;
  
      res.status(201).json({ message: 'Recipe added successfully!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteRecipe = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Delete the recipe from the database
      const { data, error } = await supabase
        .from(RECIPES_TABLE) 
        .delete()
        .match({ id });
  
      if (error) throw error;
  
      // Respond with success message
      res.json({ message: 'Recipe deleted successfully!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {
    getRecipes,
    addRecipe,
    deleteRecipe,
    };