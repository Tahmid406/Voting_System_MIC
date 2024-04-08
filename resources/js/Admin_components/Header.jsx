import { Box, Typography } from "@mui/material";

export const AdminHeader = ({ timer }) => {
    const seconds = Math.floor(timer / 100);
    const miliseconds = timer % 100;
    return (
        <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color="#fff"
            px={6}
            pt={5}
        >
            <Box>
                <Typography fontSize="32px" fontWeight={600}>
                    Presidential Panel
                </Typography>
                <Typography fontSize="18px" sx={{ opacity: "50%" }}>
                    Ongoing vote for presidential panel
                </Typography>
            </Box>
            <Box>
                <Typography fontSize="32px" sx={{ opacity: "50%", mr: 4 }}>
                    {seconds.toString().padStart(2, "0")}:
                    {miliseconds.toString().padStart(2, "0")}
                </Typography>
            </Box>
        </Box>
    );
};
