var mysql				= require('mysql');
var config			= require('./config.js');


var createConnection = function(){
	var connection = mysql.createConnection(config.mysqlParams);
	return connection;
}

module.exports = createConnection;
