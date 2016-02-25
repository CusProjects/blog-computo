/**
 * Created by Malco Chacon on 10/02/2016.
 */

function Topic($http, $rootScope){

    var topic = {};

    topic.all = function(){
      return $http.get($rootScope.server + 'topic');
    };

    topic.find = function(id){

        return $http.get($rootScope.server + 'topic/' + id);

    };

    topic.save = function(topic){

        return $http.post($rootScope.server + 'topic', topic);

    };

    return topic;

}

angular
    .module('inspinia')
    .factory('TopicService', Topic);