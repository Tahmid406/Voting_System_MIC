import { Box, Typography } from "@mui/material";

export const Member_progress = ({ list_index, progress, Candidate_name }) => {
    const progressbarDimention = {
        width: 600,
        height: 35,
    };

    return (
        <Box display="flex" my={1.5} sx={{ scale: "0.9" }}>
            <Box
                component="img"
                src="./assets/Presidential_Candidates/Candidate.jpg"
                sx={{
                    border: "5px solid #6366F1",
                    borderRadius: "50%",
                    height: "100px",
                    width: "100px",
                }}
            ></Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                ml={4}
            >
                <Typography
                    color="#fff"
                    fontSize="26px"
                    fontWeight={600}
                    ml={1}
                >
                    {String.fromCharCode(65 + list_index)}. {Candidate_name}
                </Typography>
                <Box position="relative" my={2}>
                    <Box
                        width={`${progressbarDimention.width}px`}
                        height={`${progressbarDimention.height}px`}
                        borderRadius={`${progressbarDimention.height / 2}px`}
                        backgroundColor="#090A0E"
                    ></Box>
                    <Box
                        top="0px"
                        width={`${
                            (progressbarDimention.width / 100) * progress
                        }px`}
                        height={`${progressbarDimention.height}px`}
                        borderRadius={`${progressbarDimention.height / 2}px`}
                        sx={{
                            background: `linear-gradient(90deg, rgba(99,102,241,1) 0px, rgba(128,139,247,1) ${progressbarDimention.width}px)`,
                        }}
                        position="absolute"
                    ></Box>
                </Box>
            </Box>
        </Box>
    );
};
