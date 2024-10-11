import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Close } from "@mui/icons-material";

interface CookingModeProps {
  onExit: () => void;
}

const tasks = [1, 2, 3, 4, 5, 6, 7]; // Example tasks in ascending order

const CookingMode: React.FC<CookingModeProps> = ({ onExit }) => {
  const [currentTask, setCurrentTask] = useState(0); // Initial task

  // Function to increment the current task, ensuring we don't exceed the number of tasks
  const handleNextTask = () => {
    if (currentTask < tasks.length - 1) {
      setCurrentTask(currentTask + 1);
    }
  };

  // Function to determine task styles
  const getTaskStyle = (taskNumber: number) => {
    if (taskNumber === currentTask + 1) {
      return { color: 'black', backgroundColor: 'pink', padding: '8px', borderRadius: '4px' }; // Current task
    } else if (taskNumber < currentTask + 1) {
        return { color: 'black' }; // Past tasks
      } else {
        return { color: 'grey' }; // Future tasks
      }
    };
  
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
        
        <Grid container spacing={4} sx={{ width: '80%' }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {tasks.map((task) => (
                <Typography 
                  key={task} 
                  sx={{ ...getTaskStyle(task), marginBottom: 2 }}
                  variant="h6"
                >
                  Task {task}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {tasks.map((task) => (
                <Typography 
                  key={task} 
                  sx={{ ...getTaskStyle(task), marginBottom: 2 }}
                  variant="h6"
                >
                  Task {task}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {tasks.map((task) => (
                <Typography 
                  key={task} 
                  sx={{ ...getTaskStyle(task), marginBottom: 2 }}
                  variant="h6"
                >
                  Task {task}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
  
        <Box sx={{ display: 'flex', gap: 2, marginTop: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleNextTask} 
            disabled={currentTask >= tasks.length - 1} // Disable button if on the last task
          >
            Next Task
          </Button>
          <Button
            startIcon={<Close />}
            variant="contained"
            color="secondary"
            onClick={onExit}
          >
            Exit Full Screen
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default CookingMode;
  
