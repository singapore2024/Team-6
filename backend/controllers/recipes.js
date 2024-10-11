const supabase = require('../database');  // Import the Supabase client

// Controller method to get all recipes
const getRecipes = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('recipes')  // Replace 'recipes' with your actual table name
      .select('*');

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getRecipes,
    };