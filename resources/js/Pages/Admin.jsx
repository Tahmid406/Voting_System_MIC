import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Frame } from "@/Components/Frame";
import ConnectingDots from "@/Utils/BackgroundEffect";
import { AdminHeader } from "@/Admin_components/Header";
import { Members_progress } from "@/Admin_components/Member_progress/Index";
import { TimerButton } from "@/Admin_components/TimerButton";
import axios from "axios";

export default function Admin() {
    const [timer, setTimer] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [voteProgress, setVoteProgress] = useState([0, 0, 0]);

    useEffect(() => {
        let interval;
        if (isTimerRunning && timer < 100) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 5);
            }, 50);
        } else if (timer >= 100) {
            clearInterval(interval);
            sendDataToLaravel();
        }

        return () => clearInterval(interval);
    }, [isTimerRunning, timer]);

    const sendDataToLaravel = async () => {
        try {
            const response = await axios.post("/admin/timer-reached");
            console.log(response.data.user_vote_counts);
            setVoteProgress(response.data.user_vote_counts);
        } catch (error) {
            console.error("Error sending data to Laravel:", error);
        }
    };

    return (
        <Box>
            <ConnectingDots />
            <Frame>
                <AdminHeader timer={timer} />
                <Members_progress progress={voteProgress} />
                <TimerButton
                    isTimerRunning={isTimerRunning}
                    setIsTimerRunning={setIsTimerRunning}
                />
            </Frame>
        </Box>
    );
}
