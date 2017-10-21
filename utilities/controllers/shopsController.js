var dbConnectionCreator = require('../mysqlConnection.js');

var mysql = require('mysql');

var shopsController = {

	getAllShopsByType : function(type, callback) 
	{
		var dbConnection = dbConnectionCreator();
		
		var getAllShopsDataByTypeSqlString = "SELECT shopName FROM Shops WHERE type="+ "'" + type + "'";
		console.log(type);
		console.log(getAllShopsDataByTypeSqlString);
		dbConnection.query(getAllShopsDataByTypeSqlString, function(error, results, fields)
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