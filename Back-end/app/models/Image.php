<?php

/**
 * Created by PhpStorm.
 * User: Gibran Polonsky
 * Date: 11/02/2016
 * Time: 12:23 PM
 */
class Image extends Eloquent
{
    protected $table = 'image';
    public $timestamps = false;

    public function topic()
    {
        return $this->belongsTo('topic');
    }
}