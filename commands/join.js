/**
 * Created by Carl Wright on 7/11/2015.
 */
var weaponLoader = require('./player.js');



exports.doAction = function($slack, $slackData, $command, $commands, $commandData)
{
    var callingPlayer = new weaponLoader.player();
    callingPlayer.userName = $slackData['userName']
    try{
        callingPlayer.readPlayer();
        if(callingPlayer.id > 0){
            //Error player already exists
        }else{
            callingPlayer.userName = $slackData['userName']
            callingPlayer.createPlayer();
            if (callingPlayer.id > 0){
                // welcome player ask them to call set name <playername to continue>
            }else{
                //something went wrong, please call an administrator.
            }
        }
    }

    catch(exception){
        callingPlayer.userName = $slackData['userName']
        callingPlayer.createPlayer();
        if (callingPlayer.id > 0){
            // welcome player ask them to call set name <playername to continue>
        }else{
            //something went wrong, please call an administrator.
        }
    }

}