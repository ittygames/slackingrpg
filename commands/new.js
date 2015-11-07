/**
 * Created by Carl Wright on 7/11/2015.
 */
var playerLoader = require('./player.js');
exports.doAction = function($slack, $slackData, $command, $commands, $commandData) {

    switch ($commands[0]){
        case "name":

            //build the entered name from the remainder of string in the commands array
            var buildname = "";
            for(x=1;x<$commands.size;x++){
                buildname = buildname + " " + $command[x];
            }

            //validate name
            if(buildname.trim() != "") {
                var currentPlayer = new playerLoader.player();
                currentPlayer.userName = $slackData['userName'];
                currentPlayer.readPlayer();
                if(currentPlayer.id > 0){
                    currentPlayer.adventurerName = buildname;
                    currentPlayer.updatePlayer();
                    if(currentPlayer.id > 0){
                        if(currentPlayer.adventurerName == buildname){
                            //congraulations name sucessfully changed.
                        }else{
                            //update failed
                        }
                    }else{
                        //something went wong please contact admin
                    }
                }else{
                    //player not found, contact admin
                }


            }else{
                    //please enter a valid name
            }

            break;

        default:
            break;

    }

}