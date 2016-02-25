<?php

/**
 * Created by PhpStorm.
 * User: Gibran Polonsky
 * Date: 10/02/2016
 * Time: 11:54 AM
 */
class Topic extends Eloquent
{

    protected $table = 'topic';
    public $timestamps = false;


    public function notes()
    {
        return $this->hasMany('note');
    }

    public function images()
    {
        return $this->hasMany('image');
    }

}