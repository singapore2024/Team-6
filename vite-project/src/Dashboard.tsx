import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { People, RestaurantMenu, EventAvailable, ListAlt, MenuBook } from "@mui/icons-material";
import CookingMode from "./CookingMode"; // Import the new CookingMode component
import { useNavigate } from "react-router-dom";


interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
  onClick?: () => void; // Optional click handler
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, description, onClick }) => {
  return (
    <Card
      sx={{
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer', // Make it look clickable
      }}
      onClick={onClick}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <IconButton size="large" color="primary">
          {icon}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>

    // <Router>
    //   <Switch>
    //     <Route path="/:id" children={<Child />} />
    //   </Switch>
    // </Router>
  );
};

const Dashboard: React.FC = () => {
  const user = JSON.parse(sessionStorage.getItem('user') || '{}');
  const userType = user.role || ''; // Check the user type

  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false); // State for full-screen mode

  const cards = [
    { title: "View Orders", icon: <ListAlt fontSize="large" />, onClick: () => navigate("/orders") },
    { title: "Manage Leaves", icon: <EventAvailable fontSize="large" />, hideFor: "employee" },
    { title: "Cooking Mode", icon: <RestaurantMenu fontSize="large" />, onClick: () => setIsFullScreen(true) }, // Activate full-screen on click
    { title: "Recipes", icon: <MenuBook fontSize="large" />, onClick: () => navigate("/recipes") },
    { title: "Employee Profiles", icon: <People fontSize="large" />, hideFor: "employee", onClick: () => navigate("/employees") },
  ];

  // If full screen is active, render the CookingMode component
  if (isFullScreen) {
    return <CookingMode onExit={() => setIsFullScreen(false)} />;
  }

  return (
    <>
      <Typography variant="h2" color="black">Admin Dashboard</Typography>
      <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={3}>
          {cards
            .filter(card => !(card.hideFor && card.hideFor === userType))
            .map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <DashboardCard
                  title={card.title}
                  icon={card.icon}
                  onClick={card.onClick} // Pass the click handler if provided
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
