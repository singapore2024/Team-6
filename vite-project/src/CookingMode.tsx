// CookingMode.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Close } from "@mui/icons-material";

interface CookingModeProps {
  onExit: () => void;
}

const CookingMode: React.FC<CookingModeProps> = ({ onExit }) => {
  return (
    <Box
      sx={{
        position: 'fixed', // Fixes to the screen
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#333', // Full-screen background
        color: '#fff',
        margin: 0,
        padding: 0,
        overflow: 'hidden', // Prevent any overflow issues
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: 3 }}>Cooking Mode</Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3 // Adjust the gap between images
        }}
      >
        {/* Example images */}
        <Box 
          component="img" 
          src="https://via.placeholder.com/300" 
          alt="Cooking Step 1" 
          sx={{ width: 300, height: 300 }}
        />
        <Box 
          component="img" 
          src="https://via.placeholder.com/300" 
          alt="Cooking Step 2" 
          sx={{ width: 300, height: 300 }}
        />
        <Box 
          component="img" 
          src="https://via.placeholder.com/300" 
          alt="Cooking Step 3" 
          sx={{ width: 300, height: 300 }}
        />
      </Box>
      <Button
        startIcon={<Close />}
        variant="contained"
        color="secondary"
        sx={{ marginTop: 4 }}
        onClick={onExit}
      >
        Exit Full Screen
      </Button>
    </Box>
  );
};

export default CookingMode;
