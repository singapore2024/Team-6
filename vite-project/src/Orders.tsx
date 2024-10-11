
import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';
import Recipe from './Recipe'; // Assuming Recipe type is exported from RecipeCard


interface Order {
    recipe: typeof Recipe;
    quantity: number;
  }
  
  // Props interface for the Orders component
  interface OrdersProps {
    orders: Order[];
  }
  
  const Orders: React.FC<OrdersProps> = ({ orders }) => {
    return (
      <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Orders List
          </Typography>
          <List>
            {orders.map((order, index) => (
              <ListItem key={index} sx={{ padding: 1, borderBottom: '1px solid #ccc' }}>
                <Typography variant="h6">
                  {order.recipe.name} - {order.quantity} orders
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  };
  
  export default Orders;