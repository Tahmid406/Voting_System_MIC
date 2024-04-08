<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\user_vote;
use Illuminate\Http\Request;

class VoteSubmitController extends Controller
{
    public function submitVote(Request $request)
    {
        $validated = $request->validate([
            'selectedIndex' => 'required',
        ]);

        if ($request->canVote) {
            user_vote::insert([
                "user_id" => $request->user_id,
                "user_email" => $request->user_email,
                "vote_index" => $request->voteIndex,
                "voted_candidate_index" => $request->selectedIndex,
            ]);
            User::findOrFail($request->user_id)->update(['canVote' => false]);
        }
    }
}
