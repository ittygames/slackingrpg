/**
 * Created by Carl Wright on 7/11/2015.
 */
var mysql = require("mysql");

DBConnector = function(){

    this.connectionConfig = {
        host: "itty.co.nz",
        user: "itty_slackingRPG",
        password: "realPassword",
        database: "itty_slackingRPG"
    };

     var connection = null;

    this.connect = function(){
        this.connection = mysql.createConnection(this.connectionConfig);
        return this.connection;
    };

    
    this.doQuery = function(_query, _args){
        this.connect();
        var toReturn =  this.connection.query(_query,_args,function(err,rows){
            if(err){
            	console.error('error qrerying: ' + err.stack);
            	throw err;
            }
            return rows;
        });
        this.connection.end(function(err) {
        	if(err){ 
        		console.log('error closing: ' + err);
        	}
        });;
        return toReturn;
    };

   return this;
};


