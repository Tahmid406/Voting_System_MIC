import { Box } from "@mui/material";

import { Member_progress } from "./Memeber_progress";

export const Members_progress = ({ progress }) => {
    return (
        <Box my={8} display="flex" flexDirection="column" alignItems="center">
            <Member_progress
                progress={progress[0]}
                list_index={0}
                Candidate_name="Samir Fazal"
            />
            <Member_progress
                progress={progress[1]}
                list_index={1}
                Candidate_name="Iftekhar Sakin"
            />
            <Member_progress
                progress={progress[2]}
                list_index={2}
                Candidate_name="Naam mone nai :3"
            />
        </Box>
    );
};
