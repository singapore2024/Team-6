import React, { useState, useEffect } from "react";
import { 
  Grid, 
  Typography, 
  Box, 
  IconButton, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Button
} from "@mui/material";
import { ExpandMore, RestaurantMenu } from "@mui/icons-material";
import axios from "axios";
import BackButton from "./components/BackButton";


interface Recipe {
  id: number;
  name: string;
  steps: string[];
  ingredients: Array<{ item: string; quantity: number; unit: string }>;
}

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <Accordion
      sx={{
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
        transition: 'all 0.2s ease-in-out',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="recipe-content"
        id={`recipe-header-${recipe.id}`}
      >
        <IconButton size="large" color="primary">
          <RestaurantMenu fontSize="large" />
        </IconButton>
        <Typography variant="h6" sx={{ marginLeft: 2 }}>
          {recipe.name}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          Ingredients:
        </Typography>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {`${ingredient.quantity} ${ingredient.unit} of ${ingredient.item}`}
            </li>
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
  const [recipes, setRecipes] = useState<Recipe[]>([]); // Store the recipes
  const [loading, setLoading] = useState(true); // Handle loading state
  const [error, setError] = useState<string | null>(null); // Handle error state
  
  
  // Fetch the recipes from the API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get<Recipe[]>('http://localhost:3000/api/v1/recipes');
        console.log(response.data);
        setRecipes(response.data); // Directly set fetched data into state
      } catch (error) {
        setError('Failed to fetch recipes');
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecipes(); // Fetch the recipes when the component mounts
  }, []);
  
  if (loading) {
    return <Typography variant="h6">Loading recipes...</Typography>;
  }
  
  if (error) {
    return <Typography variant="h6" color="error">{error}</Typography>;
  }

  return (
    <>
      <BackButton />
      <Typography variant="h2" color="black" gutterBottom>
        Recipe List
      </Typography>
      <Box sx={{ padding: 4, backgroundColor: '#f5f5f5' }}>
        <Grid container spacing={3}>
          {recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
        {/* Add Recipe Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2, marginLeft: 'auto', display: 'block', fontSize: 35 }}
          onClick={() => {
            console.log('Add Recipe button clicked!');
          }}
        >
          Add Recipe
        </Button>
      </Box>
    </>
  );
};

export default RecipeList;
