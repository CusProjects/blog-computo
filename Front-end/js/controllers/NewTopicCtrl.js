/**
 * Created by Gibran Polonsky on 2/15/2016.
 */

function NewTopicCtrl($scope, TopicService, $state) {

    $scope.topic = {};


    $scope.save = function(){

        TopicService.save($scope.topic).success(function(data){


            console.log(data);
            $state.go('home');
        });
    }


};
angular
    .module('inspinia')
    .controller('NewTopicCtrl', NewTopicCtrl);