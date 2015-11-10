/**
 * Created by Carl Wright on 7/11/2015.
 */
var playerLoader = require('../classes/entities/player');



exports.doAction = function($slack, $slackData, $command, $commands, $commandData)
{
    var callingPlayer = new playerLoader.player();
    callingPlayer.userName = $slackData['user']
    try{
        callingPlayer.readPlayer();
        if(callingPlayer.id > 0){
            //Error player already exists
        }else{
            callingPlayer.userName = $slackData['user']
            callingPlayer.createPlayer();
            if (callingPlayer.id > 0){
                // welcome player ask them to call set name <playername to continue>
            }else{
                //something went wrong, please call an administrator.
            }
        }
    }

    catch(exception){
        callingPlayer.userName = $slackData['user']
        callingPlayer.createPlayer();
        if (callingPlayer.id > 0){
            // welcome player ask them to call set name <playername to continue>
        }else{
            //something went wrong, please call an administrator.
        }
    }

}