/**
 * Created by Carl Wright on 7/11/2015.
 */
var weaponLoader = require('./weapon');
var dbconnectorLoader = require('../utility/dbconnector');

exports.player = function(){
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


    //CRUD Statments no delete for player, you're trapped forever.

    this.createPlayer = function(){
        try{
            var connector = new DBConnector();
            connector.connect()
            var query = "INSERT INTO slackingRPG.player VALUES (" +
                "userName=?)";

            connector.doQuery(query, this.userName);
            this.readPlayer

        }finally {
            connector.close()
        }
    };

    this.readPlayer = function(){
        try{
            var connector = new DBConnector();
            connector.connect()
            var query = "SELECT name," +
                "userName," +
                "userId," +
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
                " From slackingRPG.player where userName = ?";

                //returened user is the sql returned rows, use the ONLY returned record , index 0.
                returnedUser = connector.doQuery(query, this.userName);
                this.set(returnedUser[0]);
        }finally {
            connector.close()
        }
    };

    this.updatePlayer = function(){
        try{
            var connector = new DBConnector();
            connector.connect()
            var query = "Update slackingRPG.player Set (" +
                "name," +
                "userName," +
                "userId," +
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
        }finally {
            connector.close();
        }
    };

    this.set = function(_data){

        this.name = _data.name;
        this.userName = _data.userName;
        this.userId = _data.userId;
        this.adventurerName = _data.adventurerName;
        this.level = _data.level;
        this.xp = _data.xp;
        this.speed = _data.speed;
        this.strength = _data.strength;
        this.class = _data.class;
        this.weapon = new Weapon().set(_data.weapon);
        this.gold = _data.gold;
        this.health = _data.health;
        this.doge = _data.doge;
        this.luck = _data.luck;
        this.previoushealth = _data.previoushealth;
    }


};