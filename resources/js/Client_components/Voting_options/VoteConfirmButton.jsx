import { Box, Button } from "@mui/material";

export const VoteConfirmButton = ({ setData, selectedIndex }) => {
    return (
        <Box width="100%" display="flex" justifyContent="center" mt={8} pb={8}>
            <Button
                type="submit"
                sx={{
                    background:
                        "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(128,139,247,1) 100%)",
                    color: "white",
                    height: "50px",
                    width: "200px",
                    borderRadius: "25px",
                    fontWeight: 600,
                }}
                onClick={() => setData("selectedIndex", selectedIndex)}
            >
                Confirm Vote
            </Button>
        </Box>
    );
};
