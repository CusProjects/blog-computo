/**
 * Created by Gibran Polonsky on 10/02/2016.
 */
function HomeCtrl($scope, $sce, TopicService) {

  $scope.data = {};

    getTopics();

    $scope.getRandomColor = function(){

        var letters = '012345'.split('');
        var color = '#';
        color += letters[Math.round(Math.random() * 5)];
        letters = '0123456789ABCDEF'.split('');
        for (var i = 0; i < 5; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return ColorLuminance(color, 0);
    };

    function ColorLuminance(hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;

        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i*2,2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00"+c).substr(c.length);
        }

        return rgb;
    }


    function getTopics(){
        TopicService.all().success(function(data){

            if(data.length == 0){
                $scope.message = "No hay ningun registro";
            }

            $scope.data.topics = data;
        });
    }



};


angular
    .module('inspinia')
    .controller('HomeCtrl', HomeCtrl);