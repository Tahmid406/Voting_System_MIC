<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\user_vote;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        $users = User::latest()->get()->map(function ($user) {
            return [
                'userID' => $user->id,
                'username' => $user->name,
                'email' => $user->email
            ];
        });

        return Inertia::render('Dashboard', ['userList' => $users]);
    }

    public function timerReached(Request $request)
    {
        $userVotes = user_vote::all()->groupBy('voted_candidate_index');

        $userCountsArray = [];
        foreach ($userVotes as $userId => $votes) {
            $userCountsArray[$userId] = count($votes);
        }

        return response()->json(['message' => 'Timer reached event saved successfully', 'user_vote_counts' => $userCountsArray], 200);
    }
}
