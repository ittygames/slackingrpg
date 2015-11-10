/**
 * Created by Carl Wright on 7/11/2015.

 *var weaponLoader = require('./weapon');
  var dbconnectorLoader = require('../utility/dbconnector');
 *
 */

class player {
    
	constructor() {
	this.name = "";
    this.userName = "";
    this.userId = 0;
    this.adventurerName = "";
    this.level = 1;
    this.xp = 0;
    this.speed = 0;
    this.strength = 0;
    this.class = "";
    this.weapon = new weapon();
    this.gold = 0;
    this.health = 200;
    this.doge = 0;
    this.luck = 0;
    this.previoushealth = 0;

	}
    //CRUD Statments no delete for player, you're trapped forever.

    createPlayer(){
        try {
            var connector = new DBConnector();
            var query = mysql.escape("INSERT INTO `itty_slackingRPG`.`player`(`userName`) VALUES ('"+this.userName+"')");
            connector.doQuery(query);
            this.readPlayer();
        }catch(ex){
            console.log(ex.message);
        }
    }

    readPlayer(){
        try{
            var connector = new DBConnector();
            var query = "SELECT name," +
                "userName," +
                "Id," +
                "adventurerName," +
                "level," +
                "xp," +
                "speed," +
                "strength," +
                "class," +
                "gold," +
                "health," +
                "doge," +
                "luck," +
                "previoushealth" +
                " From itty_slackingRPG.player where userName = @userName";

                //returened user is the sql returned rows, use the ONLY returned record , index 0.
                returnedUser = connector.doQuery(query, {"userName" : this.userName});
                this.set(returnedUser[0]);
      
        }catch(ex){
        	console.log(ex.message);
        }
    }

    updatePlayer(){
        try{
            var connector = new DBConnector();
            connector.connect()
            var query = "Update slackingRPG.player Set (" +
                "name," +
                "userName," +
                "Id," +
                "adventurerName," +
                "level," +
                "xp," +
                "speed," +
                "strength," +
                "class," +
                "gold," +
                "health," +
                "doge," +
                "luck," +
                "previoushealth" +
                ")" +
                "VALUES" +
                "(" +
                "?,?,?,?,?,?,?,?,?,?,?,?,?,?,?" +
                ")" +
                " From slackingRPG.player where userName = ?";

            //returened user is the sql returned rows, use the ONLY returned record , index 0.
            returnedUser = connector.doQuery(query, [
                this.userName,
            this.userName,
            this.userId ,
            this.adventurerName,
            this.level,
            this.xp,
            this.speed,
            this.strength,
            this.class,
            this.gold,
            this.health,
            this.doge,
            this.luck,
            this.previoushealth,
	    this.userName
        ]
            );
            this.set(returnedUser[0]);
        }catch(ex){
        	console.log(ex.message);
        }
    }
    
    
    set(setData){

        this.name = setData.name;
        this.userName = setData.userName;
        this.userId = setData.userId;
        this.adventurerName = setData.adventurerName;
        this.level = setData.level;
        this.xp = setData.xp;
        this.speed = setData.speed;
        this.strength = setData.strength;
        this.class = setData.class;
        this.weapon = new Weapon().set(setData.weapon);
        this.gold = setData.gold;
        this.health = setData.health;
        this.doge = setData.doge;
        this.luck = setData.luck;
        this.previoushealth = setData.previoushealth;
    }
    
}

