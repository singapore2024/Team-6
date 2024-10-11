import React, { useState } from "react";
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  IconButton, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from "@mui/material";
import { ExpandMore, RestaurantMenu } from "@mui/icons-material";



interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <Accordion sx={{ 
      padding: 2, 
      borderRadius: 2, 
      boxShadow: 3, 
      '&:hover': { 
        transform: 'translateY(-5px)', 
        boxShadow: 6 
      },
      transition: 'all 0.2s ease-in-out'
    }}>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls="recipe-content" id="recipe-header">
        <IconButton size="large" color="primary">
          <RestaurantMenu fontSize="large" />
        </IconButton>
        <Typography variant="h6" sx={{ marginLeft: 2 }}>
          {recipe.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          Ingredients:
        </Typography>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          Steps:
        </Typography>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </AccordionDetails>
    </Accordion>
  );
};

const RecipeList: React.FC = () => {
  const recipes: Recipe[] = [
    {
      title: "Spaghetti Bolognese",
      description: "A classic Italian pasta dish with a rich meat sauce.",
      ingredients: ["Pasta", "Minced beef", "Tomato sauce", "Garlic", "Onion", "Olive oil"],
      steps: ["Cook pasta", "Prepare sauce", "Serve together"]
    },
    {
      title: "Chicken Curry",
      description: "A flavorful and spicy chicken curry with coconut milk.",
      ingredients: ["Chicken", "Coconut milk", "Curry powder", "Garlic", "Onion", "Tomato"],
      steps: ["Prepare ingredients", "Cook chicken", "Add curry sauce", "Simmer"]
    }
    // Add more recipes here
  ];

  return (
    <>
      <Typography variant="h2" color="black" gutterBottom>
        Recipe List
      </Typography>
      <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={3}>
          {recipes.map((recipe, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default RecipeList;
