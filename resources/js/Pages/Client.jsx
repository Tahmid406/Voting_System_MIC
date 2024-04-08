import { Box } from "@mui/material";

import { Frame } from "@/Components/Frame";
import ConnectingDots from "@/Utils/BackgroundEffect";
import { Header } from "@/Client_components/ClientHeader";
import { VotingOptions } from "@/Client_components/Voting_options/Index";

export default function Client({ auth }) {
    return (
        <Box>
            <ConnectingDots />
            <Frame>
                <Header />
                <VotingOptions user={auth} />
            </Frame>
        </Box>
    );
}
