const supabase = require('../database');  // Import the Supabase client

// Controller method to get all users
const getUsers = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')  // Replace 'users' with your actual table name
      .select('*');

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export the controller method(s)
module.exports = {
  getUsers,
};
