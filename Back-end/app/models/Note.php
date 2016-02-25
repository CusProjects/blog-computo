<?php

/**
 * Created by PhpStorm.
 * User: Malco Chacon
 * Date: 10/02/2016
 * Time: 11:55 AM
 */
class Note extends Eloquent
{
    protected $table = 'note';

    public function topic()
    {
        return $this->belongsTo('topic');
    }
}

