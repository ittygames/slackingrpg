/**
 * Created by Carl Wright on 7/11/2015.
 */
var mysql = require("mysql");

DBConnector = function(){

    this.connectionConfig = {
        host: "itty.co.nz",
        user: "ITTY_slackingRPG",
        password: "Password",
        database: "ITTY_slackingRPG"
    };

    this.connection = null;

    this.connect = function(){
        this.connection = mysql.createConnection(this.connectionConfig);
        return this.connection;
    };

    this.doQuery = function(_query, _args){
        return this.connection.query(_query,_args,function(err,rows){
            return rows;
        });
    };

    this.close = function(){
        this.connection.close()
    }
};


