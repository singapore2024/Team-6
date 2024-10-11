const supabase = require('../database');
const REQUESTS_TABLE = 'requests';
const USERS_TABLE = 'users';

const getLeaveRequests = async (req, res) => {
  try {
    // Fetch the leave requests from the requests table
    const { data: requests, error: requestError } = await supabase
      .from(REQUESTS_TABLE)
      .select('*');  // Fetch all fields from the requests table

    if (requestError) {
      throw requestError;
    }

    // For each request, fetch the user name from the users table
    const requestsWithUserNames = await Promise.all(
      requests.map(async (request) => {
        const { data: user, error: userError } = await supabase
          .from(USERS_TABLE)
          .select('name')  
          .eq('id', request.user_id) 
          .single(); 

        if (userError) {
          throw userError;
        }

        return {
          ...request,
          user_name: user.name
        };
      })
    );

    res.json(requestsWithUserNames);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getLeaveRequests,
};
