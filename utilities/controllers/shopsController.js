var dbConnectionCreator = require('../mysqlConnection.js');

var mysql = require('mysql');

var shopsController = {

	getAllShops : function(callback) 
	{
		var dbConnection = dbConnectionCreator();
		
		var getAllShopsDataSqlString = "SELECT shopName FROM Shops ";
		dbConnection.query(getAllShopsDataSqlString, function(error, results, fields)
		{
			if(error)
			{
				dbConnection.destroy();
				console.log("saving error: " + error);
				return (callback({error: error}));
			} else {
				console.log(results);
				return (callback({shopData: results}));
			}
		});
	}


};

module.exports = shopsController;