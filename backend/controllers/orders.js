const supabase = require('../database');
const ORDERS_TABLE = 'orders';

const getOrders = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from(ORDERS_TABLE) 
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
    getOrders,
    };
