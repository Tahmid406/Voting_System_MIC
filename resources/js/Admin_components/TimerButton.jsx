import { Box, Button } from "@mui/material";

export const TimerButton = ({ isTimerRunning, setIsTimerRunning }) => {
    return (
        <Box width="100%" display="flex" justifyContent="center" pb={8}>
            <Button
                sx={{
                    background:
                        "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(128,139,247,1) 100%)",
                    color: "white",
                    height: "50px",
                    width: "200px",
                    borderRadius: "25px",
                    fontWeight: 600,
                }}
                onClick={() => setIsTimerRunning((prev) => !prev)}
            >
                {isTimerRunning ? "Stop Timer" : "Start Timer"}
            </Button>
        </Box>
    );
};
