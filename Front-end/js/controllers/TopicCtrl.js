/**
 * Created by Gibran Polonsky on 11/02/2016.
 */

function TopicCtrl($scope, $sce, TopicService, $stateParams) {

    $scope.data = {};

    getTopic($stateParams.topicId);

    $scope.change = function(){
        console.log($scope.data.img);
    };


    function getTopic(id){

        TopicService.find(id).success(function(data){

            $scope.data.topic = data;

            $scope.data.topic.description = $sce.trustAsHtml($scope.data.topic.description);

        });

    }



};



angular
    .module('inspinia')
    .controller('TopicCtrl', TopicCtrl);