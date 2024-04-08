import { Box } from "@mui/material";
import { Option } from "./option";
import { useState } from "react";
import { VoteConfirmButton } from "./VoteConfirmButton";
import { useForm } from "@inertiajs/react";

export const VotingOptions = ({ user }) => {
    const { data, setData, post, errors } = useForm({
        voteIndex: 0,
        user_id: user.user.id,
        user_email: user.user.email,
        selectedIndex: 0,
        canVote: user.user.canVote,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("voteSubmit"));
    };

    const [selectedIndex, setSelectedIndex] = useState(0);
    const Candidate_list = [
        "Samir Fazal",
        "Iftekhar Sakin",
        "Naam vule gesi :3",
    ];
    return (
        <>
            <Box
                component="form"
                onSubmit={submit}
                mt={8}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                {Candidate_list.map((candidate, i) => (
                    <Option
                        key={i}
                        list_index={i}
                        Candidate_name={candidate}
                        selected={selectedIndex === i}
                        setSelectedIndex={setSelectedIndex}
                    />
                ))}
                <VoteConfirmButton
                    setData={setData}
                    selectedIndex={selectedIndex}
                />
            </Box>
        </>
    );
};
