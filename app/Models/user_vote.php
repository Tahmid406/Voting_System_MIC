<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_vote extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'user_email',
        'vote_index',
        'voted_candidate_index'
    ];
}
