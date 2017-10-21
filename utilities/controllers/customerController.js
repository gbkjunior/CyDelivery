var dbConnectionCreator = require('../mysqlConnection.js');

var mysql = require('mysql');

var customerController = {

	saveNewCustomer : function(cust_name,cust_email,cust_pwd,cust_addr,cust_city,cust_state,cust_pincode, callback) 
	{
		var dbConnection = dbConnectionCreator();
		var params = [cust_name,cust_email,cust_pwd,cust_addr,cust_city,cust_state,cust_pincode];
		var saveNewCustomerSqlString = "INSERT INTO Customer (cust_name,cust_email,cust_pwd,cust_addr,cust_city,cust_state,cust_pincode) values (?,?,?,?,?,?,?)  ";
		dbConnection.query(saveNewCustomerSqlString, params, function(error, results, fields)
		{
			if(error)
			{
				dbConnection.destroy();
				console.log("saving error: " + error);
				return (callback({error: error}));
			} else {
				console.log(results);
				return (callback({customerData: results}));
			}
		});
	}


};

module.exports = customerController;