import { Box, Typography } from "@mui/material";

export const Option = ({
    list_index,
    Candidate_name,
    selected = false,
    setSelectedIndex,
}) => {
    return (
        <Box
            sx={{ width: { xs: "90%", md: "800px" }, py: 2, cursor: "pointer" }}
            backgroundColor="#374151"
            borderRadius="5px"
            mb={4}
            onClick={() => setSelectedIndex(list_index)}
        >
            <Typography
                color="#fff"
                fontSize="26px"
                fontWeight={600}
                ml={1}
                px={4}
                py={0.5}
            >
                <Typography
                    component="span"
                    height="50px"
                    width="50px"
                    sx={{
                        background: selected
                            ? "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(128,139,247,1) 100%)"
                            : "#414B5A",
                    }}
                    fontSize="26px"
                    fontWeight={600}
                    borderRadius="50%"
                    display="inline-flex"
                    justifyContent="center"
                    alignItems="center"
                    mr={2}
                >
                    {String.fromCharCode(65 + list_index)}{" "}
                </Typography>
                {Candidate_name}
            </Typography>
        </Box>
    );
};
