var slackAPI = require('slackbotapi');
var config = require("./config.json");
$loadedcommands = null;


// Starting
var slack = new slackAPI({
    'token': config.token,
    'logging': config.logging,
    'autoReconnect': config.autoReconnect
});


// Slack on EVENT message, send data.
slack.on('message', function (data) {
    // If no text, return.
    if (typeof data.text == 'undefined') return;

    // If the first character starts with %, you can change this to your own prefix of course.
    if (data.text.charAt(0) === '%') {

        //set up variables
        $commandName = "";
        $indexKeeper = "";
        $commands = [];
        $inputstring = "";
        $command2 = "";

       //standard formats are:
       // %<commandname> <action 1> <optional action2, determined by leading {> {data}

        // Split the command and into its parts
        $indexKeeper = 1;
        $commandName = data.text.substring($indexKeeper,  data.text.indexOf(" ", $indexKeeper));

        $indexKeeper =  data.text.indexOf(" ", $indexKeeper) + 1;


        //there isn't a 'next' { attempt to set the command array from the remainer of the message
        if (!(data.text.indexOf("{",$indexKeeper))) {
            $commands.add( data.text.substring($indexKeeper,  data.text.length).split(" "));
            $indexKeeper =  data.text.indexOf(" ", $indexKeeper) + 1;
        }else{
            $commands.add(data.text.substring($indexKeeper,  data.text.indexOf("{", $indexKeeper) - 1).split(" "));
            $indexKeeper =  data.text.indexOf(" ", $indexKeeper) + 1;
        }


        $inputString = (data.text.substring($indexKeeper,  data.text.length)).trim();
        $inputData = eval('(' + '[' + $inputString + ']' + ')');

        console.log($commandName);
        console.log($indexKeeper);
        console.log($commands);
        console.log($inputstring);
        console.log($command2);


        if(getCommandConfigByName($CommandName)) {
            $CommandObject = require("./commands/" + (getCommandConfigByName($commandName)).commandfile);
            if ((getcommandommandConfigByName($commandName)).enabled) {
                $CommandObject.doAction(slack,data,getCommandConfigByName($commandName),$command1, $command2,$inputData)
            }
        }

           }
});

function  getCommandConfigByName($inName){
    for($Command in config.commands){
        if($Command == $inName) {
            return config.$commad[$commad];
        }
    }
    return null;
}