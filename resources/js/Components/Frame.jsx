import { Box } from "@mui/material";

export const Frame = ({ children }) => {
    return (
        <Box
            position="absolute"
            backgroundColor="rgba(31, 41, 55, 0.975)"
            sx={{
                width: { xs: "100vw", md: "1200px" },
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                borderRadius: "10px",
            }}
        >
            {children}
        </Box>
    );
};
