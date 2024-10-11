import React, { useState } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { Close } from "@mui/icons-material";

interface CookingModeProps {
  onExit: () => void;
}

const tasks = [1, 2, 3]; // Example tasks in ascending order
const taskList = ["Prepare Chicken", "Cook Chicken", "Serve Chicken"];
const taskDescription = [
    "Marinate Chicken, Cut Chicken",
    "Set oven to 180 degrees, oven bake for 25 minutes",
    "Cut into 4 slices"
];

const CookingMode: React.FC<CookingModeProps> = ({ onExit }) => {
  const [currentTask1, setCurrentTask1] = useState(0);
  const [currentTask2, setCurrentTask2] = useState(0);
  const [currentTask3, setCurrentTask3] = useState(0); 

  const currentTasks = [currentTask1, currentTask2, currentTask3];

  const incrementNextTask1 = () => {
    if (currentTask1 < tasks.length - 1) {
      setCurrentTask1(currentTask1 + 1);
    }
  };

  const incrementNextTask2 = () => {
    if (currentTask2 < tasks.length - 1) {
      setCurrentTask2(currentTask2 + 1);
    }
  };

  const incrementNextTask3 = () => {
    if (currentTask3 < tasks.length - 1) {
      setCurrentTask3(currentTask3 + 1);
    }
  };

  const decrementNextTask1 = () => {
    if (currentTask1 > 0) {
      setCurrentTask1(currentTask1 - 1);
    }
  };

  const decrementNextTask2 = () => {
    if (currentTask2 > 0) {
      setCurrentTask2(currentTask2 - 1);
    }
  };

  const decrementNextTask3 = () => {
    if (currentTask3 > 0) {
      setCurrentTask3(currentTask3 - 1);
    }
  };

  // Function to determine task styles
  const getTaskStyle = (personNumber: number, taskNumber: number) => {
    if (taskNumber === currentTasks[personNumber - 1] + 1) {
      return { color: 'black', backgroundColor: 'pink', padding: '8px', borderRadius: '4px' }; // Current task
    } else if (taskNumber < currentTasks[personNumber - 1] + 1) {
        return { color: 'black', opacity: 0.5}; // Past tasks
      } else {
        return { color: 'grey', opacity: 0.15 }; // Future tasks
      }
    };

    const speak = (text: string) => {
        // Check if speech synthesis is supported
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'en-US'; // Set language if needed
          window.speechSynthesis.speak(utterance);
        } else {
          console.error("Text-to-speech not supported in this browser.");
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
          backgroundColor: 'white', // Full-screen background
          color: '#fff',
          margin: 0,
          padding: 0,
          overflow: 'hidden', // Prevent any overflow issues
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: 3 }} color="black">Cooking Mode</Typography>
        
        <Grid container spacing={4} sx={{ width: '80%' }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {tasks.map((taskNumber) => (
                    <React.Fragment key={taskNumber}>
                    <Typography 
                        sx={{ ...getTaskStyle(1, taskNumber) }}
                        variant="h3"
                    >
                        {taskList[taskNumber - 1]}
                    </Typography>
                    {/* Conditional rendering for task description */}
                    {taskNumber === currentTask1 + 1 && (
                        <Typography sx={{ ...getTaskStyle(1, taskNumber) }} color="black" variant="h6">
                        {taskDescription[taskNumber - 1]}
                        </Typography>
                    )}
                    </React.Fragment>
                ))}
            </Box>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button 
                        variant="contained"
                        color="primary" 
                        onClick={() => {
                            decrementNextTask1();
                            speak(taskList[currentTask1-1]);
                            speak(taskDescription[currentTask1-1]);
                        }}
                        disabled={currentTask1 <= 0} // Disable button if on the last task
                    >
                        Undo 1
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => {
                            incrementNextTask1();
                            speak(taskList[currentTask1+1]);
                            speak(taskDescription[currentTask1+1]);
                        }}
                        disabled={currentTask1 >= tasks.length - 1} // Disable button if on the last task
                    >
                        Next 1
                    </Button>
                </Box>
            </Container>

          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {tasks.map((taskNumber) => (
                    <React.Fragment key={taskNumber}>
                    <Typography 
                        sx={{ ...getTaskStyle(2, taskNumber) }}
                        variant="h3"
                    >
                        {taskList[taskNumber - 1]}
                    </Typography>
                    {/* Conditional rendering for task description */}
                    {taskNumber === currentTask2 + 1 && (
                        <Typography sx={{ ...getTaskStyle(2, taskNumber) }} color="black" variant="h6">
                        {taskDescription[taskNumber - 1]}
                        </Typography>
                    )}
                    </React.Fragment>
                ))}
            </Box>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={decrementNextTask2} 
                        disabled={currentTask2 <= 0} // Disable button if on the last task
                    >
                        Undo 2
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={incrementNextTask2} 
                        disabled={currentTask2 >= tasks.length - 1} // Disable button if on the last task
                    >
                        Next 2
                    </Button>
                </Box>
            </Container>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {tasks.map((taskNumber) => (
                    <React.Fragment key={taskNumber}>
                    <Typography 
                        sx={{ ...getTaskStyle(3, taskNumber) }}
                        variant="h3"
                    >
                        {taskList[taskNumber - 1]}
                    </Typography>
                    {/* Conditional rendering for task description */}
                    {taskNumber === currentTask3 + 1 && (
                        <Typography sx={{ ...getTaskStyle(3, taskNumber) }} color="black" variant="h6">
                        {taskDescription[taskNumber - 1]}
                        </Typography>
                    )}
                    </React.Fragment>
                ))}
            </Box>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={decrementNextTask3} 
                        disabled={currentTask3 <= 0} // Disable button if on the last task
                    >
                        Undo 3
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={incrementNextTask3} 
                        disabled={currentTask3 >= tasks.length - 1} // Disable button if on the last task
                    >
                        Next 3
                    </Button>
                </Box>
            </Container>
          </Grid>
        </Grid>
  
        <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
            
            
           
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
  
