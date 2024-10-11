import React from "react";
import { Grid, Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { Star, People, RestaurantMenu, EventAvailable, ListAlt, MenuBook } from "@mui/icons-material";

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, description }) => {
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
    }}>
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
  );
};

const Dashboard: React.FC = () => {
    const cards = [
        { title: "View Orders", icon: <ListAlt fontSize="large" /> },
        { title: "Manage Leaves", icon: <EventAvailable fontSize="large" /> },
        { title: "Cooking Mode", icon: <RestaurantMenu fontSize="large" /> },
        { title: "Recipes", icon: <MenuBook fontSize="large" /> },
        { title: "Employee Profiles", icon: <People fontSize="large" /> }
      ];

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <DashboardCard title={card.title} icon={card.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
