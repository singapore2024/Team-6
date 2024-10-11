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

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('password', password);

    if (error) {
      throw error;
    }

    if (data.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Export the controller method(s)
module.exports = {
  getUsers,
  login
};
