
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Recipe from './Recipe'; // Assuming Recipe type is exported from RecipeCard
import BackButton from './components/BackButton';


interface Order {
    recipe: typeof Recipe;
    quantity: number;
  }
  
  // Props interface for the Orders component
  interface OrdersProps {
    orders: Order[];
  }
  
  const Orders: React.FC = ({  }) => {
    const sampleRecipes = [
        {
          id: 1,
          name: 'Spaghetti Carbonara',
          steps: ['Follow package instructions for 4000g of spaghetti', 'Leave 100ml of pasta water', 'Scoop 400g of spaghetti into each box', 'Place on tabletop for 10 minutes', 'Fry 10 strips of bacon on medium heat for 8 minutes', 'Cut all the bacon into small pieces', 'Place spaghetti into 10 boxes', 'Place 10 boxes of spaghetti into delivery bag', 'Wait for delivery rider to collect food'],
          ingredients: [{ item: 'Spaghetti', quantity: 400, unit: 'g' }]
        },
        {
          id: 2,
          name: 'Chicken Stir-Fry',
          steps: ['Heat oil in a large skillet or wok', 'Add 10000g of Chicken pirces and cook until browned', 'Add 40000g of Broccoli and stir-fry for 20 minutes', 'Pour in soy cause and stir to coat.', 'Cook for another 3-5 minutes until vegetables are tender.', 'Serve with rice and noodles.'],
          ingredients: [{ item: 'Chicken Breast', quantity: 500, unit: 'g' }]
        },
      ];
    
      const sampleOrders = [
        { recipe: sampleRecipes[0], quantity: 10 },
        { recipe: sampleRecipes[1], quantity: 20 },
      ];
      return (
        <>
          <BackButton />
          <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h2" sx={{ marginBottom: 2 }}>
                Orders List
              </Typography>
              <List>
                {sampleOrders.map((order, index) => (
                  <Accordion key={index} sx={{ marginBottom: 2 }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`order-content-${index}`}
                      id={`order-header-${index}`}
                    >
                      <Typography variant="h4">
                        {order.recipe.name} - {order.quantity} orders
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ol style={{ textAlign: 'left', paddingLeft: '20px', fontSize: '20px' }}>
                        {order.recipe.steps.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ol>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </List>
            </CardContent>
          </Card>
        </>
      );
  };
  
  export default Orders;