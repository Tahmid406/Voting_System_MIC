import { Box, Typography } from "@mui/material";

export const Header = () => {
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
        </Box>
    );
};
