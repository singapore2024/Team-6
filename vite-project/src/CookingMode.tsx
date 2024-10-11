import React, { useState } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { Close } from "@mui/icons-material";

interface CookingModeProps {
  onExit: () => void;
}

const tasks = [1, 2, 3]; // Example tasks in ascending order
const taskList1 = ["Cook Spaghetti", "Drain Spaghetti", "Plate Spaghetti"];
const taskDescription1 = [
    "Follow package instructions for 4000g of spaghetti",
    "Leave 100ml of pasta water",
    "Scoop 400g of spaghetti into each box"
];
const taskList2 = ["Defrost Bacon", "Fry bacon", "Cut bacon"];
const taskDescription2 = [
    "Place on tabletop for 10 minutes",
    "Fry 10 strips of bacon on medium heat for 8 minutes",
    "Cut all the bacon into small pieces"
];
const taskList3 = ["Package food", "Pack into cooler bag", "Prep for delivery"];
const taskDescription3 = [
    "Place spaghetti into 10 boxes",
    "Place 10 boxes of spaghetti into delivery bag",
    "Wait for delivery rider to collect food"
];

// const taskListList = [taskList1, taskList2, taskList3];
// const taskDescriptionList = [taskDescription1, taskDescription2, taskDescription3];

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
        return { color: 'black', opacity: 0.15}; // Past tasks
      } else {
        return { color: 'grey', opacity: 0.15 }; // Future tasks
      }
    };

    const speak = (text: string) => {
        // Check if speech synthesis is supported
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'en-US'; // Set language if needed
          utterance.rate = 0.7; // Slower
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
        {/* <Typography variant="h2" sx={{ marginBottom: 3 }} color="black">Cooking Mode</Typography> */}
        
        <Grid container spacing={4} sx={{ width: '80%' }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                <Typography color="black" variant="h2"><b>Tom</b></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {tasks.map((taskNumber) => (
                    <React.Fragment key={taskNumber}>
                    <Typography 
                        sx={{ ...getTaskStyle(1, taskNumber) }}
                        variant="h4"
                    >
                        {taskList1[taskNumber - 1]}
                    </Typography>
                    {/* Conditional rendering for task description */}
                    {taskNumber === currentTask1 + 1 && (
                        <Typography sx={{ ...getTaskStyle(1, taskNumber) }} color="black" variant="body2">
                        {taskDescription1[taskNumber - 1]}
                        </Typography>
                    )}
                    </React.Fragment>
                ))}
            </Box>
            <br />
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button 
                        variant="contained"
                        color="primary" 
                        onClick={() => {
                            decrementNextTask1();
                            speak(taskList1[currentTask1-1]);
                            speak(taskDescription1[currentTask1-1]);
                        }}
                        disabled={currentTask1 <= 0} // Disable button if on the last task
                        sx={{
                            fontSize: '1.5rem',  // Increase text size
                            padding: '16px 32px', // Add more padding to make the button bigger
                            minWidth: '200px',    // Ensure minimum button width
                          }}
                    >
                        Undo
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => {
                            incrementNextTask1();
                            speak(taskList1[currentTask1+1]);
                            speak(taskDescription1[currentTask1+1]);
                        }}
                        disabled={currentTask1 >= tasks.length - 1} // Disable button if on the last task
                        sx={{
                            fontSize: '1.5rem',  // Increase text size
                            padding: '16px 32px', // Add more padding to make the button bigger
                            minWidth: '200px',    // Ensure minimum button width
                          }}
                    >
                        Next
                    </Button>
                </Box>
            </Container>

          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                <Typography color="black" variant="h2"><b>Dick</b></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {tasks.map((taskNumber) => (
                    <React.Fragment key={taskNumber}>
                    <Typography 
                        sx={{ ...getTaskStyle(2, taskNumber) }}
                        variant="h4"
                    >
                        {taskList2[taskNumber - 1]}
                    </Typography>
                    {/* Conditional rendering for task description */}
                    {taskNumber === currentTask2 + 1 && (
                        <Typography sx={{ ...getTaskStyle(2, taskNumber) }} color="black" variant="body2">
                        {taskDescription2[taskNumber - 1]}
                        </Typography>
                    )}
                    </React.Fragment>
                ))}
            </Box>
            <br />
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={decrementNextTask2} 
                        disabled={currentTask2 <= 0} // Disable button if on the last task
                        sx={{
                            fontSize: '1.5rem',  // Increase text size
                            padding: '16px 32px', // Add more padding to make the button bigger
                            minWidth: '200px',    // Ensure minimum button width
                          }}
                    >
                        Undo
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={incrementNextTask2} 
                        disabled={currentTask2 >= tasks.length - 1} // Disable button if on the last task
                        sx={{
                            fontSize: '1.5rem',  // Increase text size
                            padding: '16px 32px', // Add more padding to make the button bigger
                            minWidth: '200px',    // Ensure minimum button width
                          }}
                    >
                        Next
                    </Button>
                </Box>
            </Container>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                <Typography color="black" variant="h2"><b>Harry</b></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {tasks.map((taskNumber) => (
                    <React.Fragment key={taskNumber}>
                    <Typography 
                        sx={{ ...getTaskStyle(3, taskNumber) }}
                        variant="h4"
                    >
                        {taskList3[taskNumber - 1]}
                    </Typography>
                    {/* Conditional rendering for task description */}
                    {taskNumber === currentTask3 + 1 && (
                        <Typography sx={{ ...getTaskStyle(3, taskNumber) }} color="black" variant="body2">
                        {taskDescription3[taskNumber - 1]}
                        </Typography>
                    )}
                    </React.Fragment>
                ))}
            </Box>
            <br />
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={decrementNextTask3} 
                        disabled={currentTask3 <= 0}
                        sx={{
                            fontSize: '1.5rem',  // Increase text size
                            padding: '16px 32px', // Add more padding to make the button bigger
                            minWidth: '200px',    // Ensure minimum button width
                          }}
                    >
                        Undo
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={incrementNextTask3} 
                        disabled={currentTask3 >= tasks.length - 1} // Disable button if on the last task
                        sx={{
                            fontSize: '1.5rem',  // Increase text size
                            padding: '16px 32px', // Add more padding to make the button bigger
                            minWidth: '200px',    // Ensure minimum button width
                          }}
                    >
                        Next
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
  
