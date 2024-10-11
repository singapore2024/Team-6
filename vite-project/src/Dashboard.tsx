import React from "react";
import { Grid, Card, CardContent, Typography, Box, IconButton, colors } from "@mui/material";
import { Star, People, RestaurantMenu, EventAvailable, ListAlt, MenuBook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
  onClick?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, description, onClick }) => {
  return (
    <Card sx={{ 
      padding: 2, 
      borderRadius: 2, 
      boxShadow: 3, 
      '&:hover': { 
        transform: 'translateY(-5px)', 
        boxShadow: 6 
      },
      transition: 'all 0.2s ease-in-out'
    }}
    onClick={onClick}>
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
    const navigate = useNavigate(); // React Router hook to navigate

    const cards = [
        { title: "View Orders", icon: <ListAlt fontSize="large" /> },
        { title: "Manage Leaves", icon: <EventAvailable fontSize="large" />, onClick: () => navigate("/leaves") },
        { title: "Cooking Mode", icon: <RestaurantMenu fontSize="large" />  },
        { title: "Recipes", icon: <MenuBook fontSize="large" />, onClick: () => navigate("/recipes")  },
        { title: "Employee Profiles", icon: <People fontSize="large" /> }
      ];

  return (
    <>
        <Typography variant="h2" color="black">Admin Dashboard</Typography>
        <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={3}>
            {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <DashboardCard title={card.title} icon={card.icon} onClick={card.onClick} />
            </Grid>
            ))}
        </Grid>
        </Box>
    </>
  );
};

export default Dashboard;
